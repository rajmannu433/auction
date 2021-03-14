import React from 'react';
import './App.css'




class CategorizationInformation extends React.Component{
    render(){
        return (
            <div>
                <div className="bi-title" style={styles.biTitle}>
                    <h5 style={{position:'relative',top:-20,color:'white'}}>Categorization Information</h5>
                </div>
                <form className="info-form">
                    <div className="input-element">
                        <label for="curr-dec" className="labels">Currency Decimal Places </label>
                        <input type="number" name="curr-dec" placeholder="Enter the Currency Decimal Places"className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="pur-sell" className="labels">Purchasing or Selling</label>
                        <select name="pur-sell" style={{marginTop:2,marginLeft:10}}>
                            <option value="purchasing">Purchasing</option>  
                            <option value="buying">Buying</option>     
                        </select>
                    </div>

                    <div className="input-element">
                        <label for="categorization" className="labels">Categorization</label>
                        <input type="text" name="categorization" placeholder="RAU> RAW MATERIALS> Malt> Malt bought from 3rd parties" className="inputs"/>
                    </div>

                    <div className="input-element">
                        <label for="region" className="labels">Region </label>
                        <input type="text" name="region" placeholder="APAC North>China " className="inputs"  />
                    </div>

                    <div className="input-element">
                        <label for="cm" className="labels">Collaboration Model CM</label>
                        <input type="text" name="cm" placeholder="GPO " className="inputs" />
                    </div>

                    <div className="input-element">
                        <label for="wapt" className="labels">Current WAPT (Days)</label>
                        <input type="number" name="wapt" placeholder="Days" className="inputs"  />
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

export default CategorizationInformation;