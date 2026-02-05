import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR');

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="w-full max-w-2xl rounded-3xl border border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border hover:border-blue-300"
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-body-xs text-gray-300">
              {formattedDate}
            </span>
          </div>

          <Image
            src={post.image || '/post-placeholder.png'}
            alt=""
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center overflow-hidden rounded-md"
          />
        </div>

        <div className="px-2 mt-4 space-y-4 mb-4">
          <span className="text-xs text-blue-300 uppercase">
            {post.tags?.join(', ')}
          </span>

          <h2 className="text-gray-100 line-clamp-3 text-lg font-semibold">
            {post.title}
          </h2>

          <p className="text-gray-300 line-clamp-3 text-sm">
            {post.description}
          </p>
        </div>

        <div className="flex items-center gap-3 border-t border-gray-400 py-4">
          <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-blue-200 border">
            <Image
              src={'/customer-01.png'}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
          <span className="text-gray-300 text-sm">
            Por Arthur Gustavo
          </span>
        </div>
      </div>
    </Link>
  );
};