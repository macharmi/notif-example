import React, { Component } from 'react';

class EtaNotif extends Component{
    render(){
        return (
            <div style={{backgroundColor:'red', width:"400px", padding:"9px 9px 9px 9px" , display: "block", float: "left", border:"1px solid"}}>
                <div>{this.props.logo}</div>
                <div><h1>{this.props.header}</h1></div>
                <div><h3>{this.props.subHeader}</h3></div>
            </div>
        )
    }
}

export default EtaNotif;