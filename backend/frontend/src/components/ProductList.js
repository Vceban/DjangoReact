import React, {Component} from 'react'
import { 
  Button, 
  Container, 
  Dimmer, 
  Icon, 
  Image, 
  Item, 
  Label, 
  Loader,
  Message, 
  Segment,
   } from 'semantic-ui-react'
import axios from 'axios';

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
        <Container>
            {error && (
                <Message
                    error
                    header='There was some errors with your submission'
                    content={JSON.stringify(error)}
                />
            )}
            {loading &&  (
                <Segment>
                    <Dimmer active inverted>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                </Segment>)}
        <Item.Group divided>
            {data.map(item => {
                return (
                    <div key={item.id}>
                    <Item.Content>
                        <Item.Header as='a'>{item.title}</Item.Header>
                        <Item.Meta>
                            <span className='cinema'>{item.category}</span>
                        </Item.Meta>
                        <Item.Description>{item.description}</Item.Description>
                        <Item.Extra>
                            <Button primary floated='right' icon labelPosition="right">
                                Add to cart
                                <Icon name='cart plus' />
                            </Button>
                            {item.discount_price && <Label color={item.label === "primary"
                                ? "blue"
                                : item.label === "secondary"
                                    ? "green"
                                    : "yellow"}>{item.label}</Label>}
                        </Item.Extra>
                    </Item.Content>
                </div>
                )
            })}

      </Item.Group>
  </Container>
    );
  }
} export default ProductList