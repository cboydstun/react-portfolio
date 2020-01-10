import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class Create extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          role: '',
          date: '',
          website: ''
        }
      }

      onChangeRole(e) {
        this.setState({role: e.target.value})
      }
    
      onChangeDate(e) {
        this.setState({date: e.target.value})
      }
    
      onChangeWebsite(e) {
        this.setState({website: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`Job saved!`);
        console.log(`Role: ${this.state.role}`);
        console.log(`Date: ${this.state.date}`);
        console.log(`Website ${this.state.website}`);
    
        this.setState({role: '', date: '', website: ''})
      }
    
  render() {
    return (
      <div>
        <Form>
        <Form.Group controlId="Name">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Website</Form.Label>
          <Form.Control type="website"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create
        </Button>
      </Form>
    </div>
    );
}
}