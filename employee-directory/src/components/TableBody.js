import React from "react";
import "../styles/TableBody.css";

function TableBody({ users }) {
    function testFunction(users) {
        return console.log(users)
    }
    return (
      <tbody>
        {/* //conditional with statement and question mark to check and see if something is in array */}
        {/* //below is kind of like a mini if else statement */}
        {/* // below that is what to do */}
        {users[0] !== undefined ? (
          users.map(({ name, dob, age }) => {
            return (
              <tr>
                <td className="align-middle"></td>
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

