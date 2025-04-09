import axios from 'axios';

export const myAxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
  return res;
};
export const myAxiosPostRequest = async data => {
  const res = await axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts/',
    data: data,
  });
  return res;
};
export const myAxiosPutRequest = async (id, data) => {
  const res = await axios({
    method: 'put',
    url: 'https://jsonplaceholder.typicode.com/posts/' + id,
    data: data,
  });
  return res;
};
export const myAxiosPatchRequest = async (id, data) => {
  const res = await axios({
    method: 'patch',
    url: 'https://jsonplaceholder.typicode.com/posts/' + id,
    data: data,
  });
  return res;
};
