export type Post = {
  tag: string;
  slug: string;
  title: string;
  thumb: string;
  excerpt: string;
  updatedAt: string;
}

export interface IPostsProps {
  posts: Post[]  
}