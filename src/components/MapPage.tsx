import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
  LoadScript,
} from '@react-google-maps/api';

const MapWithDirections = () => {
  const [response, setResponse] = useState<any>(null);
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(
    null
  ); // Defina o ponto de partida
  const [destination, setDestination] = useState<{
    lat: number;
    lng: number;
  } | null>(null); // Defina o ponto de destino

  useEffect(() => {
    // Define a origem e o destino aqui após a montagem do componente
    setOrigin({ lat: 40.712776, lng: -74.005974 }); // Exemplo: Nova York, NY
    setDestination({ lat: 34.052235, lng: -118.243683 }); // Exemplo: Los Angeles, CA
  }, []);

  const directionsCallback = (res: any) => {
    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res);
      } else {
        console.log('Falha ao obter direções: ', res.status);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={5}
        center={{ lat: 37.774929, lng: -122.419416 }} // Coordenadas dos EUA como exemplo
      >
        {origin && destination && (
          <DirectionsService
            options={{
              origin: origin,
              destination: destination,
              // @ts-ignore
              travelMode: 'DRIVING', // Modo de viagem: dirigindo
            }}
            callback={directionsCallback}
          />
        )}
        {response !== null && (
          <DirectionsRenderer options={{ directions: response }} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithDirections;
