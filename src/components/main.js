import React from 'react';
import { Socket } from 'dgram';


export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: 0,
            rooms: []
        }
        this.users = 0
        this.rooms=[]
        
    }
    //does't rerender when linked from '/' using router yet
    componentWillReceiveProps() {
        this.mainListener();
       
    }
    mainListener() {
        this.props.socket.on('renderMain', (data) => {
            this.setState({
                users: data.users,
                rooms: data.rooms
            })
            this.users = data.users;
            this.rooms.push(data.rooms)
            console.log(this.state)
        })
    }
    render() {
        let username = localStorage.getItem("username")
        return (
            <div>
                <h1>Hello {username}</h1>
                <h2>There are {this.state.users} users online and {this.state.rooms.length} games open.</h2>
            </div>
        )
    }
}