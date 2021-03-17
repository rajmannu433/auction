import React from 'react';
import './App.css'




class AddedValue extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h6 style={{color:'white'}}>Added Value</h6>
                </div>
                <form className="info-form">

               <div className="mb-2 row">
                    <label  className="col-sm-4 col-form-label-sm">Urgent Request</label>
                    <div className="col-sm-8">
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
                    </div>
                    </div>

                    <div className="mb-2 row">
                    <label  className="col-sm-4 col-form-label-sm">No bid reminder</label>
                    <div className="col-sm-8">
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
                    </div>
                    </div>

                    <div className="mb-2 row">
                    <label  className="col-sm-4 col-form-label-sm">Ariba Supplier Training</label>
                    <div className="col-sm-8">
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
                    </div>
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

export default AddedValue;