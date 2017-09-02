import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../data/user/api';
import Form from '../../components/Form';
// import './style.css';

const Form1 = ({ form1, register, user }) => (
    <Form inputs={form1} onSubmit={register(user.username, user.password, user.email)} />
);

const mapStateToProps = ({ form1 }) => ({
    form1,
});
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ register }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form1);
