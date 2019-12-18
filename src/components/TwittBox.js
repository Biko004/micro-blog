import React from 'react';




class TwittBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                content: '',
                user: '',
                date: ''
            },
            disableBtn: true,
        }
    }


    handleOnFormSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state.form);
        this.setState({ form: { content: '', user: '', date: ''} })
    }

    updateForm(event, newForm) {
        let submitBtn = event.target.value!=0 ? false : true;
        this.setState({ form: Object.assign(this.state.form, newForm), disableBtn: submitBtn });
    }

    render() {
        const { form, disableBtn } = this.state;
        return (
            <div>
                <h1>{this.props.name}</h1>
                <form onSubmit={e => this.handleOnFormSubmit(e)}>
                    <input
                        type="text"
                        value={form.name}
                        onChange={event => this.updateForm(event, { content: event.target.value, user: 'Biko',date: new Date().toLocaleString()})}
                    />
                    <input type="submit" disabled={disableBtn} value="Twitt" />
                </form>
            </div>
        )
    }
}



export default TwittBox