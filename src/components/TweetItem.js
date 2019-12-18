import React from 'react';




class TweetItem extends React.Component{



    render(){
        const {userName, date, content} = this.props
        return(
            <div className="item">
                <span className="user">{userName ? this.props.userName : 'Guest'}  </span>
                <span className="date">{date.substring(11, 20) + ' ,' + date.substring(0, 10)}</span>
                <p className="content">{content}</p>
            </div>
        )
    }
}



export default TweetItem
