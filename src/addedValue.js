import React from 'react';
import './App.css'




class AddedValue extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h5 style={{position:'relative',top:-20,color:'white'}}>Added Value</h5>
                </div>
                <form className="info-form">
                <div className="input-element">
                        <label  className="labels">Urgent Request </label>
                        <label> <input type="radio" name="urgent-request" value="Yes" /> Yes </label>
                        <label> <input type="radio" name="urgent-request" value="No" /> No </label>
                </div>

                <div className="input-element">
                        <label  className="labels">No bid reminder </label>
                        <label> <input type="radio" name="no-bid-request" value="Yes" /> Yes </label>
                        <label> <input type="radio" name="no-bid-request" value="No" /> No </label>
                </div>

                <div className="input-element">
                        <label  className="labels">Ariba Supplier Training </label>
                        <label> <input type="radio" name="supplier-training" value="Yes" /> Yes </label>
                        <label> <input type="radio" name="supplier-training" value="No" /> No </label>
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