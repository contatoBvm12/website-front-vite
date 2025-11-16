import React from 'react';
import { Link } from 'react-router-dom';

export interface Post {
  tag: string;
  time: string;
  title: string;
  image: string;
  to?: string;
}

const NewsCard: React.FC<{ post: Post }> = ({ post }) => {
  const card = (
    <article className="bg-white rounded-xl overflow-hidden border shadow-sm flex flex-col transition transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
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

  if (post.to) {
    return (
      <Link
        to={post.to}
        className="block group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"
      >
        {card}
      </Link>
    );
  }

  return card;
};

export default NewsCard;
