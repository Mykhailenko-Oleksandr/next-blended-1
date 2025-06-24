import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PostDetailsClient from './PostDetails.client';
import { fetchPostById } from '@/lib/api';
import { Metadata } from 'next';



export async function generateMetadata() {
  

  
}

export default async function PostDetails({) {




  return (
    <HydrationBoundary state={dehydrate()}>
      <PostDetailsClient />
    </HydrationBoundary>
  );
}
