"use client";

import React from "react";
import Header from "@/components/header";
import Post from "@/components/post";

import { MdLocationOn } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { TbMessage, TbLink } from "react-icons/tb";
import {
  TRENDING_CONTENT,
  POSTS_CONTENT,
  LOCAL_MARKET_CONTENT,
} from "@/lib/constants";
import Image from "next/image";
import { Heading } from "@/components/texts";
import Link from "next/link";
import Statuses from "@/components/status";
import { PostProps } from "@/components/post/types";

type TrendingProps = {
  name: string;
  designation: string;
  company: string;
  id: string;
  distance: string;
  imageURL: string;
  liked: boolean;
};

type LocalMarketProps = {
  name: string;
  designation: string;
  company: string;
  id: string;
  distance: string;
  imageURL: string;
  location: string;
  liked: boolean;
};

function HomePage() {
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
            width="1000"
            height={400}
            alt="data.post image"
            className="rounded-xl"
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

  const _renderLocalMarketProduct = (post: LocalMarketProps): JSX.Element => {
    return (
      <div className="my-5 px-2 rounded-md mx-auto" id={post.id}>
        <Image
          src={post.imageURL}
          height={200}
          width={200}
          alt="data.post image"
          className="rounded-xl"
        />
        <div className="text-gray-800 m-2">
          <div className="text-sm font-bold truncate">{post.name}</div>

          <div className="flex my-1">
            <MdLocationOn className="text-lg my-auto" />
            <div className="text-xs">{post.location}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="mx-auto align-middle">
        <div className="grid md:flex px-2 justify-center mx-auto">
          <section
            id="trending-posts"
            className="hidden lg:block mr-3 lg:h-min lg:sticky lg:top-20 xs:hidden trending-container pr-4"
          >
            <div className="overflow-y-scroll px-2" style={{ height: "90vh" }}>
              {TRENDING_CONTENT.map((post: TrendingProps) =>
                _renderTrendingPost(post)
              )}
            </div>
          </section>

          <section
            className="flex-1 max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl"
            id="posts"
          >
            <Statuses />
            <div className="flex-1">
              {POSTS_CONTENT.map((post: PostProps, k: number) => (
                <Post key={k} post={post} />
              ))}
            </div>
          </section>

          <section
            id="local-market"
            className="md:block lg:h-min lg:sticky lg:overflow-y-scroll lg:top-20 xl:max-w-xs xs:hidden px-2"
          >
            <div style={{ height: "90vh" }}>
              <Heading title="Local Market" icon={<></>} />
              {LOCAL_MARKET_CONTENT.map((post: LocalMarketProps) =>
                _renderLocalMarketProduct(post)
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
