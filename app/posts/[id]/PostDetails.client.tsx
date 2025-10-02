'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById, fetchUserById } from '@/lib/api';
import css from './PostDetails.module.css';
import { useEffect, useState } from 'react';
import { User } from '@/types/user';

export default function PostDetailsClient() {
  const [author, setAuthor] = useState<User | null>(null);

  const { id } = useParams<{ id: string }>();

  const router = useRouter();

  const { data: post } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    refetchOnMount: false,
  });

  const handleClickBack = () => {
    router.back();
  };

  useEffect(() => {
    const fn = async () => {
      if (post) {
        const fetchedAuthor = await fetchUserById(post.userId);
        setAuthor(fetchedAuthor);
      }
    };
    fn();
  }, [post]);

  return (
    <main className={css.main}>
      <div className={css.container}>
        <div className={css.item}>
          <button className={css.backBtn} onClick={handleClickBack}>
            ← Back
          </button>

          <div className={css.post}>
            <div className={css.wrapper}>
              <div className={css.header}>
                <h2>{post?.title}</h2>
              </div>

              <p className={css.content}>{post?.body}</p>
            </div>
            <p className={css.user}>Author: {author?.name}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
