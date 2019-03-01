import React from 'react';
import Chat from './chattest'
export default function LandingPage(props) {
    return (
        <div>
            <h1>StoryTime</h1>
            <p>Here you and your friends can join lobbies where you can build a story one line at time</p>
            <p>Stories are done one sentence at a time, with each player getting to do a sentence</p>
            <p>The game is finished when all players choose to end, or if someone leaves</p>
            <p>Stories can be saved to a public library to be viewed by everyone</p>
            <Chat />
        </div>
        
    )
}