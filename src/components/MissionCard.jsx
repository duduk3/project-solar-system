import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardGroup } from 'react-bootstrap';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <CardGroup style={{ width: '20rem', margin: '1.5rem auto' }}>
        <Card
          data-testid="mission-card"
          border="primary"
          style={{ alignItems: 'center', padding: '1rem' }}
        >
          <Card.Title data-testid="mission-name">{name}</Card.Title>
          <Card.Text data-testid="mission-year">{year}</Card.Text>
          <Card.Text data-testid="mission-country">{country}</Card.Text>
          <Card.Text data-testid="mission-destination">{destination}</Card.Text>
        </Card>
      </CardGroup>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
