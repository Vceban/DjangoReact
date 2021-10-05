import React, {Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Button, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../../actions/auth'
import picture from '../../../media/picture.png'
import fish from '../../../media/fish.svg'
import download from '../../../media/download.jpeg'
import './Header.scss'
import Navbar from "../Navbar";
import Swiper from "../Swiper";

export  class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const{isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <div className = "header-content">
                <div className= "item">
                        <button
                            className="logoutbtn"
                            onClick={this.props.logout}>
                            Logout
                        </button>
                </div>
            </div>
        )
       const { activeItem } = this.state
        const guestLinks = (
            <div className = "header-content">
                <div className="item">
                    <Link to= "/register">
                         <button className="signupbut" >Sign up</button>
                    </Link>
                </div>

                <div className="item1">
                    <Link to ="/login">
                        <button className="loginbut">Log - in</button>
                    </Link>
                </div>

            </div> )
        return(
            <header>
            <div className ="header-bottom">
                <div className="container">
                    {isAuthenticated ? authLinks: guestLinks}
                    <Navbar/>
                </div>
            </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default  connect(mapStateToProps,  { logout })(Header);