import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" style={{ margin: '2rem auto' }} >
        <Title headline="Missões" />
        {missions
          .sort(function (a, b) {
            return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
          })
          .map((mission, index) => (
            <MissionCard
              key={index}
              name={mission.name}
              year={mission.year}
              country={mission.country}
              destination={mission.destination}
            />
          ))}
      </div>
    );
  }
}

export default Missions;
