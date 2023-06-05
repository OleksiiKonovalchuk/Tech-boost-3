import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6478ea36362560649a2ea40e.mockapi.io/api',
});

export const getAllUsers = async () => {
  try {
    const { data } = await instance.get(`/users?page=1&limit=3`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getUsersFromPage = async page => {
  try {
    const { data } = await instance.get(`/users?page=${page}&limit=3`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getUserById = async id => {
  try {
    const { data } = await instance.get(`/users/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
export const updateFollowers = async ({ id, subscribers, sub }) => {
  try {
    const followers = !sub ? subscribers + 1 : subscribers - 1;
    const resp = await instance.put(`/users/${id}`, { followers });
    return resp;
  } catch (err) {
    console.log(err.message);
  }
};
