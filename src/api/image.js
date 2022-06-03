export const postData = async (data) => {
  console.log("data:", data);

  const { layout, name, capacity, status, imageName } = data;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      layout,
      name,
      capacity,
      status,
      imageName,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("response:", response);
  return response;
  // .then((response) => response.json())
  // .then((json) => console.log(json));
};
