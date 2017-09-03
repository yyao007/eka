import React, { Component } from 'react';
import Input from './components/Input';
import './style.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(id, event) {
        // console.log(id, event.target.value);
        this.setState({ [id]: event.target.value });
    }

    onSubmit(user, event) {
        event.preventDefault();
        this.props.onSubmit(user);
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(this.state, e)}>
                {this.props.inputs.map((input, index) =>
                    <Input
                        key={index}
                        onChange={(e) => this.onInputChange(input.id, e)}
                        value={this.state[index]}
                        {...input} />
                )}
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}

export default Form;
