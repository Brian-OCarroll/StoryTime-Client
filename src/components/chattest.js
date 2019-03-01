import React from 'react'
import openSocket from 'socket.io-client';
//
const socket = openSocket('http://localhost:8080')

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            name: '',
            messages: []
        }
        this.sendSocketIO = this.sendSocketIO.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        //when recieves new messages from peeps
        // socket.on('RECEIVE_MESSAGE', function(msg) {
        //     this.setState({
        //         messages: [...this.state.messages, msg]
        //     })
        // })
        socket.on('connect', function(data) {
            console.log(data)
        })
    }
    
    componentDidUpdate() {
        // socket.on('RECEIVE_MESSAGE', function(msg) {
        //     this.setState({
        //         messages: [...this.state.messages, msg]
        //     })
        // })
    }
    
    componentWillUnmount() {
        // socket.off("disconnect");
        // socket.off("change_data");
    }
    sendSocketIO() {
        //sends data to backend
        socket.emit('SEND_MESSAGE', this.state.text);
        this.setState({
            messages: [...this.state.messages, this.state.text],
            text: ''
        })    
    }
    onInputChange(event) {
        this.setState({
            text: event.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    render() {
        socket.on('RECEIVE_MESSAGE', function(msg) {
            this.setState({
                messages: [...this.state.messages, msg]
            })
        })
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
                <p>{this.state.text}</p>
                <p>{this.state.messages}. </p>
            </div>
        )
    }
}