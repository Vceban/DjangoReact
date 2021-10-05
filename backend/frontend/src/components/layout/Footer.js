import React, {Component } from 'react';
import "./Footer.scss"
import 'semantic-ui-css/semantic.min.css';
import {Button, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../../actions/auth'

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                    <div className = "container">
                        <div className = "row">
                            {/*column1*/}
                            <div className = "col">
                                <ul className = "list-unstyled">
                                    <h4>online shop</h4>
                                    <li>
                                        <a href=""> Акции</a>
                                    </li>
                                    <li><a href=""> Скидки</a></li>
                                    <li><a href=""> Новинки</a></li>
                                </ul>
                            </div>
                            {/*column2*/}
                            <div className = "col">
                                <ul className = "list-unstyled">
                                    <h4>Get help</h4>
                                    <li><a href=""> О Компании</a></li>
                                    <li><a href=""> Контакты</a></li>
                                    <li><a href=""> Оплата и доставка</a></li>
                                    <li><a href=""> Клуб</a></li>
                                    <li><a href=""> Форум</a></li>
                                </ul>
                            </div>
                            {/*column3*/}
                            <div className = "col">
                                <ul className = "list-unstyled">
                                    <h4>follow us</h4>
                                    <li>
                                        Пн.- Пт. с 9:00 до 18:00</li>
                                    <li>0-601-01010</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </footer>        );
    }
}
export default Footer;