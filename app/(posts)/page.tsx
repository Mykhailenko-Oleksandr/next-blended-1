import { fetchPosts } from '@/lib/api';

import PostsClient from './filter/[...slug]/Posts.client';
import { Metadata } from 'next';

export async function generateMetadata() {}

export default async function PostsPage() {
  return <PostsClient />;
}
