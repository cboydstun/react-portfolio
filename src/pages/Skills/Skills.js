import React from 'react';
import { Card, Button } from 'react-bootstrap';

class Skills extends React.PureComponent {
  render() {

    var box = {
      margin: '1%',
      marginTop: '3rem'
    }

    var styles = {
      width: '100%',
      height: '33rem',
      margin: '0.33rem'
    }

    return (
      <div style = {box}>
        <Card style={styles}>
          <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Click It</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Skills;