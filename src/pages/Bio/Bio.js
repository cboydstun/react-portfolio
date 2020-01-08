import React from 'react';
import { Card, Button } from 'react-bootstrap';

class Bio extends React.PureComponent {
  render() {

    var styles = {
      width: '100%',
      height: '33rem',
      margin: '0.33rem'
    }

    return (
      <React.Fragment>

        <Card style={styles}>
          <Card.Body>
          <Card.Img variant="left" src="holder.js/100px180" />
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Click It</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default Bio;