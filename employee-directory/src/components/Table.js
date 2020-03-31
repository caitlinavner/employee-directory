import React, { Component } from "react";
import "../styles/Table.css";
import API from "../utils/API";


export default class Table extends Component {
    constructor() {
        super();
        // constructor and super are always tied together
        this.state = {
            // lifecycle method has to do with State. the component is made and then moved. first in index then app then whereever it's pointed
            users: [{}], 
            //don't use a comma at the end otherwise it'll keep looking
            //sort users and put them in a new array
            sortedUsers: [{}]

        }
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

            })
        })
    }

  render() {
    return (
      <div className="table">
            {/* sorting requires State to track things dynamically */}
            
      </div>
    );
  }
}
