import React from 'react';
import './App.css'


class SubDate extends React.Component{
    constructor(){
        super();
        var d = new Date();
        this.state={
            date : d.getFullYear().toString()+ "/" + d.getMonth().toString() +"/" + d.getDate().toString()
        }
    }
    render(){
        return(
            <div className="submission-date">
            <div className="input-element">
                  <label for="submission-date" className="start-time">SUBMISSION DATE & TIME (Auto Fill)</label>
                  <input type="text" name="submission-date"  value={this.state.date}  className="input-time" />
            </div>
          </div>
        )
    }
}

export default SubDate;