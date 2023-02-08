import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardGroup, Card } from 'react-bootstrap';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <CardGroup style={{ padding: '0.5rem' }}>
        <Card data-testid="planet-card" >
          <Card.Title data-testid="planet-name">{planetName}</Card.Title>
          <Card.Img src={planetImage} alt={`Planeta ${planetName}`} />
        </Card>
      </CardGroup>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
