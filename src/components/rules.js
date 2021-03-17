import React from 'react';
import './App.css'




class Rules extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="bi-title" style={styles.biTitle}>
                    <h6 style={{color:'white'}}>Rules</h6>
                </div>
                <form className="info-form">

                    <div className="mb-2 row">
                        <label for="auction-style" className="col-sm-4 col-form-label-sm">Auction Style </label>
                        <div className="col-sm-8">
                            <select className="form-select" name="auction-style" style={{marginTop:5,marginLeft:10}}>
                                <option value="Reverse English">Reverse English</option>
                                <option value="Reverse Dutch">Reverse Dutch</option>
                                <option value="Reverse Japanese">Reverse Japanese</option>
                                <option value="Forward English">Forward English</option>
                                <option value="Forward Dutch">Forward Dutch</option>
                                <option value="Forward Japanese">Forward Japanese</option>
                                <option value="Old Japanese">Old Japanese</option>
                            </select>
                        </div>
                    </div>

                    <div className="bi-title" style={styles.rTitle}>
                        <h6 style={{color:'white'}}>Timing Rules</h6>
                    </div>


                    <div className="mb-2 row">
                        <label for="price-change" className="col-sm-4 col-form-label-sm">Price Change interval/minute</label>
                        <div class="col-sm-8">
                            <input type="text" name="price-change" placeholder="Price Change" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="prebid" className="col-sm-4 col-form-label-sm">Prebid</label>
                        <div className="col-sm-8">
                            <select className="form-select" aria-label="Default select example" >
                                <option value="Allow Prebids">Allow Prebids</option>
                                <option value="Dont Allow Prebids">Dont Allow Prebids</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="timing-rules" className="col-sm-4 col-form-label-sm">Time rule for bidding</label>
                        <div className="col-sm-8">
                            <select name="timing-rules" className="form-select" aria-label="Default select example">
                                <option value="Serial">Serial</option>
                                <option value="Parallel">Parallel</option>
                                <option value="Staggered">Staggered</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="duration-of-lot" className="col-sm-4 col-form-label-sm">Length of duration for following lots after first lot</label>
                        <div className="col-sm-8">
                            <input type="text" name="duration-of-lot" placeholder="No" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                    <label  className="col-sm-4 col-form-label-sm">Review Enabled</label>
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
                        <label for="review-time" className="col-sm-4 col-form-label-sm">Review time</label>
                        <div className="col-sm-8">
                        <input type="number" name="review-time" placeholder="Time" className="form-control"/>
                        </div>
                    </div>


                    <div className="mb-2 row">
                        <label for="bidding-change" className="col-sm-4 col-form-label-sm">Bidding Change by</label>
                        <div className="col-sm-8">
                        <select name="bidding-change" className="form-select" aria-label="Default select example">
                            <option value="Amount">Amount</option>
                            <option value="Percentage">Percentage</option>
                        </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="minimum-bid-change" className="col-sm-4 col-form-label-sm">Minimum Bid Change </label>
                        <div className="col-sm-8">
                            <input type="number" name="minimum-bid-change" value="5" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="extension-rules" className="col-sm-4 col-form-label-sm">Extension Rules</label>
                        <div className="col-sm-8">
                        <select name="extension-rules" className="form-select" aria-label="Default select example">
                            <option value="Top1">Top1</option>
                            <option value="Top2">Top2</option>
                            <option value="Top3">Top3</option>
                            <option value="Top4">Top4</option>
                            <option value="All the ranks">All the ranks</option>
                        </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="grace-period" className="col-sm-4 col-form-label-sm">Grace Period </label>
                        <div className="col-sm-8">
                        <input type="number" min="1" max="15" name="grace-period" placeholder="1-15" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="extension-time" className="col-sm-4 col-form-label-sm">Extension Time</label>
                        <div className="col-sm-8">
                            <input type="number" min="1" max="15" name="extension-time" placeholder="1-15" className="form-control"/>
                        </div>
                    </div>

                    <div className="bi-title" style={styles.rTitle}>
                        <h6 style={{color:'white'}}>Bidding and feedback Rules</h6>
                    </div>

                    <div className="mb-2 row">
                    <label  className="col-sm-4 col-form-label-sm">Enable Traffic light  </label>
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
                    <label  className="col-sm-4 col-form-label-sm">Leading Bid Buffer  </label>
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
                    <label  className="col-sm-4 col-form-label-sm">Show Lead Bid </label>
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
                        <label for="traffic-light" className="col-sm-4 col-form-label-sm">Both Traffic light and Rank ? </label>
                        <div className="col-sm-8">
                        <select name="traffic-light" className="form-select" aria-label="Default select example">
                            <option value="Only Traffic Light">Only Traffic Light</option>
                            <option value="Both traffic light and rank">Both traffic light and rank</option>
                        </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                    <label  className="col-sm-4 col-form-label-sm">Can supplier see ranks</label>
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
                        <label for="item-level-rank" className="col-sm-4 col-form-label-sm">Item level Rank for supplier</label>
                        <div className="col-sm-8">
                            <input type="text"  name="item-level-rank" placeholder="Item level Rank for supplier" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                    <label  className="col-sm-4 col-form-label-sm">Tax included</label>
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
        height:30,
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