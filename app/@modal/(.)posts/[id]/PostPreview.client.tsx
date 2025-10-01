'use client';

import Modal from '@/components/Modal/Modal';
// import { useQuery } from '@tanstack/react-query';
// import { fetchPostById, fetchUserById } from '@/lib/api';
// import { useParams, useRouter } from 'next/navigation';

import css from './PostPreview.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { User } from '@/types/user';

export default function PostPreviewClient() {
  const router = useRouter();

  useEffect(() => {
    const fn = async () => {};
    fn();
  }, []);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <button className={css.backBtn} onClick={handleClose}>
        ← Back
      </button>
      <div className={css.post}>
        <div className={css.wrapper}>
          <div className={css.header}>
            <h2>Post title</h2>
          </div>

          <p className={css.content}>Post body</p>
        </div>
        <p className={css.user}>User name</p>
      </div>
    </Modal>
  );
}
