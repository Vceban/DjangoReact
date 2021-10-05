import React , {Component} from 'react';
import {Label} from "semantic-ui-react";
import axios from "axios";
import picture from '../../media/picture.png'
import './Swiper.scss'

class Swiper extends Component{
    state = {
        loading: false,
        error: null,
        data: []
    }

    componentDidMount() {
        this.setState({loadind: true});
        axios.defaults.headers = {
            Authorization: `Token ${localStorage.getItem("token")}`
        }
        axios.get(`/api/product-list/`)
            .then(res => {
                console.log(res.data)
                this.setState({data: res.data, loading: false})
            })
            .catch(err => {
                this.setState({error: err, loading: false})
            })
    }

    handleAddToCart = slug => {
        this.setState({loading: true});
        axios.post(`/api/add-to-cart` , {slug})
            .then(res => {
                console.log(res.data);
                //update the cart count
                this.setState({loading: false});
            })
            .catch(err => {
                this.setState({error: err, loading: false});
            })
    }
    render() {
        const {data} = this.state;
        return(
            <div className = "rr-item">
                <div className="rr-item_image">
                    <img src={picture}/>
                </div>
                <div className="rr-content">
                    <div className="container">
                        {data.map(item => {
                            return (
                                <div className="item" key={item.id}>
                                    <div className= "content">
                                        <a className="header">{item.title}</a>
                                        <div className="meta">
                                            <span className='cinema'>{item.category}</span>
                                        </div>
                                        <div className="description">{item.description}</div>
                                        <div className="extra">
                                            <button className="cartbtn" onClick={() => this.handleAddToCart(item.slug)} >
                                                <i className="fas fa-cart-plus"></i>
                                            </button>
                                            {item.discount_price && <Label color={item.label === "primary"
                                                ? "blue"
                                                : item.label === "secondary"
                                                    ? "green"
                                                    : "yellow"}>{item.label}</Label>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                        }
                    </div>
                </div>
            </div>

        );
    }
}
export default Swiper;