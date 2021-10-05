import React, {Component} from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {register} from "../../actions/auth";
import PropTypes from "prop-types";

export class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		confpassword: ''
	}
	static propTypes = {
		register: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	}
	onSubmit = e => {
		e.preventDefault();
		const {username, email, password, confpassword} = this.state
		if (password !== confpassword){
			console.log("different passwords")
		} else {
			const newUser = {
				username,
				email,
				password
			}
			this.props.register(newUser)
		}
	};

	onChange = e => this.setState({[e.target.name]:
		e.target.value});

render() {
	const {username, email, password, confpassword } = this.state;
	return(
    <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Form onSubmit={this.onSubmit}>
                    <Form.Input floated = 'middle'
                        icon='user'
                        iconPosition='left'
                        label='Username'
						name='username'
                        placeholder='username'
						onChange = {this.onChange}
						value = {username}
                        />
					<Form.Input
						icon='bullseye'
						iconPosition='left'
						label='Email'
						name='email'
						placeholder='email'
						type='email'
						onChange = {this.onChange}
						value = {email}/>

                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
						name='password'
                        placeholder='password'
                        type='password'
                        onChange = {this.onChange}
                        value = {password}/>

					<Form.Input
						name='confpassword'
						icon='lock'
						iconPosition='left'
						label='Confirm Password'
						placeholder='password'
						type='password'
						onChange = {this.onChange}
						value = {confpassword}
						/>

                    <Button content='Sign-up' primary />
                </Form>
            </Grid.Column>
				<Grid.Column verticalAlign='middle'>
				<Link to ='/login'>
					<Button content='Login' icon='signup' size='big' />
				</Link>
			</Grid.Column>
        </Grid>

		<Divider vertical>Already have an account?</Divider>
    </Segment>
  )
 }
}

const mapStateToProps = state =>({
	isAuthenticated : state.auth.isAuthenticated
})
export default connect (mapStateToProps, {register})(Register);