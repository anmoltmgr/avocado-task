import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
const ListComponent = (props) => {
  const { deleteData } = props;
  console.log("props:", props);
  const [readOnly, setReadOnly] = useState(true);
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
              <td>
                <input value={index + 1} readOnly={readOnly} />
              </td>
              <td>
                <input value={element.name} readOnly={readOnly} />
              </td>
              <td>
                <input value={element.layout} readOnly={readOnly} />
              </td>
              <td>
                <input value={element.resolution} readOnly={readOnly} />
              </td>
              <td>
                <input value={element.active_status} readOnly={readOnly} />{" "}
              </td>
              <td>
                <input value={element.image_link} readOnly={readOnly} />
              </td>
              <td>
                <AiFillDelete
                  onClick={() => {
                    console.log("element:", element._id);
                    deleteData(element._id);
                  }}
                />
              </td>
              <td>
                <AiFillEdit
                  onClick={() => {
                    console.log("inside edit click", readOnly);
                    setReadOnly(!readOnly);
                    console.log("inside edit click", readOnly);
                  }}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default ListComponent;
