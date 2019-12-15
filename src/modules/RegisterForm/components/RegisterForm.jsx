import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from "react-router-dom";
import { Button, Block } from '../../../components'

class RegisterForm extends Component {

    render() {
        const success = false;
        return (
            <div>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>Please sign up in order to use chat</p>
                </div>
                <Block>
                    {!success ? (
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item validateStatus="success" hasFeedback>

                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email"
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item>

                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Your Name"
                                    size="large"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    size="large"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    size="large"
                                    placeholder="Retype Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    size="large"
                                >
                                    Sign Up
                                </Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="/login">Sign In</Link>
                        </Form>
                    ) : (
                            <div className="auth__success-block">
                                <div><Icon type="info-circle" theme="twoTone"/></div>
                                <h2>Please verify your email</h2>
                                <p>Please check your mailbox for the email from us</p>
                            </div>
                        )}

                </Block>
            </div>
        )
    }
}

export default RegisterForm;