import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PostDetailsClient from './PostDetails.client';
import { fetchPostById } from '@/lib/api';

interface PostDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetails({ params }: PostDetailsProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  // const post = await fetchPostById(id);

  await queryClient.prefetchQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPostById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailsClient />
    </HydrationBoundary>
  );
}
