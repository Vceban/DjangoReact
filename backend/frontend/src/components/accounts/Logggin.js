import React, {Component} from "react";
import './Logggin.scss'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import { Redirect } from 'react-router';
import {Login} from "./Login";

export class Logggin extends Component {
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
        console.log("submit");
        this.props.login(this.state.username, this.state.password)
    }

    onChange = e => this.setState({[e.target.name]:
        e.target.value});
    render()
        {
            if(this.props.isAuthenticated){
                    return <Redirect to="/" />;
                }
            return(
            <div className="base-container">
            <div className="header"> Login </div>
            <div className="content">
                <div className="form">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Username </label>
                        <input
                               type="text"
                               name="username"
                               placeholder="username"
                               onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label> Password </label>
                        <input type="password"
                               name="password"
                               placeholder="password"
                               onChange={this.onChange}

                        />
                    </div>

                    <div className="form-group">
                        <button type ="submit"className="btn"> Login </button>
                    </div>
                    </form>
                </div>
            </div>
            </div>
)
        }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {login}) (Logggin);

