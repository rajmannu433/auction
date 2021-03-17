import React from 'react';
import './App.css'




class ReportingFactors extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h6 style={{color:'white'}}>Reporting Factors </h6>
                </div>
                <form className="info-form">
                    <div className="mb-3 row">
                        <label for="baseline-spend" className="col-sm-4 col-form-label-sm">Baseline Spend (in Auction Currency)</label>
                        <div class="col-sm-8">
                            <input type="number" name="baseline-spend" placeholder="Baseline spend amount" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-3 row mar">
                        <label for="currency" className="col-sm-4 col-form-label-sm">Currency</label>
                        <div class="col-sm-8">
                            <input type="text" name="currency" placeholder="Currency" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="payment-time" className="col-sm-4 col-form-label-sm">Payment term to be (Days)</label>
                        <div class="col-sm-8">
                            <input type="number" name="payment-time" placeholder="In Days" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="contract-duration" className="col-sm-4 col-form-label-sm">Expected Contract Duration (Months)  </label>
                        <div class="col-sm-8">
                            <input type="number" name="contract-duration" placeholder="In months" className="form-control"  />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="implementation-date" className="col-sm-4 col-form-label-sm">Expected Contract Implementation date </label>
                        <div class="col-sm-8">
                            <input type="date" name="implementation-date"  className="form-control" />
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
        height:30,
        border:'solid 1px black',
        backgroundColor:'#B11F24',
        marginBottom:10,
        
    }
}

export default ReportingFactors;