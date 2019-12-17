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
        }
    }


    handleOnFormSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state.form);
        this.setState({ form: { content: '', user: '', date: new Date().toLocaleString()} })
    }

    updateForm(newForm) {
        this.setState({ form: Object.assign(this.state.form, newForm) });
    }

    render() {
        const { form } = this.state;
        const { loadingAddUser } = this.props;
        return (
            <div>
                <h1>{this.props.name}</h1>
                <form onSubmit={e => this.handleOnFormSubmit(e)}>
                    <input
                        type="text"
                        value={form.name}
                        onChange={event => this.updateForm({ content: event.target.value, user: 'Biko' })}
                        disabled={loadingAddUser}
                    />
                    <input type="submit" disabled={loadingAddUser} value="Twitt" />
                </form>
            </div>
        )
    }
}



export default TwittBox