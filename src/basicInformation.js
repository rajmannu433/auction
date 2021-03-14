import React from 'react';
import './App.css'




class BasicInfo extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h5 style={{position:'relative',top:-20,color:'white'}}>Basic Information</h5>
                </div>
                <form className="info-form">
                    <div className="input-element">
                        <label for="project-name" className="labels">Project Name</label>
                        <input type="text" name="project-name" placeholder="Enter the project name here"className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="buyer-name" className="labels">Buyer Name</label>
                        <input type="text" name="buyer-name" placeholder="Name of the buyer" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="buyer-email" className="labels">Buyer Email</label>
                        <input type="email" name="buyer-email" placeholder="Email of the buyer" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="additional-emails" className="labels">Additional Event Observer(s) Email: </label>
                        <input type="email" name="additional-emails" placeholder="Additional Emails seperated by ',' " className="inputs" multiple='true' />
                    </div>

                    <div className="input-element">
                        <label for="start-date" className="labels">Target start of bidding</label>
                        <input type="datetime-local" name="start-date" placeholder="Target start of bidding (mm/dd/yyyy hh:mm) " className="inputs" />
                    </div>

                    <div className="input-element">
                        <label for="event-name" className="labels">Event Name</label>
                        <input type="text" name="event-name" placeholder="Name of the Event" className="inputs"  />
                    </div>

                    <div className="input-element">
                        <label for="auction-time" className="labels">Auction run for how long? (Minutes)</label>
                        <input type="number" name="auction-time" placeholder="Duration (in minutes)" className="inputs"  />
                    </div>

                    <div className="input-element">
                        <label  className="labels">Multi-stage Auction?</label>
                        <label> <input type="radio" name="multi-stage" /> Yes </label>
                        <label> <input type="radio" name="multi-stage" /> No </label>
                    </div>

                    <div className="input-element">
                        <label for="project-id" className="labels">Project ID (Previous auction DOC ID )</label>
                        <input type="text" name="project-id" placeholder="Project Id" className="inputs"  />
                    </div>

                </form>
            </div>
        )
    }
}

const styles = {
    biTitle: {
        textAlign: 'center',
        width:'100%',
        height:20,
        border:'solid 1px black',
        backgroundColor:'#B11F24'
        
    }
}

export default BasicInfo;