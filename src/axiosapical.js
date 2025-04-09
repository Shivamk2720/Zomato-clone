import axios from 'axios';

export const axiosGetReq = async () => {
  const res = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/',
  });
  return res;
};
