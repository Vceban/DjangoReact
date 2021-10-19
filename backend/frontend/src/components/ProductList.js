import React, {Component} from 'react'
import { 
  Button,
  Icon, 
  Image,
  Label,
   } from 'semantic-ui-react'
import axios from 'axios';
import './ProductList.scss'

class ProductList extends Component {

  state = {
    loading: false,
    error: null,
    data: []
  }

  componentDidMount() {
    this.setState({loadind: true});
   axios.get(`/api/product-list`)
    .then(res => {
      console.log(res.data)
      this.setState({data: res.data, loading: false})
    })
    .catch(err => {
      this.setState({error: err, loading: false})
    })
  }

  render() {
    const {data, error, loading} = this.state;
    return (
        <div className= "container">
        <div className="divided-items">
            {data.map(item => {
                return (
                    <div key={item.id}>
                    <div className="imgcontent">
                        <img src={item.image}/>
                    </div>
                    <div className="content">
                        <div className="header" as='a'>{item.title}</div>
                        <div className="meta">
                            <span className='cinema'>{item.category}</span>
                        </div>
                        <div className="price-label">{item.price}
                        <br/>
                            1
                            <Button primary floated='right' icon labelPosition="right">
                                Add to cart
                                <Icon name='cart plus' />
                            </Button>
                        </div>
                        <div className="description">{item.description}</div>
                        <div className="extra">

                            {item.discount_price && <Label color={item.label === "primary"
                                ? "blue"
                                : item.label === "secondary"
                                    ? "green"
                                    : "yellow"}>{item.label}</Label>}
                        </div>
                    </div>
                </div>
                )
            })}

      </div>
  </div >
    );
  }
} export default ProductList