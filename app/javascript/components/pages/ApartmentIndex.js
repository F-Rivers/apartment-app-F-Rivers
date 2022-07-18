import React, { Component } from 'react'
import {
  Card, 
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button,
  Col
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <>
        
        <div className="page-body">
        <h3>Apartment Listing</h3>
        <div className="index-cards">
          {apartments && apartments.map((apartment, index)=> {
            return ( 
              <Card key={index}>
                <CardImg className="card-image" top width="100%" src={apartment.image} alt="Card image cap" />
                <CardBody>
                  <h3>Address:</h3>
                  <CardTitle>{apartment.street}</CardTitle>
                  <CardSubtitle>{apartment.city}</CardSubtitle>
                  <CardText>{apartment.state}</CardText>
                  <h3>Manager:</h3>
                  <CardText>{apartment.manager}</CardText>
                  <h3>Monthly Rent:</h3>
                  <CardText>{apartment.price}</CardText>
                  <h3>Bedrooms:</h3>
                  <CardText>{apartment.bedrooms}</CardText>
                  <h3>Bathrooms:</h3>
                  <CardText>{apartment.bathrooms}</CardText>
                  <h3>Pets Allowed:</h3>
                  <CardText>{apartment.pets}</CardText>
                  <NavLink to={`/apartmentshow ${apartment.id}`}>
                  <Button>Click for details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            )})
          }
          </div>
        </div>
      </>
    )
  }
}