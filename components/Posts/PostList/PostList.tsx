"use client";

import React from "react";
import { IPost } from "../../../interface/IPosts";
import PostItem from "../PostItem/PostItem";

interface PostListProps {
  posts: IPost[];
  onEdit: (post: IPost) => void;
  onDelete: (postId: number) => void;
  onComments: (post: IPost) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onEdit, onDelete, onComments}) => {
  return (
    <div className="h-[calc(100vh_-_250px)] overflow-auto custom-scrollbar ">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
          onComments={onComments}
        />
      ))}
    </div>
  );
};

export default PostList;
