import Image from "next/image";
import React from "react";
import { TfiLayoutListPost } from "react-icons/tfi";
import { CgPlayButtonR } from "react-icons/cg";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";

import axios from "axios";

const Input = (props: any) => {
  if (props.type === "select") {
    return (
      <div className="p-2">
        <div className="py-1">
          <label htmlFor={props.id} className="font-medium text-sm">
            {props.label}
          </label>
        </div>
        <div>
          <select
            multiple={props.multiple}
            id={props.id}
            onChange={props.onChange}
            className="w-full bg-transparent duration-200 text-gray-800 p-1 outline-none focus:outline-none border-b-2 border-gray-300 focus:border-gray-800"
          >
            {props.options.map((option: any, key: number) => (
              <option key={key} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="py-1">
        <label htmlFor={props.id} className="font-medium text-sm">
          {props.label}
        </label>
      </div>
      <input
        id={props.id}
        onChange={props.onChange}
        className="w-full bg-transparent duration-200 text-gray-800 p-1 outline-none focus:outline-none border-b-2 border-gray-300 focus:border-gray-800"
        placeholder={props.placeholder}
      />
    </div>
  );
};

const UploadPage = (props: any) => {
  // check login
  const uploadImage = (e: any) => {
    // upload file
    let file = e.target.files[0];
    console.log(file);

    fetch("/api/upload-s3", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      body: JSON.stringify({
        file: {
          name: "images/" + file.name,
          type: file.type,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const url = res.url;

        axios
          .put(url, file, {
            headers: {
              "Content-Type": file.type,
              "Access-Control-Allow-Origin": "*",
            },
          })

          .then((res) => {
            let uploadedURL =
              "https://post-uploads.s3.ap-northeast-1.amazonaws.com/images/" +
              encodeURI(file.name);
            console.log(uploadedURL);
            props.moveForward([uploadedURL]);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    // props.moveBackward();
  };

  return (
    <div className="flex h-96 justify-center align-middle">
      <label
        htmlFor="imageUpload"
        className="mx-3 my-auto text-sm cursor-pointer font-medium bg-orange-500 text-white p-2 px-3 rounded-full"
      >
        Drag Image here / Browser
      </label>

      <input
        id="imageUpload"
        className="hidden"
        placeholder="Upload"
        onChange={uploadImage}
        type={"file"}
      />
    </div>
  );
};

const SelectCategory = (props: any) => {
  return (
    <div className="p-2">
      <div className="flex justify-between py-3">
        <button className="mx-3 font-semibold" onClick={props.moveBackward}>
          <RiArrowLeftLine className="text-2xl text-gray-700" />
        </button>

        <div>
          <label htmlFor="select-category" className="font-semibold flex">
            Select Category
            <BiChevronDown className="text-lg my-auto mx-2 text-gray-700" />
          </label>
          {/* add dropdown */}
        </div>

        <button className="mx-3 font-semibold" onClick={props.moveForward}>
          <RiArrowRightLine className="text-2xl text-gray-700" />
        </button>
      </div>

      <div className="h-96 overflow-scroll justify-between p-3">
        <Image
          src={props.images[0]}
          width={1200}
          height={600}
          alt="test"
          className="object-cover"
        />
      </div>
    </div>
  );
};

const ProductInfo = (props: any) => {
  return (
    <div className="p-2">
      {/* header */}
      <div className="flex justify-between py-3">
        <button className="mx-3 font-semibold" onClick={props.moveBackward}>
          <RiArrowLeftLine className="text-2xl text-gray-700" />
        </button>

        <div>
          <label htmlFor="select-category" className="font-semibold flex">
            Select Category
            <BiChevronDown className="text-lg my-auto mx-2 text-gray-700" />
          </label>
          {/* add dropdown */}
        </div>

        <button className="mx-3 font-semibold" onClick={props.moveForward}>
          <RiArrowRightLine className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* inputs in two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="flex flex-col">
            <Input
              label="Product Name"
              id="productName"
              onChange={(e: any) => {
                console.log(e.target.value);
              }}
              placeholder=""
            />

            <Input label="Brand Name" id="brandName" placeholder="" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <Input label="Price" id="price" placeholder="" />

              <Input label="Qty" id="quantity" placeholder="" />

              <Input
                label="Weight"
                id="weight"
                type="select"
                options={[{ label: "test" }, { label: "test2" }]}
                placeholder=""
              />
            </div>

            <Input
              label="Category"
              id="category"
              type="select"
              options={[{ label: "test" }, { label: "test2" }]}
              placeholder=""
            />

            <Input
              label="Sub-Category"
              id="sub_category"
              type="select"
              options={[{ label: "test" }, { label: "test2" }]}
              placeholder=""
            />
          </div>
        </div>

        <div>
          <Input label="Tag the shop" id="shop" placeholder="Enter shop name" />
          <div className="w-full flex justify-center bg-red-200 mt-3">
            <Image src={props.images[0]} width={1000} height={50} alt="test" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopInfo = (props: any) => {
  return (
    <div className="p-2">
      {/* header */}
      <div className="flex justify-between py-3">
        <button className="mx-3 font-semibold" onClick={props.moveBackward}>
          <RiArrowLeftLine className="text-2xl text-gray-700" />
        </button>

        <div>
          <p className="font-semibold flex">Shop Info</p>
          {/* add dropdown */}
        </div>

        <button className="mx-3 font-semibold" onClick={props.moveForward}>
          <RiArrowRightLine className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* inputs in two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="w-full flex justify-center bg-red-200 mt-3">
          <Image src={props.images[0]} width={1000} height={50} alt="test" />
        </div>

        <div>
          <div className="flex flex-col w-full">
            <Input label="Shop Name" id="brandName" placeholder="" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input label="Materials Used" id="materialUsed" placeholder="" />

              <Input label="Local Address" id="localAddress" placeholder="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input label="Price" id="price" placeholder="" />

              <Input label="Pin" id="pin" placeholder="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input label="Occasions" id="occasions" placeholder="" />

              <Input
                label="City"
                id="city"
                type="select"
                options={[{ label: "test" }, { label: "test2" }]}
                placeholder=""
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input label="Best Use" id="best_use" placeholder="" />

              <Input
                label="State"
                id="state"
                type="select"
                options={[{ label: "test" }, { label: "test2" }]}
                placeholder=""
              />
            </div>

            <Input
              label="Country"
              id="country"
              type="select"
              options={[{ label: "test" }, { label: "test2" }]}
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Settings = (props: any) => {
  return (
    <div className="p-2">
      {/* inputs in two columns */}

      <div className="flex flex-col">
        <div className="flex justify-between my-2">
          <p className="w-full border bg-transparent border-none border-b-2 border-b-black p-1 focus:outline-gray-400 focus:border-b-gray-500">
            Location
          </p>

          <div className="my-auto">
            <button className="mx-3 font-semibold">
              <VscLocation className="text-2xl text-orange-500" />
            </button>
          </div>
        </div>

        <div className="flex justify-between my-2">
          <p className="w-full border bg-transparent border-none border-b-2 border-b-black p-1 focus:outline-gray-400 focus:border-b-gray-500">
            Settings
          </p>

          <div className="my-auto">
            <button className="mx-3 font-semibold">
              <RiArrowRightLine className="text-2xl text-orange-500" />
            </button>
          </div>
        </div>

        <div>
          <div className="font-medium text-sm">
            Hide like and view counts on this post
          </div>
          <div className="font-medium text-sm">
            Only you will see the total number of likes and views on this post.
            You can change this later.To hide like counts on other people&apos;s
            posts, go to your account settings.
          </div>
          <div className="font-medium cursor-pointer text-orange-600 text-xs">
            Learn more
          </div>
        </div>

        <div className="flex justify-between my-2">
          <p className="w-full border bg-transparent border-none border-b-2 border-b-black p-1 focus:outline-gray-400 focus:border-b-gray-500">
            Accessibility
          </p>

          <div className="my-auto">
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const CreatePost = () => {
  const [post, setPost] = React.useState<any>({
    title: "",
    images: [
      "https://post-uploads.s3.ap-northeast-1.amazonaws.com/images/Simulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202022-06-23%20at%2011.12.35.png",
    ],
  });

  const [postType, setPostType] = React.useState<string>("Post");

  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const moveForward = () => {
    if (currentPage === 3) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const moveBackward = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const FORM: any = {
    0: {
      component: (
        <UploadPage
          moveForward={(images: any) => {
            console.log(images);
            setPost({ ...post, images: images });
            moveForward();
          }}
          moveBackward={moveBackward}
        />
      ),
      label:
        "You can add posts, discoveries, collections to profile for your viewers to connect with you.",
    },

    1: {
      component: (
        <SelectCategory
          images={post.images}
          moveForward={moveForward}
          moveBackward={moveBackward}
        />
      ),
      label:
        "You can add posts, discoveries, collections to profile for your viewers to connect with you.",
    },

    2: {
      component: (
        <ProductInfo
          images={post.images}
          moveForward={(postData: any) => {
            setPost({ ...post, ...postData });
            moveForward();
          }}
          moveBackward={moveBackward}
        />
      ),
      label:
        "Enter all details about the product for your viewers best experience",
    },

    3: {
      component: (
        <ShopInfo
          images={post.images}
          moveForward={(postData: any) => {
            setPost({ ...post, ...postData });
            moveForward();
          }}
          moveBackward={moveBackward}
        />
      ),
      label:
        "You can add posts, discoveries, collections to profile for your viewers to connect with you.",
    },

    4: {
      component: (
        <Settings
          images={post.images}
          moveForward={moveForward}
          moveBackward={moveBackward}
        />
      ),
      label: "Guide the users so that they don’t do generic post",
    },
  };

  const _renderModes = () => {
    const modes = [
      { label: "Post", icon: <TfiLayoutListPost /> },
      { label: "Discoveries", icon: <CgPlayButtonR /> },
      { label: "Experiences", icon: <CgPlayButtonR /> },
      { label: "Collections", icon: <CgPlayButtonR /> },
    ];
    return (
      <div className="flex justify-between border-b-2 border-b-orange-200">
        {modes.map((mode: any, k: number) => {
          return (
            <button
              key={k}
              onClick={() => setPostType(mode.label)}
              className={
                postType === mode.label
                  ? "w-full my-auto z-10 border-b-2 border-b-orange-500"
                  : "w-full my-auto border-b-2 bg-transparent"
              }
            >
              <div className="flex justify-center mx-auto text-center items-center text-orange-500 my-3">
                <div className="rounded-full font-semibold my-auto">
                  {mode.icon}
                </div>
                <div className="font-semibold mx-2">{mode.label}</div>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-gradient min-h-2/3 p-3">
      <div className="flex justify-between w-full m-3">
        <div>
          <div className="flex items-center">
            <div className="relative">
              <Image
                src="https://picsum.photos/250/252"
                width="50"
                height={50}
                objectFit="cover"
                alt="profile image"
                className="rounded-md w-10 h-10"
              />
            </div>
            <div className="flex flex-col ml-2">
              <div className="text-sm font-bold truncate">Aman Maan</div>
            </div>
          </div>

          <div className="text-sm my-3">
            {FORM[currentPage as keyof typeof FORM].label}
          </div>
        </div>
        <div className="font-bold p-3">
          <div className="flex gap-2">
            <p className="border-black m-auto align-middle text-center justify-center flex rounded-full text-xs w-10 h-10 border-2">
              <div className="m-auto">50%</div>
            </p>
            <button className="border bg-orange-500 p-2 px-4 rounded-full text-xs text-white">
              Publish
            </button>
          </div>
        </div>
      </div>

      {_renderModes()}

      {FORM[currentPage as keyof typeof FORM].component}
    </div>
  );
};

export default CreatePost;
