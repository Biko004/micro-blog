import axios from 'axios';


const baseUrl = 'https://itc-bootcamp-19-dot-charcha-dev.appspot.com';



export function postTweet(tweet) {
  return axios.post(`${baseUrl}/tweet`, {tweet});
}


export function getTweets(twitt) {
    return axios.get(`${baseUrl}/tweet`);
  }