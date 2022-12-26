import React from "react";
import Header from "@/components/header";

import { MdLocationOn } from "react-icons/md";
import { FiHeart, FiLink2 } from "react-icons/fi";
import { BsGrid3X3 } from "react-icons/bs";
import { TbMessage, TbLink } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import { RxEnvelopeClosed } from "react-icons/rx";

import { TRENDING_CONTENT, PROFILE_POSTS, PROFILE } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/texts";

type TrendingProps = {
  name: string;
  designation: string;
  company: string;
  id: string;
  distance: string;
  imageURL: string;
  liked: boolean;
};

type ProfileProps = {
  name: string;
  designation: string;
  email: string;
  bio: string;
  dob: string;
  company: string;
  id: string;
  imageURL: string;
  posts: string;
  connects: string;
  connecting: string;
};

type ProfilePost = {
  posts: string;
  discoveries: string;
};

type PostProps = {
  profile: {
    name: string;
    followers: string;
    following: string;
    imageURL: string;
    distance: string;
    id: string;
  };
  shopURL: string;
  post: {
    imageURL: string;
    description: string;
    liked: boolean;
    likes: string;
    comments: string;
    shares: string;
  };
  liked: boolean;
};

function ProfilePage() {
  const _renderTrendingPost = (post: TrendingProps): JSX.Element => {
    return (
      <div className="my-5 bg-trending-background rounded-md" id={post.id}>
        <div className="relative">
          <div className="absolute right-0 text-trending-icon">
            <Link href="/#">
              <FiHeart className="text-xl m-2" />
            </Link>
          </div>
          <Image
            src={post.imageURL}
            width="250"
            height={100}
            alt="post image"
            className="rounded-md border-b-4 border-trending-icon"
          />
        </div>
        <div className="text-gray-800 p-2">
          <div className="text-sm font-bold truncate">{post.name}</div>

          <div className="text-xs truncate">
            {post.designation} @ <span>{post.company}</span>
          </div>

          <div className="flex my-1">
            <Link href="/#m">
              <TbMessage className="text-xl text-trending-icon my-auto mr-2 cursor-pointer" />
            </Link>
            <Link href="/#">
              <TbLink className="text-xl text-trending-icon my-auto mr-2 cursor-pointer" />
            </Link>
          </div>

          <div className="flex my-1">
            <MdLocationOn className="text-lg my-auto cursor-pointer" />
            <div className="text-xs">{post.distance}</div>
          </div>

          <div>{post.liked}</div>
        </div>
      </div>
    );
  };

  const _renderProfile = () => {
    const data = PROFILE as ProfileProps;
    const stats = [
      { name: "Connects", value: data.connects },
      { name: "Connecting", value: data.connecting },
      { name: "Posts", value: data.posts },
    ];

    return (
      <div className="mb-4">
        <div className="grid md:flex justify-between">
          <div>
            <div className="grid md:flex items-center mb-3">
              <div className="relative mr-3 my-auto">
                <Image
                  src={data.imageURL}
                  width={70}
                  height={70}
                  objectFit="cover"
                  alt="profile image"
                  className="rounded-full my-auto"
                />
              </div>
              <div className="flex flex-col ml-2">
                <div className="text-xl font-bold">{data.name}</div>
                <div className="text-sm">{data.dob}</div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex flex-col ml-2">
                  <div className="text-sm font-normal truncate">
                    {data.designation} @ {data.company}
                  </div>

                  <div className="text-sm font-normal">{data.email}</div>
                  <div className="text-sm">{data.bio}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:flex items-start">
            <div className="flex my-2 items-center">
              {stats.map((stat, k) => (
                <div key={`stat_${k}`} className="flex flex-col mx-4">
                  <div className="text-sm font-bold text-center truncate">
                    {stat.value}
                  </div>
                  <div className="text-xs truncate">{stat.name}</div>
                </div>
              ))}
            </div>

            <div className="flex my-2 justify-around items-center">
              <div className="flex flex-col ml-2">
                <button className="text-sm flex border text-orange-500 border-orange-500 rounded-full p-2 font-bold text-center">
                  <RxEnvelopeClosed className="text-md my-auto cursor-pointer mx-2" />{" "}
                  <span className="text-md px-2">Message</span>
                </button>
              </div>

              <div className="flex flex-col ml-2">
                <button className="text-sm font-bold border text-orange-500 border-orange-500 rounded-full p-2 text-center">
                  {/* Share */}
                  <FiLink2 className="text-md my-auto cursor-pointer mx-3" />
                </button>
              </div>

              <div className="flex flex-col ml-4">
                <button className="flex text-sm font-bold border text-orange-500 border-orange-500 rounded-full p-2 text-center">
                  <RiPencilFill className="text-md my-auto cursor-pointer mx-2" />{" "}
                  <span className="text-md px-2">Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const _renderPost = (image: string): JSX.Element => {
    return (
      <div className="my-5 w-auto flex-shrink-0 rounded-lg" id={image}>
        <Image
          src={image}
          width={150}
          height={100}
          objectFit={"contain"}
          alt="image"
          className="rounded-md"
        />
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="mx-auto align-middle">
        <div className="flex justify-center mx-auto">
          {/* TODO: Convert this to reusable layout component */}
          <section
            id="trending-posts"
            className="hidden lg:block mr-3 lg:h-min lg:sticky lg:top-20 xs:hidden trending-container pr-4"
          >
            <div style={{ height: "90vh", overflowY: "scroll" }}>
              {TRENDING_CONTENT.map((post: TrendingProps) =>
                _renderTrendingPost(post)
              )}
            </div>
          </section>

          <section className="px-2 flex-1 container" id="posts">
            {_renderProfile()}

            <div className="flex-1">
              <Heading title="Posts" icon={<BsGrid3X3 className="text-lg" />} />

              <div className="flex overflow-x-scroll gap-5 mb-5">
                {PROFILE_POSTS.posts.map((post: string) => _renderPost(post))}
              </div>

              <Heading
                title="Discoveries"
                icon={<BsGrid3X3 className="text-lg" />}
              />

              <div className="flex overflow-x-scroll gap-5 mb-5">
                {PROFILE_POSTS.discoveries.map((post: string) =>
                  _renderPost(post)
                )}
              </div>

              <Heading
                title="Collections"
                icon={<BsGrid3X3 className="text-lg" />}
              />

              <div className="flex overflow-x-scroll gap-5 mb-5">
                {PROFILE_POSTS.discoveries.map((post: string) =>
                  _renderPost(post)
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
