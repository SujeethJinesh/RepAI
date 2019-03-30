import React, { Component } from 'react';
import './css/GenRep.css';
import { Launcher } from 'react-chat-window';
import SpeechRecognition from 'react-speech-recognition';

@SpeechRecognition
class GenRep extends Component {
    constructor() {
        super();
        this.state = {
            messageList: []
        };
    }
    
    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }
    
    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
            messageList: [...this.state.messageList, {
                author: 'them',
                type: 'text',
                data: { text }
            }]
            })
        }
    }

    render() {
        return (
            <div className="content">
                <Launcher
                    agentProfile={{
                        teamName: 'Sujeeth Jinesh',
                        imageUrl: 'https://i.imgur.com/ZFqzPjX.png'
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    showEmoji
                    isOpen
                />
            </div>
        );
    }
}

export default GenRep;
