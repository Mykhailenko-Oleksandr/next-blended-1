'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById, fetchUserById } from '@/lib/api';
import css from './PostPreview.module.css';
import { useEffect, useState } from 'react';
import { User } from '@/types/user';
import Modal from '@/components/Modal/Modal';

export default function PostDetailsClient() {
  const [author, setAuthor] = useState<User | null>(null);

  const { id } = useParams<{ id: string }>();

  const router = useRouter();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    refetchOnMount: false,
  });

  useEffect(() => {
    if (!post) return;

    const fn = async () => {
      const fetchedAuthor = await fetchUserById(post.userId);
      setAuthor(fetchedAuthor);
    };
    fn();
  }, [post]);

  const handleClose = () => {
    router.back();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <Modal onClose={handleClose}>
      <button className={css.backBtn} onClick={handleClose}>
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
    </Modal>
  );
}
