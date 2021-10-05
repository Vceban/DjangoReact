import React, {Component} from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from '../../actions/auth'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    onChange = e => this.setState({[e.target.name]:
        e.target.value});

    render() {
   //     if(this.props.isAuthenticated){
    //        return <Redirect to="/" />
    //    }
        const {username, password} = this.state;

        return(
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                name='username'
                                placeholder='Username'
                                onChange = {this.onChange}
                                value = {username}
                               />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                name='password'
                                placeholder='password'
                                onChange = {this.onChange}
                                value = {password}/>

                            <Button content='Login' primary />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Link to ='/register'>
                        <Button content='Sign up' icon='signup' size='big' />
                        </Link>
                    </Grid.Column>
                </Grid>

                <Divider vertical>Or</Divider>
            </Segment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {login}) (Login);