import React, { Component } from 'react';
import Input from './components/Input';
import './style.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            0: '',
            1: '',
            2: '',
            3: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(index, event) {
        console.log(index, event.target.value);
        this.setState({ [index]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                {this.props.inputs.map((input, index) =>
                    <Input
                        key={index}
                        onChange={(e) => this.onInputChange(index, e)}
                        value={this.state[index]}
                        {...input} />
                )}
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}

export default Form;
