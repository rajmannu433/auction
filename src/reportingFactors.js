import React from 'react';
import './App.css'




class ReportingFactors extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h5 style={{position:'relative',top:-20,color:'white'}}>Reporting Factors </h5>
                </div>
                <form className="info-form">
                    <div className="input-element">
                        <label for="baseline-spend" className="labels">Baseline Spend (in Auction Currency)</label>
                        <input type="number" name="baseline-spend" placeholder="Baseline spend amount" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="currency" className="labels">Currency</label>
                        <input type="text" name="currency" placeholder="Currency" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="payment-time" className="labels">Payment term to be (Days)</label>
                        <input type="number" name="payment-time" placeholder="In Days" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="contract-duration" className="labels">Expected Contract Duration (Months)  </label>
                        <input type="number" name="contract-duration" placeholder="In months" className="inputs"  />
                    </div>

                    <div className="input-element">
                        <label for="implementation-date" className="labels">Expected Contract Implementation date </label>
                        <input type="date" name="implementation-date"  className="inputs" />
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

export default ReportingFactors;