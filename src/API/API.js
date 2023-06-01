import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6478ea36362560649a2ea40e.mockapi.io/api',
});

export const getAllUsers = async () => {
  try {
    const { data } = await instance.get('/users');
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
export const updateFollowers = async id => {
  try {
    const resp = await instance.put(`/users/${id}`, { followers: 1 });
    return resp;
  } catch (err) {
    console.log(err.message);
  }
};
