import React, { Component } from 'react';
import EtaNotif from './etaNotif'
import StateNotif from './stateNotif'
import Dispatcher from './dispatcher'

class Notifications extends Component{
    constructor(props){
        super(props)

        this.state = ({
            stateNotif: [{header: "stateNotif header", subHeader: "stateNotif subheader"}],
            etaNotif: []
            //etaNotif: [{logo: "car", header: "etaNotif header", subHeader: "10 min"}, {logo: "walking", header: "etaNotif header", subHeader: "10 min"}]
        })

        this.myDispatcher = new Dispatcher();
        this.myDispatcher.on('add', this.addNotif)
        this.myDispatcher.on('remove', this.removeNotif)
    }

    componentDidMount(prevProps){
        console.log("componentDidUpdate")
        this.props.onLoad(this.myDispatcher)
    }

    addNotif = (data) => {
        this.setState({...this.state, etaNotif: [...this.state.etaNotif, data]})
    }

    removeNotif = (data) => {
        this.setState({...this.state, etaNotif: [...this.state.etaNotif, data]})
    }

    render(){
        let etaNotifs = this.state.etaNotif.map((x) => {return (<EtaNotif logo={x.logo} header={x.header} subHeader={x.subHeader}></EtaNotif>)})
        let stateNotifs = this.state.stateNotif.map((x) => {return (<StateNotif logo={x.logo} header={x.header} subHeader={x.subHeader}></StateNotif>)})
        return (
            <div>
                {stateNotifs}
                {etaNotifs}
            </div>
        )
    }
}

export default Notifications;