import { Post } from '@models/Post';
import { axios } from './axios';
import { Pages } from './posts-types';

export const getPosts = async () => {
  const { data } = await axios.get<Post[]>('/posts');
  return data;
};

export const getPost = async (postId: number) => {
  const { data } = await axios.get<Post>(`/posts/${postId}`);
  return data;
};

export const getPostsPage = async (pageNumber: number) => {
  const { data } = await axios.get<Pages[]>(
    `/postPages?_page=${pageNumber}&_limit=1`
  );
  return data[0];
};
