import React from 'react';



const TweetItem = (props) => {
    const {userName, date, content} = props;

    return(
        <div className="item">
            <span className="user">{userName ? userName : 'Guest'}  </span>
            <span className="date">{date.substring(11, 20) + ' ,' + date.substring(0, 10)}</span>
            <p className="content">{content}</p>
        </div>
    )
}



export default TweetItem
