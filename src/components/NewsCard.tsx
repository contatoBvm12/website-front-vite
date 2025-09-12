import React from 'react';

export interface Post {
  tag: string;
  time: string;
  title: string;
  image: string;
}

const NewsCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article className="rounded-xl overflow-hidden shadow-md">
      <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
      <div className="bg-primary px-4 py-2">
        <p className="text-white text-sm opacity-80">{post.tag} • {post.time}</p>
        <h3 className="text-white font-semibold">{post.title}</h3>
      </div>
    </article>
  );
};

export default NewsCard;
