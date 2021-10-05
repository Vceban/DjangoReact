import React, { useState, Component } from 'react';
import './Navbar.scss'

//const [click, setClick] = useState(false);
//const handleClick = ( ) => setClick(!click);
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        click: true
        };
    }
    handleItemClick = () => this.setState({click: !this.state.click})

    render(){
        let {click} = this.state
        console.log(this.state);
        return(
            <nav className ="NavbarItems">
                <ul className="main-menu">
                    <li>
                        <a className="active" onClick={this.handleItemClick}>
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className= "fas fa-bars fa-3x"></i>
                            </span>
                        </a>
                        Каталог
                        <div className="drop-podmenu" style={{display: 'none'}}>
                            <div className="drop-podmenu_content">
                                <ul>
                                    <li>
                                        <a href="#">Катушки</a>
                                        <a href="#">Поплавки и Маркеры</a>
                                        <a href="#">Все для монтажа</a>
                                        <a href="#">Крючки</a>
                                        <a href="#">Прикормки</a>
                                    </li>
                                    <li><a href="#">Удилища</a></li>
                                    <li><a href="#">Леска</a></li>
                                    <li><a href="#">Шнуры</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="active" onClick={this.handleItemClick}>
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className="fas fa-cogs fa-3x"></i>
                            </span>
                        </a>
                        Спиннинг
                        <div className={click ? "drop-podmenu" : ""} style={{display: 'none'}}>
                            <div className="drop-podmenu_content">
                                <ul>
                                    <li>
                                        <a href="#">Катушки</a>
                                        <a href="#">Поплавки и Маркеры</a>
                                        <a href="#">Все для монтажа</a>
                                        <a href="#">Крючки</a>
                                        <a href="#">Прикормки</a>
                                    </li>
                                    <li><a href="#">Удилища</a></li>
                                    <li><a href="#">Леска</a></li>
                                    <li><a href="#">Шнуры</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a className="active" href="#">
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className="icon icon-menu_item_1"></i>
                            </span>
                        </a>
                        Фидер
                    </li>
                    <li>
                        <a className="active" href="#">
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className="icon icon-menu_item_1"></i>
                            </span>
                        </a>
                        Карп
                    </li>
                    <li>
                        <a className="active" href="#">
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className="icon icon-menu_item_1"></i>
                            </span>
                        </a>
                        Поплавок
                    </li>
                    <li>
                        <a className="active" href="#">
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className="icon icon-menu_item_1"></i>
                            </span>
                        </a>
                        Зима
                    </li>
                    <li>
                        <a className="active" href="#">
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className="icon icon-menu_item_1"></i>
                            </span>
                        </a>
                        Море
                    </li>
                    <li>
                        <a className="active" href="#">
                            <span className="main-menu_arrow"></span>
                            <span className="main-menu_image">
                                <i className="icon icon-menu_item_1"></i>
                            </span>
                        </a>
                        Экипировка
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;