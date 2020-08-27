import * as axios from 'axios';

import { API_URL } from '../consts';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "API-KEY": "17595c62-ba18-4475-be9c-85ddf88bea8a"
  }
});

export const followUser = userId =>
  api.post(`follow/${userId}`).then(res => res.data);

export const getUser = userId =>
  api.get(`profile/${userId}`).then(res => res.data);

export const getUsers = (pageCount, currentPage) =>
  api.get(`users?count=${pageCount}&page=${currentPage}`).then(res => res.data);

export const login = () =>
  api.get('').then(res => res.data);

export const unfollowUser = userId =>
  api.delete(`follow/${userId}`).then(res => res.data);
