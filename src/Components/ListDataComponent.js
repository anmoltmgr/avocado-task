import { useState, useRef } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import FormComponent from "./FormComponent";

const ListComponent = (props) => {
  const { deleteData, data } = props;
  // console.log("props:", props.data);

  const [update, setUpdate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentElement, setCurrentElement] = useState(null);
  const [value, setValue] = useState(null);
  const handleEdit = (element) => {
    setUpdate(true);
    setCurrentElement(element);
    console.log("curent element", currentElement);
  };
  const handleSetUpdate = () => {
    setUpdate(false);
  };
  return (
    <section className="section-center">
      <div className="App">
        <table>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Layout</th>
            <th>Resolution</th>
            <th>Active</th>
            <th>Image</th>
            <th>delete</th>
            <th>edit</th>
          </tr>

          {props.data.map((element, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{element.name}</td>
              <td>{element.layout}</td>
              <td>{element.resolution}</td>
              <td>{element.active_status ? "true" : "false"}</td>
              <td>{element.image_link}</td>
              <td>
                <AiFillDelete
                  onClick={() => {
                    console.log("element:", element._id);
                    deleteData(element._id);
                  }}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(element);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      {update && (
        <main style={{ padding: "1rem 0" }}>
          <h2>Form</h2>
          <FormComponent
            type="Update Entry"
            data={currentElement}
            tableName="Update Table"
            handleSetUpdate={handleSetUpdate}
          />
        </main>
      )}
    </section>
  );
};

export default ListComponent;
