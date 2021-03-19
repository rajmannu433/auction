import React,{useEffect,useState} from 'react';


class Sups extends React.Component {

    constructor(props) {
      super(props);
  
      //  this.state.products = [];
      this.state = {};
      this.state.filterText = "";
      this.state.lots = [
        {
            id: 1,
            supplierName:'Granit',
            initialBid:'345'
          },
          {
              id: 2,
              supplierName:'Richardson',
              initialBid:'335'
          }, 
          {
              id: 3,
              supplierName:'Glencore',
              initialBid:'334'
          }, 
          {
              id: 4,
              supplierName:'Supertime',
              initialBid:'330'
          }, 
    
      ];
  
    }
    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };
    handleRowDel(product) {
      var index = this.state.lots.indexOf(product);
      this.state.lots.splice(index, 1);
      this.setState(this.state.lots);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var lot = {
        id: id,
        supplierName:'',
        initialBid:''
        

      }
      this.state.lots.push(lot);
      this.setState(this.state.lots);
  
    }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        name: evt.target.name,
        value: evt.target.value
      };
      var lots = this.state.lots;
  
      var newLots = lots.map(function(lot) {
        for (var key in lot) {
          if (key == item.name && lot.id == item.id) {
            lot[key] = item.value;
  
          }
        }
        return lot;
      });
      this.setState(newLots);
      console.log(this.state.lots);
    };

    handleChange(event) {
        this.setState({value: event.target.value});
      }


    render() {
  
      return (
        <div>
          <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} lots={this.state.lots} filterText={this.state.filterText}/>
        </div>
      );
  
    }
  
  }
  class SearchBar extends React.Component {
    handleChange() {
      this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
      return (
        <div>
  
          <input class="form-control" style={{width:'20%',marginTop:20,marginLeft:10}} type="text" placeholder="Search Lot Name" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
  
        </div>
  
      );
    }
  
  }
  
  class ProductTable extends React.Component {
  
    render() {
      var onProductTableUpdate = this.props.onProductTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var lot = this.props.lots.map(function(lot) {
        if (lot.supplierName.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onProductTableUpdate={onProductTableUpdate} lot={lot} onDelEvent={rowDel.bind(this)} key={lot.id}/>)
      });
      return (
        <div>
  
  
        
          <table className="table table-hover" style={{marginTop:20,marginBottom:10}} >
            <thead style={{backgroundColor:"#B11F24"}}>
              <tr>
                <th  style={{color:"white",textAlign:'center'}} >Supplier Name</th>
                <th style={{color:"white",textAlign:'center'}}>Initial Bid </th>
                
              </tr>
            </thead>
  
            <tbody>
              {lot}
  
            </tbody>
  
          </table>
          <div class="container-fluid" style={{textAlign:'center'}}>
          <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add Row</button>
          </div>
        </div>
      );
  
    }
  
  }
  
  class ProductRow extends React.Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.lot);

      
  
    }
    render() {
  
      return (
        <tr className="eachRow">
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "supplierName",
            value: this.props.lot.supplierName,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "initialBid",
            value: this.props.lot.initialBid,
            id: this.props.lot.id
          }}/>
         
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
        </tr>
    );
  
    }
  
  }
  class EditableCell extends React.Component {
  
    render() {
      return (
        <td>
          <input class="form-control" type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
        </td>
      );
  
    }
  
  }
  
  

export default Sups;