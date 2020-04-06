import React from "react";
import "../styles/TableBody.css";

function TableBody({ users }) {
    return (
      <tbody>
        {/* //conditional with statement and question mark to check and see if something is in array */}
        {/* //below is kind of like a mini if else statement */}
        {/* // below that is what to do */}
        {users[0] !== undefined && users[0].name !== undefined ? (
          users.map(({ name, dob, location, email }) => {
            return (
              <tr>
                <td className="align-middle">
                  {name.first} {name.last}
                </td>
                <td className="align-middle">{email}</td>
                <td className="align-middle">{dob.age}</td>
                <td className="align-middle">{location.state}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>No results to display</td>
          </tr>
        )}
      </tbody>
    );
}

export default TableBody;

