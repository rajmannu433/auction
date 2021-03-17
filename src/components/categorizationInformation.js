import React from 'react';
import './App.css'




class CategorizationInformation extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h6 style={{color:'white'}}>Categorization Information</h6>
                </div>
                <form className="info-form">

                    <div className="mb-2 row">
                        <label for="curr-dec" className="col-sm-4 col-form-label-sm">Currency Decimal Places </label>
                        <div class="col-sm-8">
                            <input type="number" name="curr-dec" placeholder="Enter the Currency Decimal Places"className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="pur-sell" className="col-sm-4 col-form-label-sm">Purchasing or Selling</label>
                        <div className="col-sm-8">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Purchasing</option>
                                <option value="Selecting">Selecting</option>
                                
                            </select>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="categorization" className="col-sm-4 col-form-label-sm">Categorization</label>
                        <div class="col-sm-8">
                            <input type="text" name="categorization" placeholder="RAU> RAW MATERIALS> Malt> Malt bought from 3rd parties" className="form-control"/>
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="region" className="col-sm-4 col-form-label-sm">Region </label>
                        <div class="col-sm-8">
                            <input type="text" name="region" placeholder="APAC North>China " className="form-control"  />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="cm" className="col-sm-4 col-form-label-sm">Collaboration Model CM</label>
                        <div class="col-sm-8">
                            <input type="text" name="cm" placeholder="GPO " className="form-control" />
                        </div>
                    </div>

                    <div className="mb-2 row">
                        <label for="wapt" className="col-sm-4 col-form-label-sm">Current WAPT (Days)</label>
                        <div class="col-sm-8">
                            <input type="number" name="wapt" placeholder="Days" className="form-control"  />
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
        marginBottom:10
        
    }
}

export default CategorizationInformation;