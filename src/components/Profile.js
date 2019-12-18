import React from 'react';

class Profile extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.userName}</h1>

            </div>
        )
    }
}

export default Profile