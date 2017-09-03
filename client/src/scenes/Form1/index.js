import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../data/user/api';
import Form from '../../components/Form';
// import './style.css';

const onFormSubmit = (event) => {
    event.preventDefault();
    register()
}

const Form1 = ({ form, register, user }) => (
    <Form inputs={form.form1} onSubmit={register} />
);

const mapStateToProps = ({ form }) => ({
    form,
});
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ register }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form1);
