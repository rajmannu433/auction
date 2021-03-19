import React,{useEffect,useState} from 'react';
import Sups from './supsIniBid';


class Lot extends React.Component {

    constructor(props) {
      super(props);
  
      //  this.state.products = [];
      this.state = {};
      this.state.filterText = "";
      this.state.lots = [
        {
          id: 1,
          lotName: '60KMT Canadian barley to China',
          itemName: '60KMT Canadian barley',
          itemDescription: '60KMT Canadian barley, specs refers to tender',
          quantities: '60000',
          UOM:'USD/MT',
          ceilingPrice:'',
          statePrice:'',
          adjustBy:'',
          minimumBid:''
        }, {
            id: 2,
            lotName: '60KMT Canadian barley to China',
            itemName: '60KMT Canadian barley',
            itemDescription: '60KMT Canadian barley, specs refers to tender',
            quantities: '60000',
            UOM:'USD/MT',
            ceilingPrice:'',
            statePrice:'',
            adjustBy:'',
            minimumBid:''
          }
    
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
        lotName: '',
        itemName: '',
        itemDescription: '',
        quantities: '',
        UOM:'',
        ceilingPrice:'',
        statePrice:'',
        adjustBy:'',
        minimumBid:''

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
  
          <input class="form-control" style={{width:'30%',marginTop:20,marginLeft:10}} type="text" placeholder="Search Lot Name" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
  
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
        if (lot.lotName.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onProductTableUpdate={onProductTableUpdate} lot={lot} onDelEvent={rowDel.bind(this)} key={lot.id}/>)
      });
      return (
        <div>
  
  
        
          <table className="table table-hover" style={{marginTop:20,marginBottom:10}} >
            <thead style={{backgroundColor:"#B11F24"}}>
              <tr>
                <th  style={{color:"white",width:'15%',textAlign:'center'}} >Lot Name </th>
                <th style={{color:"white",width:'10%',textAlign:'center'}}>Item Name </th>
                <th style={{color:"white",width:'20%',textAlign:'center'}}>Item Description</th>
                <th style={{color:"white",textAlign:'center'}}>Estimate Quantities</th>
                <th style={{color:"white",textAlign:'center'}}>UOM</th>
                <th style={{color:"white",textAlign:'center'}}>Ceiling Price </th>
                <th style={{color:"white",textAlign:'center'}}>Start Price </th>
                <th style={{color:"white",textAlign:'center'}}>Adjust by amount/percentage </th>
                <th style={{color:"white",textAlign:'center'}}>Minimum Bid Change per adjust interval </th>
                <th style={{color:"white",textAlign:'center'}}>Close </th>
                <th style={{color:"white",textAlign:'center'}}>Show Initial Bids </th>
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
            "type": "lotName",
            value: this.props.lot.lotName,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "itemName",
            value: this.props.lot.itemName,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "itemDescription",
            value: this.props.lot.itemDescription,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "quantities",
            value: this.props.lot.quantities,
            id: this.props.lot.id
          }}/>
           <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "UOM",
            value: this.props.lot.UOM,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "ceilingPrice",
            value: this.props.lot.ceilingPrice,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "statePrice",
            value: this.props.lot.statePrice,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "adjustBy",
            value: this.props.lot.adjustBy,
            id: this.props.lot.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "minimumBid",
            value: this.props.lot.minimumBid,
            id: this.props.lot.id
          }}/>
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>


          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                I
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{this.props.lot.lotName}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Sups />
                        
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
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
  
  

export default Lot;