"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { TbMessage } from "react-icons/tb";
import { PostProps } from "./types";

const Post = ({ post }: { post: PostProps }): JSX.Element => {
  const [liked, setLiked] = React.useState<boolean>(post.post.liked);
  const [likes, setLikes] = React.useState<number>(20);
  const [comments, setComments] = React.useState<number>(25);
  const stats = [
    {
      label: "Posts",
      value: post.profile.followers,
    },
    {
      label: "Connects",
      value: post.profile.followers,
    },
    {
      label: "Connecting",
      value: post.profile.followers,
    },
  ];

  const postActions = [
    {
      label: "Like",
      value: likes,
      icon: liked ? (
        <AiFillHeart
          className="text-2xl text-white cursor-pointer mr-1"
          onClick={() => {
            setLiked(!liked);
            setLikes(liked ? likes - 1 : likes + 1);
          }}
        />
      ) : (
        <AiOutlineHeart
          className="text-2xl text-white cursor-pointer mr-1"
          onClick={() => {
            setLiked(!liked);
            setLikes(liked ? likes - 1 : likes + 1);
          }}
        />
      ),
    },
    {
      label: "Comment",
      value: comments,
      icon: (
        <TbMessage
          className="text-2xl text-white cursor-pointer mr-1"
          onClick={() => {
            setComments(comments + 1);
          }}
        />
      ),
    },
    {
      label: "Share",
      value: post.post.shares,
      icon: (
        <BsArrowUpRightCircle className="text-2xl text-white cursor-pointer mr-1" />
      ),
    },
  ];

  return (
    <div className="my-5 px-2 rounded-lg" id={post.post.shares}>
      {/* Profile section */}

      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <div className="relative">
            <Image
              src={post.profile.imageURL}
              width="50"
              height={50}
              objectFit="cover"
              alt="profile image"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col ml-2">
            <div className="text-sm font-bold truncate">
              {post.profile.name}
            </div>
            <div className="text-xs flex truncate">
              <MdLocationOn className="text-md my-auto cursor-pointer mr-2" />{" "}
              {post.profile.distance}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {stats.map((stat, k) => (
            <div key={`stat_${k}`} className="flex flex-col mx-2 lg:mx-4">
              <div className="text-sm font-bold text-center">{stat.value}</div>
              <div className="text-xs">{stat.label}</div>
            </div>
          ))}

          <div className="flex flex-col ml-2">
            <div className="text-sm font-bold text-center">
              <BiBookmark className="text-xl text-orange-500 cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col ml-4">
            <div className="text-sm font-bold text-center">
              <SlOptionsVertical className="text-xl text-orange-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Post */}
      <div className="relative">
        <Image
          src={post.post.imageURL}
          width="1000"
          height={400}
          alt="post.post image"
          className="rounded-xl"
        />

        {/* likes and comments */}
        <div className="absolute right-0 bottom-0 text-white">
          <div className="flex justify-between my-auto px-4 py-3">
            {/* likes */}
            {postActions.map((action, k) => (
              <div key={`action_${k}`} className="flex flex-col mx-2 lg:mx-4">
                <div className="text-sm flex justify-center font-bold text-center">
                  {action.icon}
                  <span className="pl-2">{action.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-gray-800 p-2">
        <div className="text-sm">{post.post.description}</div>

        <div className="flex my-1 cursor-pointer font-normal text-orange-500">
          <div className="text-xs">View Comments</div>
          <HiArrowLongRight className="text-lg my-auto mx-3" />
        </div>

        <div>{post.post.liked}</div>
      </div>
    </div>
  );
};

export default Post;
