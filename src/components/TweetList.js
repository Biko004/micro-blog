import React from 'react';
import TweetBox from './TweetBox';
import TweetItem from './TweetItem';
import { getTweets, postTweet } from '../lib/api'
import {Spinner} from 'react-bootstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingTweets: false,
            tweets: [{ content: "BLA BLA", userName: "biko", date: 'today' }]
        }
    }

    getAllTweets() {
        getTweets().then(response =>{ 
            let data = (response.data.tweets).sort(function(a, b) {
                return (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0);
            });
            this.setState({ tweets: data})})
    }

    
    handleSubmit(newForm) {
        this.setState({ loadingTweets: true })
        postTweet(newForm).then(response => {
            console.log(response);
            this.setState({ loadingTweets: false })
            this.getAllTweets();
        })
            .catch(e => NotificationManager.error(e, 'Close after 2000ms', 2000))

        // localStorage.setItem('store', JSON.stringify(this.state.twitts))
        // this.setState({ loadingTwitts: false });
    }
    componentDidMount() {
        this.getAllTweets();
    }

    render() {
        let tweets = this.state.tweets
        console.log(this.state.tweets)
        return (
            <div className="list-items">
                <TweetBox className={this.state.loadingTweets ? 'box-disabled' : ''} onFormSubmit={(form) => this.handleSubmit(form)} />
                {this.state.loadingTweets && <Spinner animation="grow" variant="primary" />}
                {(tweets.map((elem, i) => <TweetItem key={i} userName={elem.userName} content={elem.content} date={elem.date} />))}
                <NotificationContainer/>
            </div>
        )
    }
}

export default TweetList