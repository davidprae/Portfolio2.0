// done / Display the read me bio
import React from 'react';

class Bio extends React.Component {
    state = { displayBio: false }
    //toggle display bio
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {
        let bio = this.state.displayBio ? (
            <div key='1'>
                <div className='generalText'>
                    <h1> I code every day while my cats sit on the keyboards and in front of the screens.</h1>
                    <h1> I am currently looking for work in Software Development.</h1>
                    <h1>This is my new portfolio built to show off my Development skills.</h1>
                    <h1 style={{ color: 'red', textDecoration: 'underline' }}> With this APP I accomplished:</h1>

                </div>
                <ul className='accomplishedList'>
                    <li>Responsive CSS3 with animations</li>
                    <li>Async Fetching from a Database</li>
                    <li>Class & Functional State & Props</li>
                    <li>Class & Functional Components</li>
                    <li>Maintaining Browser history</li>
                    <li>React nested Components</li>
                    <li>React DOM Manipulation</li>
                    <li>Deployment with Netlify</li>
                    <li>Bundling with WebPack</li>
                    <li>Node JS & NPM</li>
                    <li>Browser History</li>
                    <li>ES6 Javascript</li>
                    <li>React Router</li>
                    <li>React Hooks</li>
                    <li>Bootstrap5</li>
                </ul>
                <button className="btn-home" onClick={this.toggleDisplayBio}>Read Less</button>
            </div>
        ) : (
                <div key='2'>
                    <button className="btn-home btn-read" href='/#projects' onClick={this.toggleDisplayBio}>Read More</button>
                </div>
            );

        return ([bio])
    }
}

export default Bio;