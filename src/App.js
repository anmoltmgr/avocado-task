import { Outlet, Link } from "react-router-dom";

function App() {
  // const [name, setName] = useState("");
  // const [capacity, setCapacity] = useState("");
  // const [status, setStatus] = useState("false");
  // const []

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     name,
  //     capacity,
  //     status,
  //   };
  //   const response = await postData(data);
  //   console.log("response:", response);
  //   console.log("response status:", response.status);
  //   if (response.status === 201) {
  //     alert("submitted successfully");
  //     setName("");
  //     setCapacity("");
  //   } else {
  //     alert("something went wrong!! try again");
  //   }
  // };

  return (
    <section className="section-center">
      <h1>CRUD Task</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">home</Link> | <Link to="/form">Form</Link> |
      </nav>
      <Outlet />

      <div className="left-line">
        <div></div>
      </div>
    </section>
  );
}

export default App;
