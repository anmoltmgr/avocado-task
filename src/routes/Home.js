import ListComponent from "../Components/ListDataComponent";
import { listAllData, deleteData } from "../api/data";
import { useEffect, useState } from "react";
export default function Home(props) {
  const [data, setData] = useState([]);
  console.log("HOME");
  useEffect(() => {
    console.log("HOME use effect");

    listAllData().then((res) => {
      const listData = res;
      console.log("data:", listData);
      setData((prevData) => [...prevData, ...listData]);
    });
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <ListComponent data={data} deleteData={deleteData} />
    </main>
  );
}
