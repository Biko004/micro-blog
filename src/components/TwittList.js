import React from 'react';
import TwittBox from './TwittBox';
import TwittItem from './TwittItem';

class TwittList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loadingTwitts: false,
            twitts: [{form: {content: "BLA BLA", user: "biko", date: 'today'}}]
        }
    }

     handleSubmit(newForm){
        // this.setState({ loadingTwitts: true });
        let twitts = this.state.twitts
        twitts.push({form: newForm})
        this.setState({twitts: twitts})
        localStorage.setItem('store', JSON.stringify(this.state.twitts))
        // this.setState({ loadingTwitts: false });
    }
    componentDidMount(){
        let localTwitts = JSON.parse(window.localStorage.getItem('store'));
        if(localTwitts){
              this.setState({twitts: localTwitts})
        }
    }

    render(){
            let twitts = this.state.twitts

        return(
            <div>
                <TwittBox onFormSubmit={ (form)=> this.handleSubmit(form)}/>
                {(twitts.map((elem, i) =>  <TwittItem key={i} user={elem.form.user} content={elem.form.content} date={elem.form.date}/> ).reverse())}

            </div>
        )
    }
}

export default TwittList