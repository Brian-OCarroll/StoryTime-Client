import React from 'react'
import { Redirect } from 'react-router-dom';


export default class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error: '',
            redirect: false
        }
        this.socket = this.props.socket
        this.errorHandler();
        this.sendSocketIO = this.sendSocketIO.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.socket.on('connection', function(data) {
            console.log(data)
        })
        // this.socket.on('typeUpdate',(msg) => {
        //     this.setState({
        //         text: msg
        //     })
        // })
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
    errorHandler = () => {
        this.socket.on('err', err => {
            this.setState({
                error: err
            })
        })
    }
    sendSocketIO() {
        if(this.state.name === "") {
            this.setState({
                error: 'must fill out username'
            })    
        }else{
            localStorage.setItem("username", this.state.name);
            this.socket.emit('registerUsername', this.state.name)
            this.setState({
                redirect: true
            })
        }
        
    }
    onInputChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/home'/>;
          }
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
                        value={this.state.name}
                        onChange={this.onInputChange}></input>
                    {/* <button className="next-btn"> NEXT </button> */}
                    <button onClick={this.sendSocketIO}>Send Socket.io</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        )
    }
}
// const mapStateToProps = state => ({
//     // text
// })