export const postData = async (data) => {
  console.log("data:", data);

  const { layout, name, capacity, active_status, imageName } = data;
  return fetch("https://crud-operation.free.beeceptor.com/add", {
    method: "POST",
    body: JSON.stringify({
      layout,
      name,
      capacity,
      active_status,
      imageName,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    console.log("response:", response);
    return response;
  });
};

export const listAllData = async () => {
  console.log("hereS");
  return fetch("https://crud-operation.free.beeceptor.com/listAllData").then(
    (response) => {
      // console.log("hereS:", response.json());

      return response.json();
    }
  );
};
export const deleteData = async (id) => {
  console.log("delete id:", id);
  if (id) {
    return fetch(`https://crud-operation.free.beeceptor.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      console.log("response:", response);
      return response;
    });
  }
};

export const updateData = async (data) => {
  const { id, layout, name, capacity, active_status, imageName } = data;
  console.log("delete id:", id);

  if (id) {
    return fetch(`https://crud-operation.free.beeceptor.com/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        layout,
        name,
        capacity,
        active_status,
        imageName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      console.log("response:", response);
      return response;
    });
  }
};
