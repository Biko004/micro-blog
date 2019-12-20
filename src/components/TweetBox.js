import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { MyContext } from '../context';



class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                content: '',
                userName: '',
                date: ''
            },
            disableBtn: true,
        }
    }


    handleOnFormSubmit(e, onFormSubmit) {
        e.preventDefault();
        onFormSubmit(this.state.form);
        this.setState({ form: { content: '', userName: '', date: '' } })
    }

    updateForm(event, newForm) {
        let submitBtn = ((event.target.value.length == 0) || (event.target.value.length < 140)) ? false : true;
        console.log(event.target.value.length)
        this.setState({ form: Object.assign(this.state.form, newForm), disableBtn: submitBtn });
    }

    render() {
        const { form, disableBtn } = this.state;
        return (

            <MyContext.Consumer>
                {({ onFormSubmit }) => (
                    <div>
                        <h1>{this.props.name}</h1>
                        <Form onSubmit={e => this.handleOnFormSubmit(e, onFormSubmit)}>
                            <Form.Group>
                                <Form.Control as="textarea" rows="7" className="twitt-box"
                                    value={form.name}
                                    placeholder="Write here.."
                                    onChange={event => this.updateForm(event, { content: event.target.value, userName: 'nothing', date: new Date().toISOString() })}
                                />
                                <Button className="submit-post" type="submit" disabled={disableBtn} value="Twitt">Submit</Button>
                            </Form.Group>
                        </Form>
                    </div>
                )}
            </MyContext.Consumer>

        )
    }
}



export default TweetBox