import React, { Component } from 'react';

class StateNotif extends Component{
    render(){
        return (
            <div style={{backgroundColor:'yellow', width:"800px", padding:"20px 20px 20px 20px"}}>
                <div>{this.props.logo}</div>
                <div><h1>{this.props.header}</h1></div>
                <div><h3>{this.props.subHeader}</h3></div>
            </div>
        )
    }
}

export default StateNotif;