import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import PostPreviewClient from './PostPreview.client';
// import { fetchPostById } from '@/lib/api';

interface PostDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PostPreview({ params }: PostDetailsProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostPreviewClient />
    </HydrationBoundary>
  );
}
