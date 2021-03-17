import React from 'react';
import './App.css'


class SubDate extends React.Component{
    constructor(){
        super();
        var d = new Date();
        this.state={
            date : d.getFullYear().toString()+ "/" + (d.getMonth()+1).toString() +"/" + d.getDate().toString()
        }
    }
    render(){
        return(
        //     <div className="container">
        //     <div className="mb-2 row">
        //           <label for="submission-date" className="col-sm-4 col-form-label-sm" style={{marginTop:10,marginLeft:40}}>SUBMISSION DATE & TIME (Auto Fill)</label>
        //           <div class="col-sm-4">
        //           <input type="text" name="submission-date"  value={this.state.date}  className="form-control" style={{marginTop:10}} />
        //           </div>
        //     </div>
        //   </div>
          <div class="mb-3 row">
                <label for="submission-date" className="col-sm-6 col-form-label-lg" style={{color:'white'}}>SUBMISSION DATE & TIME</label>
                <div class="col-sm-5" style={{position:'relative',top:5,left:-15}}>
                    <input type="text" className="form-control-lg" name="submission-date" style={{textAlign:'center'}} value={this.state.date}/>
                </div>
        </div>
        )
    }
}

export default SubDate;