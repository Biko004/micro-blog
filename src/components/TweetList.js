import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import TweetItem from './TweetItem';
import { getTweets, postTweet } from '../lib/api'
import { Spinner } from 'react-bootstrap';
import { MyContext } from '../context';



class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingTweets: false,
            tweets: [{ content: "BLA BLA", userName: "biko", date: 'today' }],
            onFormSubmit: form => this.handleSubmit(form)
        }
    }


    getAllTweets() {
        getTweets().then(response => {
            let data = (response.data.tweets).sort(function (a, b) {
                return (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0);
            });
            this.setState({ tweets: data })
        })
    }


    handleSubmit = (form) => {
        this.setState({ loadingTweets: true })
        console.log("1")
        const execute = async () => {
            try {
                const response = await postTweet(form);
                this.setState({ loadingTweets: false })
                this.getAllTweets();
            } catch (error) {
                console.log("Didn't post for some reason: " + error)
                this.setState({ loadingTweets: false })
            }
        }
        execute();
        // localStorage.setItem('store', JSON.stringify(this.state.twitts);
    }

    componentDidMount() {
        this.getAllTweets();
    }

    render() {
        let tweets = this.state.tweets
        console.log(this.state.tweets)
        return (
            <MyContext.Provider value={this.state}>
            <div className="list-items">
                <TweetBox className={this.state.loadingTweets ? 'box-disabled' : ''}  />
                {this.state.loadingTweets && <Spinner animation="grow" variant="primary" />}
                {(tweets.map((elem, i) => <TweetItem key={i} userName={elem.userName} content={elem.content} date={elem.date} />))}
            </div>
            </MyContext.Provider>
        )
    }
}

export default TweetList