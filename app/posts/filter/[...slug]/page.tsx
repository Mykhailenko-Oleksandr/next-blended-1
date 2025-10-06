import { fetchPosts } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PostsClient from './Posts.client';

interface PostsPageProps {
  params: Promise<{ slug: string[] }>;
}

const searchText: string = '';
const page: number = 1;

export default async function PostsPage({ params }: PostsPageProps) {
  const { slug } = await params;
  const userId = slug[0];

  const queryClient = new QueryClient();

  const response = await fetchPosts({ searchText, page, userId });

  await queryClient.prefetchQuery({
    queryKey: ['posts', searchText, page, userId],
    queryFn: () =>
      fetchPosts({
        searchText: searchText,
        page: page,
        ...(userId !== 'All' && { userId }),
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsClient initialData={response} userId={userId} />
    </HydrationBoundary>
  );
}
