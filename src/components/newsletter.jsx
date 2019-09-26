import React, { Component } from 'react';

class Newsletter extends Component {

    url = "https://hackbeanpot.us18.list-manage.com/subscribe/post?u=8d9901211393038273091ce5a&amp;id=9054b3454d"
    
    constructor(props) {
        super(props)

        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubmit(event) {
        console.log('email was submitted')
        event.preventDefault()
    }

    // <form action="https://hackbeanpot.us18.list-manage.com/subscribe/post?u=8d9901211393038273091ce5a&amp;id=9054b3454d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div class="container">
                    <input class="form-control" type="text" value={this.state.email} onChange={this.handleChange}/>
                    <button class="btn btn-primary form-control" type="submit"> Submit </button>
                </div>
            </form>
        )
    }
}

export default Newsletter;