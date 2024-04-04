import React from 'react';
import MapContainer from './components/MapPage';

const App: React.FC = () => {
  // const origin = { lat: 41.85073, lng: -87.65126 }; // Chicago, IL como exemplo
  // const destination = { lat: 41.8781136, lng: -87.6297982 }; // Nova York, NY como exemplo
  // const waypoints = [
  //   { location: { lat: 41.7595, lng: -87.6135 }, stopover: true }, // Indianapolis, IN como exemplo
  //   { location: { lat: 40.712776, lng: -74.005974 }, stopover: true }, // Philadelphia, PA como exemplo
  // ];

  return (
    <div>
      <h1>Minha Aplicação</h1>
      <MapContainer />
    </div>
  );
};

export default App;
