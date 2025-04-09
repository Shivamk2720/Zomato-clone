export const fetchGetCall = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'get',
  });
  const jsonRes = await response.json();
  return jsonRes;
};
export const postCall = async data => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resJson = await response.json();
  return resJson;
};

export const putCall = async data => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resJson = await response.json();
  return resJson;
};

export const petchCall = async (id, data) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const resJson = await response.json();
  return resJson;
};

export const deleteCall = async id => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId= ' + id,
    {
      method: 'DELETE',
    },
  );
  const resJson = await response.json();
  return resJson;
};
