import React from "react";
import Header from "@/components/header";
import { MdLocationOn } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { TbMessage, TbLink } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import { HiArrowLongRight } from "react-icons/hi2";
import { TRENDING_CONTENT, POSTS_CONTENT } from "@/lib/constants";
import Image from "next/image";
import { SubHeading } from "@/components/texts";

type TrendingProps = {
  name: string;
  designation: string;
  company: string;
  id: string;
  distance: string;
  imageURL: string;
  liked: boolean;
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
function HomePage() {
  const _renderTrendingPost = (post: TrendingProps): JSX.Element => {
    return (
      <div className="my-5 bg-trending-background rounded-md" id={post.id}>
        <div className="relative">
          <div className="absolute right-0 z-10 text-trending-icon">
            <FiHeart className="text-xl m-2" />
          </div>
          <Image
            src={post.imageURL}
            width="250"
            height={100}
            objectFit="cover"
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
            <TbMessage className="text-xl text-trending-icon my-auto mr-2" />
            <TbLink className="text-xl text-trending-icon my-auto mr-2" />
          </div>

          <div className="flex my-1">
            <MdLocationOn className="text-lg my-auto" />
            <div className="text-xs">{post.distance}</div>
          </div>

          <div>{post.liked}</div>
        </div>
      </div>
    );
  };

  const _renderPosts = (data: PostProps): JSX.Element => {
    const stats = [
      {
        label: "Posts",
        value: data.profile.followers,
      },
      {
        label: "Connects",
        value: data.profile.followers,
      },
      {
        label: "Connecting",
        value: data.profile.followers,
      },
    ];
    return (
      <div className="my-5 rounded-lg" id={data.post.shares}>
        {/* Profile section */}

        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <div className="relative">
              <Image
                src={data.profile.imageURL}
                width="50"
                height={50}
                objectFit="cover"
                alt="profile image"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-2">
              <div className="text-sm font-bold truncate">
                {data.profile.name}
              </div>
              <div className="text-xs flex truncate">
                <MdLocationOn className="text-md my-auto mr-2" />{" "}
                {data.profile.distance}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            {stats.map((stat, k) => (
              <div key={`stat_${k}`} className="flex flex-col mx-4">
                <div className="text-sm font-bold text-center truncate">
                  {stat.value}
                </div>
                <div className="text-xs truncate">{stat.label}</div>
              </div>
            ))}

            <div className="flex flex-col ml-2">
              <div className="text-sm font-bold text-center truncate">
                <BiBookmark className="text-xl text-orange-500" />
              </div>
            </div>

            <div className="flex flex-col ml-4">
              <div className="text-sm font-bold text-center truncate">
                <SlOptionsVertical className="text-xl text-orange-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Post */}
        <Image
          src={data.post.imageURL}
          width="1000"
          height={400}
          objectFit="cover"
          alt="data.post image"
          className="rounded-xl"
        />
        <div className="text-gray-800 p-2">
          <div className="text-sm truncate">{data.post.description}</div>

          <div className="flex my-1 font-normal text-orange-500">
            <div className="text-xs">View Comments</div>
            <HiArrowLongRight className="text-lg my-auto mx-3" />
          </div>

          <div>{data.post.liked}</div>
        </div>
      </div>
    );
  };

  const _renderLocalMarketProduct = (post: TrendingProps): JSX.Element => {
    return (
      <div className="my-5 rounded-md" id={post.id}>
        <Image
          src={post.imageURL}
          width="350"
          height={100}
          objectFit="cover"
          alt="post image"
          className="rounded-md"
        />
        <div className="text-gray-800 p-2">
          <div className="text-sm font-bold truncate">{post.name}</div>

          <div className="flex my-1">
            <MdLocationOn className="text-lg my-auto" />
            <div className="text-xs">{post.distance}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container px-2 lg:mx-auto">
      <Header />

      <div className="flex w-full">
        <section
          id="trending-posts"
          className="px-2 mr-3 trending-container pr-4"
        >
          {TRENDING_CONTENT.map((post: TrendingProps) =>
            _renderTrendingPost(post)
          )}
        </section>

        <section className="px-2 md:max-w-lg lg:max-w-2xl xl:max-w-3xl" id="posts">
          <div className="flex-1">
            {POSTS_CONTENT.map((post: PostProps) => _renderPosts(post))}
          </div>
        </section>

        <section id="local-market" className="mr-3 local-market-container px-2">
          <SubHeading title="Local Market" subtitle={""} />
          {TRENDING_CONTENT.map((post: TrendingProps) =>
            _renderLocalMarketProduct(post)
          )}
        </section>
      </div>
    </div>
  );
}
export default HomePage;
