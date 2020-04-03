import React, { Component } from "react";
import "../styles/TableContainer.css";
import API from "../utils/API";
import TableBody from "./TableBody";


export default class Table extends Component {
    constructor() {
        super();
        // constructor and super are always tied together
        this.state = {
          // lifecycle method has to do with State. the component is made and then moved. first in index then app then whereever it's pointed
          users: [{}],
          //don't use a comma at the end otherwise it'll keep looking
          //sort users and put them in a new array
          sortedUsers: [{}],
          order: "ascending",
          //function and pass in
          //key value pairs has space after colon
          tableHeadings: [
            { name: "Name", colWidth: "10%" },
            { name: "Email", colWidth: "10%" },
            { name: "Age", colWidth: "10%" },
            { name: "Location", colWidth: "10%" }
          ],
          handleOrder: age => {
            if (this.state.order === "ascending") {
              this.setState({ order: "descending" });
            } else {
              this.setState({ order: "ascending" });
            }
            console.log("you clicked me");
            //set up comparison function and then sort based on age
          }
        };
    }
    componentDidMount() {
        // waits until component is called on to show up in broswer and then does a function 
        API.getAPIUsers().then(APIresults => {
            // as soon as component is ready on users browsers, results will be waitin to do something with them 
            this.setState({
                users: APIresults.data.results,
                //.data comes from API
                sortedUsers: APIresults.data.results
                //build table and get results to display
                //this.state.users to show up on page
                //map function used when info inside db will be changing and it will need to be updated and displayed
            })
          console.log(this.state.users);
          //sort by one category and filter by one property
        })
    }

  render() {
    return (
      <div className="table-container">
        {/* sorting requires State to track things dynamically */}
        <table className="table">
          <thead>
            <tr>
              {/* //when calling a function you need parenthesis right after. no spaces */}
              {this.state.tableHeadings.map(({ name, colWidth }) => {
                return (
                  <th className="col" style={{ colWidth }} key={name} onClick={() => {this.state.handleOrder(name)}}>
                   {name} 
                  </th>
                )
              } )}
            </tr>
          </thead>
          <TableBody users={this.state.users} />

        </table>
            
      </div>
    );
  }
}
//body of table will have same format and needs to use map-don't need onclick-use td-use bootstrap to avoid css