import React from 'react';
import Logo from './ab inbev.png'


class Header extends React.Component{
    render(){
        return(
          <div className="heade" style={style.headerStyle}>
              <img src={Logo} alt="logo" className="header-logo" style={style.image} />

          </div>  
        );
    }
}

const style={
    image:{
        position:'relative',
        top:15,
        marginLeft:10,
        height:'60%',
        width:150
    },
    headerStyle:{
        height:'100%'
    }
}

export default Header;