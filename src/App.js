import './App.css';
import Header from './header'
import Button from '@material-ui/core/Button';
import BasicInfo from './basicInformation'
import ReportingFactors from './reportingFactors'
import CategorizationInformation from './categorizationInformation'
import Rules from './rules'
import AddedValue from './addedValue'
import Introduction from './instruction'
import SubDate from './subDate'

function App() {
  const script = document.createElement("script");  
  script.async = true;
  return (
    <div className="App">

      <header className="header-top">
        <Header />
      </header>

      <form>
        <div className="head">
          <div>
          <Button variant="contained" color="primary" disableElevation style={ styles.submitButton } >
              Click Here To Submit
          </Button>
          </div>
          <SubDate />
        </div>
        
        <section className="tables basic-information">
          <div className="basic-information-container">
            <BasicInfo />
          </div>
        </section>

        
        <section className="tables reporting-factor">
          <div className="reporting-factor-container">
            <ReportingFactors />
          </div>
        </section>

        <section className="tables categorization-information">
          <div className="categorization-information-container">
            <CategorizationInformation />
          </div>
        </section>

        <section className="tables rules">
          <div className="rules-container">
            <Rules />
          </div>
        </section>

        <section className="tables added-value">
          <div className="added-value-container">
            <AddedValue />
          </div>
          <div className="instruction">
            <Introduction />
          </div>
        </section>

        
        
      </form>

      <script>
          const now = new Date().toISOString().substr(0, 10);
          console.log(today);
          document.querySelector("#today").value = now;
      </script>

    </div>
    
  );
}

const styles = {
  submitButton: {
    marginLeft:20,
    marginTop:5,
    position:"relative",
    height:50,
    backgroundColor:"#d2691e",
    fontWeight: 1000,
    boxShadow: '4px 2px 2px #888888',

  }
}

export default App;
