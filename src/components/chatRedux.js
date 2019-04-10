import React from 'react'
import openSocket from 'socket.io-client';
import {typing} from '../actions'
//
const socket = openSocket('http://localhost:8080')

export default class Chat extends React.Component {
    constructor() {
        this.state = {
            text: '',
            name: '',
            messages: [],
            typing: false
            
        }
        this.sendSocketIO = this.sendSocketIO.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        socket.on('connection', function(data) {
            console.log(data)
        })
        socket.on('typeUpdate',(msg) => {
            this.setState({
                text: msg
            })
        })
    }
    
    componentDidUpdate() {
        // socket.on('typeUpdate',(msg) =>{
        //     this.setState({
        //         msgTest: msg
        //     })
        // })
    }
    componentWillUnmount() {
        // socket.off("disconnect");
        // socket.off("change_data");
    }
    sendSocketIO() {
        //sends data to backend
        // socket.emit('SEND_MESSAGE', this.state.text);
        this.setState({
            messages: [...this.state.messages, this.state.text],
            text: ''
        })    
    }
    onInputChange(event) {
        this.props.dispatch(typing)
        this.setState({
            typing: true
        },()=> socket.emit('TYPING', this.state.text))
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form type="text" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="text-input"
                        id="name-input"
                        name="text-input"
                        required="required"
                        placeholder="Herro"
                        //used to save end result
                        value={this.state.text}
                        onChange={this.onInputChange}></input>
                    {/* <button className="next-btn"> NEXT </button> */}
                    <button onClick={this.sendSocketIO}>Send Socket.io</button>
                </form>
                {/* <p>{this.state.text}</p> */}
                <p>{this.state.messages}<span>{this.state.text}</span> </p>
            </div>
        )
    }
}
// const mapStateToProps = state => ({
//     // text
// })