import React, { useState } from "react";
import './App.css';
import { ProfileData, callMsGraph } from "../graph";
import { msalConfig, loginRequest } from "../authConfig";
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";







const BasicInfo = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    
    

    // function RequestProfileData() {
    //     instance.acquireTokenSilent({
    //         ...loginRequest,
    //         account: accounts[0]
    //     }).then((response) => {
    //         callMsGraph(response.accessToken).then(response => setGraphData(response));
    //     });
    // }

        return (
            <div >
                
                <div className="container-fluid" style={styles.biTitle}>
                    <h6 style={{color:'white'}}>Basic Information</h6>
                </div>

                <form>

                    <div className="mb-2 row">
                        <label for="project-name" className="col-sm-4 col-form-label-sm">Project Name</label>
                        <div class="col-sm-8">
                            <input type="text" name="project-name" placeholder="Enter the project name here" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row mar">
                        <label for="buyer-name" className="col-sm-4 col-form-label-sm">Buyer Name</label>
                        <div class="col-sm-8">
                            <input type="text" name="buyer-name" value={accounts[0].name} placeholder="Name of the buyer"  className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row mar">
                        <label for="buyer-email" className="col-sm-4 col-form-label-sm">Buyer Email</label>
                        <div class="col-sm-8">
                            <input type="email" name="buyer-email" value={accounts[0].username} placeholder="Email of the buyer" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row mar">
                        <label for="additional-emails" className="col-sm-4 col-form-label-sm">Additional Event Observer(s) Email: </label>
                        <div class="col-sm-8">
                            <input type="email" name="additional-emails" placeholder="Additional Emails seperated by ',' " className="form-control-lg" multiple='true' />
                        </div>
                    </div>

                    <div className="mb-2 row mar">
                        <label for="start-date" className="col-sm-4 col-form-label-sm">Target start of bidding</label>
                        <div class="col-sm-8">
                            <input type="datetime-local" name="start-date" placeholder="Target start of bidding (mm/dd/yyyy hh:mm) " className="form-control" />
                        </div>
                    </div>

                    <div className="mb-2 row mar">
                        <label for="event-name" className="col-sm-4 col-form-label-sm">Event Name</label>
                        <div class="col-sm-8">
                            <input type="text" name="event-name" placeholder="Name of the Event" className="form-control"  />
                        </div>
                    </div>

                    <div className="mb-2 row mar">
                        <label for="auction-time" className="col-sm-4 col-form-label-sm">Auction run for how long? (Minutes)</label>
                        <div class="col-sm-8">
                         <input type="number" name="auction-time" placeholder="Duration (in minutes)" className="form-control"  />
                        </div>
                    </div>

                    
                        <label  className="col-sm-4 col-form-label-sm">Multi-stage Auction?</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                    

                    <div className="mb-2 row mar">
                        <label for="project-id" className="col-sm-4 col-form-label-sm">Project ID (Previous auction DOC ID )</label>
                        <div class="col-sm-8">
                            <input type="text" name="project-id" placeholder="Project Id" className="form-control"  />
                        </div>
                    </div>

                    
                        
                   

                </form>
            </div>
        )
    }


const styles = {
    biTitle: {
        textAlign: 'center',
        width:'100%',
        height:30,
        border:'solid 1px black',
        backgroundColor:'#B11F24',
        marginBottom:10,
       
        
    }
}

export default BasicInfo;