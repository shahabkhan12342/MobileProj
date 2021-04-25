import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
class Child extends React.Component {
    render(){
    return (
        <div className='col-lg-3 col-md-6 mt-3'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" width='10px' height='170px' src={this.props.imgg} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
        {this.props.details}
    </Card.Text>
    <Button variant="primary">{this.props.button}</Button>
  </Card.Body>
</Card>
        </div>
    )
}
}
export default Child;