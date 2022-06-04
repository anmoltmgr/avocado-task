import { useState, useEffect } from "react";
import { postData, updateData } from "./../api/data";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [resolution, setResolution] = useState("");
  const [active_status, setActiveStatus] = useState("false");
  const [layout, setLayout] = useState("false");

  useEffect(() => {
    if (props.type === "Update Entry") {
      setName(props.data.name);
      setResolution(props.data.resolution);
      setActiveStatus(props.data.active_status ? "true" : "false");
      setLayout(props.data.layout);
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    if (props.type === "Add Entry") {
      const data = {
        name,
        resolution,
        active_status,
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
    } else if (props.type === "Update Entry") {
      const data = {
        id: props.data._id,
        name,
        layout,
        active_status,
        resolution,
      };
      const response = await updateData(data);
      console.log("response11:", response);
      console.log("response status:", response.status);
      if (response.status === 200) {
        alert("Updated successfully");
      } else {
        alert("something went wrong!! try again");
      }
      if (props.type === "Update Entry" && response.status === 200) {
        props.handleSetUpdate();
      }
    }
  };

  return (
    <section className="section-center">
      <div className="left-line">
        <div className="line">
          <p>{props.tableName}</p>
        </div>

        <form onSubmit={onSubmit} className="form-layout">
          <span>
            <label className="label">Layout</label>
            <select onChange={(e) => setLayout(e.target.value)}>
              <option value="layout" disabled selected hidden>
                Select Layouts
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
              value={active_status}
              onclick={() => setActiveStatus(!active_status)}
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
