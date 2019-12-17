import React from 'react';
import TwittBox from './TwittBox';
import TwittItem from './TwittItem';

class TwittList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: false,
            twitts: [{form: {content: "BLA BLA", user: "biko", date: 'today'}}]
        }
    }

     handleSubmit(newForm){
        // this.setState({ loadingTwitts: true });
        let twitts = this.state.twitts
        twitts.push({form: newForm})
        this.setState({twitts: twitts})
        // this.setState({ loadingTwitts: false });
    }

    render(){
            let twitts = this.state.twitts
            console.log(twitts)
        return(
            <div>
                <TwittBox onFormSubmit={ (form)=> this.handleSubmit(form)}/>
                {(twitts.map((elem, i) =>  <TwittItem key={i} user={elem.form.user} content={elem.form.content} date={elem.form.date}/> ))}

            </div>
        )
    }
}

export default TwittList