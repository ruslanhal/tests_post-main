"use client";

import React, { useState } from "react";
import { IPost } from "../../../interface/IPosts";
import { Icon } from "@iconify-icon/react";
import {  useSearchParams } from "next/navigation";

export interface PostItemProps {
  post: IPost;
  onEdit: (post: IPost) => void;
  onDelete: (postId: number) => void;
  onComments: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onEdit, onDelete, onComments }) => {
  const [isComment, setIsComment] = useState(false)
  const data = useSearchParams();
  const postId = data.get('id');

  return (
    <>
      <div className="mb-5 p-4 border rounded-md  shadow-sm overflow-auto hover:bg-slate-100 mr-2">
        <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
        <p className="text-gray-500 line-clamp-4">{post.body}</p>
        {!postId ? (
          <div className="flex justify-end">
            <button
              onClick={() => onEdit(post)}
              className="flex items-center justify-center text-white py-1 px-2 rounded-md hover:bg-slate-300"
            >
              <Icon
                icon="uil:edit"
                width="25px"
                height="30px"
                style={{ color: "blueviolet" }}
              />
            </button>
            <button
              onClick={() => onComments(post)}
              className="flex items-center justify-center text-white py-1 px-2 rounded-md hover:bg-slate-300"
            >
              <Icon
                icon="uil:comment"
                width="25px"
                height="30px"
                style={{ color: "blue" }}
              />
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="flex items-center justify-center text-white py-1 px-2 rounded-md hover:bg-slate-300"
            >
              <Icon
                icon="bi:trash"
                width="25px"
                height="30px"
                style={{ color: "red" }}
              />
            </button>

          </div>
        ) : null}
      </div>
      {isComment && postId ? (
        <div>

        </div>
      )
        : postId && !isComment ?
          (<p className="flex justify-center text-xl ">This post has no comments yet</p>) 
        : null
      }
    </>
  );
};

export default PostItem;
