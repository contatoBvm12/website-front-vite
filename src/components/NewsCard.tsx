import React from 'react';

export interface Post {
  tag: string;
  time: string;
  title: string;
  image: string;
}

const NewsCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden border shadow-sm flex flex-col">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs text-gray-500 font-medium mb-2">
          {post.tag} • {post.time}
        </p>
        <h3 className="text-primary font-semibold text-lg flex-1">
          {post.title}
        </h3>
      </div>
    </article>
  );
};

export default NewsCard;
