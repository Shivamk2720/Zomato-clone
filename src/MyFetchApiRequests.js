export const myFetchGetRequest = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });
  const resJson = await response.json();
  return resJson;
};

export const myFetchPostRequest = async data => {
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

export const myFetchPutRequest = async (id, data) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const resJson = await response.json();
  return resJson;
};

export const myFetchPatchRequest = async (id, data) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const resJson = await response.json();
  return resJson;
};

export const myFetchDeleteRequest = async id => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id,
    {
      method: 'DELETE',
    },
  );
  console.log(response);
  //   const resJson = await response.json();
  return -1;
};
