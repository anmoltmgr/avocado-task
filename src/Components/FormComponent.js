import { useState } from "react";
import { postData } from "./../api/data";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [resolution, setResolution] = useState("");
  const [status, setStatus] = useState("false");
  const [layout, setLayout] = useState("false");
  // const []

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const data = {
      name,
      resolution,
      status,
      layout,
    };
    const response = await postData(data);
    console.log("response11:", response);
    console.log("response status:", response.status);
    if (response.status === 201) {
      alert("submitted successfully");
      setName("");
      setResolution("");
      setLayout("");
    } else {
      alert("something went wrong!! try again");
    }
  };

  return (
    <section className="section-center">
      <div className="left-line">
        <div className="line">
          <p>Create Table</p>
        </div>

        <form onSubmit={onSubmit} className="form-layout">
          <span>
            <label className="label">Layout</label>
            <select onChange={(e) => setLayout(e.target.value)}>
              <option value="layout" disabled selected hidden>
                Select Layout
              </option>
              <option value="Portrait">Portrait </option>
              <option value="Landscape">Landscape</option>
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
            <label> Resolution </label>

            <input
              type="text"
              placeholder="Enter the resolution"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
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
              {props.type}
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

export default FormComponent;
