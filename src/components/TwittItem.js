import React from 'react';




class TwittItem extends React.Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div>
                <p>MSG: {this.props.content}</p>
                <span>{this.props.user}  </span>
                <span>{this.props.date}</span>
            </div>
        )
    }
}



export default TwittItem