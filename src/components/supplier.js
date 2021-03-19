import React,{useEffect,useState} from 'react';


class Supplier extends React.Component {

    constructor(props) {
      super(props);
  
      //  this.state.products = [];
      this.state = {};
      this.state.filterText = "";
      this.state.suppliers = [
        {
          id: 1,
          companyName: 'Granit',
          contact: 'Julien',
          email: 'julien.darley@granitnegoce.com',
          phoneNo: 'N/A',
          speakEng:'No',
          registered:'Yes'
        }, {
          id: 2,
          companyName: 'Richardson',
          contact: 'Wallace',
          email: 'Wallace.Chang@richardson.ca',
          phoneNo: 'N/A',
          speakEng:'No',
          registered:'Yes'
        }, {
          id: 3,
          companyName: 'Glencore',
          contact: 'Lyndon',
          email: 'Lyndon.Asser@glencoreagri.com.au',
          phoneNo: 'N/A',
          speakEng:'No',
          registered:'Yes'
        }, {
          id: 4,
          companyName: 'Supertime',
          contact: 'zhang xuezheng',
          email: 'zhangxuezheng@gdhyst.com',
          phoneNo: 'N/A',
          speakEng:'No',
          registered:'Yes'
        }
    
      ];
  
    }
    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };
    handleRowDel(product) {
      var index = this.state.suppliers.indexOf(product);
      this.state.suppliers.splice(index, 1);
      this.setState(this.state.suppliers);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var supplier = {
        id: id,
        companyName: '',
          contact: '',
          email: '',
          phoneNo: '',
          speakEng:'',
          registered:''
      }
      this.state.suppliers.push(supplier);
      this.setState(this.state.suppliers);
  
    }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        companyName: evt.target.companyName,
        value: evt.target.value
      };
      var suppliers = this.state.suppliers;
  
      var newSuppliers = suppliers.map(function(supplier) {
        for (var key in supplier) {
          if (key == item.companyName && supplier.id == item.id) {
            supplier[key] = item.value;
  
          }
        }
        return supplier;
      });
      this.setState(newSuppliers);
      console.log(this.state.suppliers);
    };
    render() {
  
      return (
        <div>
          <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} suppliers={this.state.suppliers} filterText={this.state.filterText}/>
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
  
          <input class="form-control" style={{width:'30%',marginTop:20,marginLeft:10}} type="text" placeholder="Search Company Name" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
  
        </div>
  
      );
    }
  
  }
  
  class ProductTable extends React.Component {
  
    render() {
      var onProductTableUpdate = this.props.onProductTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var supplier = this.props.suppliers.map(function(supplier) {
        if (supplier.companyName.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onProductTableUpdate={onProductTableUpdate} supplier={supplier} onDelEvent={rowDel.bind(this)} key={supplier.id}/>)
      });
      return (
        <div>
  
  
        
          <table className="table table-hover" style={{marginTop:20,marginBottom:10}} >
            <thead style={{backgroundColor:"#B11F24"}}>
              <tr>
                <th  style={{color:"white",width:'15%'}} >Company Name Registered in Ariba System</th>
                <th style={{color:"white",width:'10%'}}>Contact</th>
                <th style={{color:"white",width:'20%'}}>Email Address -Primary User</th>
                <th style={{color:"white"}}>Phone / Cell number -Primary User</th>
                <th style={{color:"white"}}>Can supplier Speak English</th>
                <th style={{color:"white"}}>Whether suplier has  registered  in Ariba</th>
              </tr>
            </thead>
  
            <tbody>
              {supplier}
  
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
      this.props.onDelEvent(this.props.supplier);
  
    }
    render() {
  
      return (
        <tr className="eachRow">
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "companyName",
            value: this.props.supplier.companyName,
            id: this.props.supplier.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "contact",
            value: this.props.supplier.contact,
            id: this.props.supplier.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "email",
            value: this.props.supplier.email,
            id: this.props.supplier.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "phoneNo",
            value: this.props.supplier.phoneNo,
            id: this.props.supplier.id
          }}/>
           <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "speakEng",
            value: this.props.supplier.speakEng,
            id: this.props.supplier.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "registered",
            value: this.props.supplier.registered,
            id: this.props.supplier.id
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
          <input class="form-control" type='text' companyName={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
        </td>
      );
  
    }
  
  }
  
  

export default Supplier;