import { useState } from "react";
import { postData } from "./../api/data";

const Home = () => {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("false");
  // const []

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      capacity,
      status,
    };
    const response = await postData(data);
    console.log("response:", response);
    console.log("response status:", response.status);
    if (response.status === 201) {
      alert("submitted successfully");
      setName("");
      setCapacity("");
    } else {
      alert("something went wrong!! try again");
    }
  };

  return (
    <section className="section-center">
      <div>{/* <Link to="/home">home</Link> */}</div>

      <div className="left-line">
        <div className="line">
          <p>Create Table</p>
        </div>

        <form onSubmit={onSubmit} className="form-layout">
          <span>
            <label className="label">Layout</label>
            <select>
              <option value="layout" disabled selected hidden>
                Select Layout
              </option>
              <option value="0">hy </option>
              <option value="1">how</option>
              <option value="2">why</option>
              <option value="3">euhf</option>
              <option value="4">kasdiu</option>
            </select>
          </span>
          <span>
            <label> Name </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span>
            <label> Capacity </label>

            <input
              type="text"
              placeholder="Enter number of capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </span>
          <span className="status-bar">
            <label>Status</label>
            <input
              type="checkbox"
              value={status}
              onclick={() => setStatus(!status)}
            />
          </span>
          <span className="image-bar">
            <label>Image</label>
            <input type="file" />
          </span>

          <span className="btn-container">
            <button type="submit" className="btn-table">
              Create Table
            </button>
            <button
              className="btn-cancel"
              onClick={() => (window.location.href = "http://localhost:3000/")}
            >
              Cancel
            </button>
          </span>
        </form>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
