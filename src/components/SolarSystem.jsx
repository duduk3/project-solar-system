import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div
        data-testid="solar-system"
        className='container'
        style={{ display: 'flex', alignItems: 'center', margin: '2rem auto' }}
      >
        <Title headline="Planetas" />
        {planets.map((planet, index) => (
          <PlanetCard
            key={index}
            planetName={planet.name}
            planetImage={planet.image}
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
