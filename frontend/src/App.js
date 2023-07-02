
import React, {Component} from "react";
import ChatInput from './components/ChatInput/ChatInput'
import ChatHistory from './components/ChatHistory/ChatHistory'
import Message from './components/Message/Message'
import Header from './components/Header/Header'
import './App.css'
import { connect, sendMsg } from './api'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            chatHistory: []
        }
    }
    componentDidMount() {
        connect((msg) => {
           console.log("New message")
           this.setState(prevState => (
            {
                chatHistory : [...prevState.chatHistory, msg]
            }))
            console.log(this.state);
        })
        
    }

    render() {
        return(
            <div className="App">
                <Header></Header>
                <ChatHistory chatHistory={this.state.chatHistory}></ChatHistory>
            </div>
        )
    }
    
}


export default App;