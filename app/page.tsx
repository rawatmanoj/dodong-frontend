"use client";

import React, { useState } from "react";

import Post from "@/components/post";

import { MdLocationOn, MdOutlineWifiTethering } from "react-icons/md";
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
import CreatePost from "@/components/post/create";
import { PostProps } from "@/components/post/types";
import dynamic from "next/dynamic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getRequest, postRequest } from "@/lib/networkHelper";
import { Urls } from "@/lib/apiConstants";
import axios from "axios";
import { toast } from "@/ui/toast";
import { ZodError } from "zod";
import { AiTwotoneSwitcher } from "react-icons/ai";
import { BsPlayBtn } from "react-icons/bs";
import Modal from "@/ui/modal";

const DynamicHeader = dynamic(() => import("@/components/header"), {
  ssr: true,
});

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
  const [loading, setLoading] = useState(true);

  const {
    data,
    isLoading,
  }: {
    data: PostProps[] | undefined;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getRequest(Urls.posts),
  });

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
          width={400}
          height={400}
          alt="data.post image"
          className="rounded-xl w-full"
          style={{ width: "100%" }}
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
      <DynamicHeader />
      <Modal>
        <CreatePost />
      </Modal>

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
              {/* {isLoading && <div>Loading...</div>} */}

              {POSTS_CONTENT.map((post: PostProps, k: number) => (
                <Post key={k} post={post} />
              ))}
            </div>
          </section>

          <section
            id="local-market"
            className="md:block lg:h-min lg:sticky lg:overflow-y-scroll lg:top-20 max-w-sm xs:hidden px-2"
          >
            <div className="flex-1 w-80" style={{ height: "90vh" }}>
              <div className="cursor-pointer bg-orange-500 rounded-full px-3 text-center text-white py-3 text-sm font-bold my-4">
                Post / Share
              </div>
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
