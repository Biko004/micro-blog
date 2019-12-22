import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import TweetItem from './TweetItem';
import { getTweets, postTweet } from '../lib/api'
import { Spinner } from 'react-bootstrap';
import { MyContext } from '../context';


// const TweetList = () => {


//     const [tweets, setTweets] = useState([])
//     const [loading, setLoading] = useState(false);
//     const [err, setError] = useState('');

//     useEffect(() => {
//         const execute = async () => {
//             try {
//                 const response = await getTweets();
//                 const data = (response.data.tweets).sort(function (a, b) {
//                     return (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0);
//                 });
//                 setTweets(data);
//             } catch (error){
//                 console.log("error")
//                 setError("Oh no! Server error! " + error)
//             } 
//         }
//         execute();
//     }, [])

//     const handleSubmit = (form) => {
//         setLoading(true);
//         console.log("1")
//         const execute = async () =>{
//             try{
//                 const response = await postTweet(form);
//                 setLoading(false);
//             }catch(error){
//                 setError("Didn't post for some reason: " + error)
//                 setLoading(false);
//             }
//         }
//         execute();

//     }
//     return (
//         <div className="list-items">

//             <TweetBox className={loading ? 'box-disabled' : ''} onFormSubmit={(form) => handleSubmit(form)} />
//             <p className="error">{err}</p>
//             {loading && <Spinner animation="grow" variant="primary" />}
//             {(tweets.map((elem, i) => <TweetItem key={i} userName={elem.userName} content={elem.content} date={elem.date} />))}
//         </div>
//     )
// }

class TweetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingTweets: false,
            tweets: [],
            onFormSubmit: form => this.handleSubmit(form)
        }
    }


    getAllTweets() {
        getTweets().then(tweets => {
            let newTweets=[];
            tweets.docs.map(obj => newTweets.push(obj.data()));
            this.setState({ tweets: newTweets });
        })
    }


    handleSubmit = (form) => {
        this.setState({ loadingTweets: true });
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