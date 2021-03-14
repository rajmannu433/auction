import React from 'react';
import './App.css'




class Rules extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h5 style={{position:'relative',top:-20,color:'white'}}>Rules</h5>
                </div>
                <form className="info-form">

                    <div className="input-element">
                        <label for="auction-style" className="labels">Auction Style </label>
                        <select name="auction-style" style={{marginTop:5,marginLeft:10}}>
                            <option value="Reverse English">Reverse English</option>
                            <option value="Reverse Dutch">Reverse Dutch</option>
                            <option value="Reverse Japanese">Reverse Japanese</option>
                            <option value="Forward English">Forward English</option>
                            <option value="Forward Dutch">Forward Dutch</option>
                            <option value="Forward Japanese">Forward Japanese</option>
                            <option value="Old Japanese">Old Japanese</option>
                        </select>
                    </div>

                    <div className="bi-title" style={styles.rTitle}>
                        <h5 style={{position:'relative',top:-22,color:'white'}}>Timing Rules</h5>
                    </div>


                    <div className="input-element">
                        <label for="price-change" className="labels">Price Change interval/minute</label>
                        <input type="text" name="price-change" placeholder="Price Change" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="prebid" className="labels">Prebid</label>
                        <select name="prebid" style={{marginTop:2,marginLeft:10}}>
                            <option value="Allow Prebids">Allow Prebids</option>
                            <option value="Dont Allow Prebids">Dont Allow Prebids</option>
                        </select>
                    </div>

                    <div className="input-element">
                        <label for="timing-rules" className="labels">Time rule for bidding</label>
                        <select name="timing-rules" style={{marginTop:2,marginLeft:10}}>
                            <option value="Serial">Serial</option>
                            <option value="Parallel">Parallel</option>
                            <option value="Staggered">Staggered</option>
                        </select>
                    </div>

                    <div className="input-element">
                        <label for="duration-of-lot" className="labels">Length of duration for following lots after first lot</label>
                        <input type="text" name="duration-of-lot" placeholder="No" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label  className="labels">Review Enable</label>
                        <label> <input type="radio" name="review-enable" /> Yes </label>
                        <label> <input type="radio" name="review-enable" /> No </label>
                    </div>

                    <div className="input-element">
                        <label for="review-time" className="labels">Review time</label>
                        <input type="number" name="review-time" placeholder="Time" className="inputs"/>
                    </div>


                    <div className="input-element">
                        <label for="bidding-change" className="labels">Bidding Change by</label>
                        <select name="bidding-change" style={{marginTop:2,marginLeft:10}}>
                            <option value="Amount">Amount</option>
                            <option value="Percentage">Percentage</option>
                        </select>
                    </div>

                    <div className="input-element">
                        <label for="minimum-bid-change" className="labels">Minimum Bid Change </label>
                        <input type="number" name="minimum-bid-change" value="5" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="extension-rules" className="labels">Extension Rules</label>
                        <select name="extension-rules" style={{marginTop:2,marginLeft:10}}>
                            <option value="Top1">Top1</option>
                            <option value="Top2">Top2</option>
                            <option value="Top3">Top3</option>
                            <option value="Top4">Top4</option>
                            <option value="All the ranks">All the ranks</option>
                        </select>
                    </div>

                    <div className="input-element">
                        <label for="grace-period" className="labels">Grace Period </label>
                        <input type="number" min="1" max="15" name="grace-period" placeholder="1-15" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="extension-time" className="labels">Extension Time</label>
                        <input type="number" min="1" max="15" name="extension-time" placeholder="1-15" className="inputs"/>
                    </div>

                    <div className="bi-title" style={styles.rTitle}>
                        <h5 style={{position:'relative',top:-22,color:'white'}}>Bidding and feedback Rules</h5>
                    </div>

                    <div className="input-element">
                        <label  className="labels">Enable Traffic light</label>
                        <label> <input type="radio" name="enable-traffic-light" /> Yes </label>
                        <label> <input type="radio" name="enable-traffic-light" /> No </label>
                    </div>

                    <div className="input-element">
                        <label  className="labels">Leading bid buffer</label>
                        <label> <input type="radio" name="leading-bid-buffer" value="Yes" /> Yes </label>
                        <label> <input type="radio" name="leading-bid-buffer" valye="No" /> No </label>
                    </div>

                    <div className="input-element">
                        <label  className="labels">Show lead bid</label>
                        <label> <input type="radio" name="show-lead-bid" value="Yes" /> Yes </label>
                        <label> <input type="radio" name="show-lead-bid" valye="No" /> No </label>
                    </div>

                    <div className="input-element">
                        <label for="traffic-light" className="labels">Both Traffic light and Rank ? </label>
                        <select name="traffic-light" style={{marginTop:2,marginLeft:10}}>
                            <option value="Only Traffic Light">Only Traffic Light</option>
                            <option value="Both traffic light and rank">Both traffic light and rank</option>
                        </select>
                    </div>

                    <div className="input-element">
                        <label  className="labels">Can supplier see ranks</label>
                        <label> <input type="radio" name="see-rank" value="Yes" /> Yes </label>
                        <label> <input type="radio" name="see-rank" value="No" /> No </label>
                    </div>

                    <div className="input-element">
                        <label for="item-level-rank" className="labels">Item level Rank for supplier</label>
                        <input type="text"  name="item-level-rank" placeholder="Item level Rank for supplier" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label  className="labels">Tax included </label>
                        <label> <input type="radio" name="tax-included" value="Yes" /> Yes </label>
                        <label> <input type="radio" name="tax-included" value="No" /> No </label>
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
        
    },
    rTitle: {
        marginTop:10,
        marginBottom:10,
        textAlign: 'center',
        width:'100%',
        height:20,
        border:'solid 1px black',
        backgroundColor:'#B11F24'

    }
}

export default Rules;