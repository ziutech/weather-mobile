import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import {WeatherDisplay} from '../src/WeatherDisplay';

interface WeatherItemProps {
  place: Place;
}
export function WeatherItem({place}: WeatherItemProps): JSX.Element {
  const [data, setData] = useState<WeatherData | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://7u0hul7cmj.execute-api.eu-central-1.amazonaws.com/Prod/weather?place=${place.name}`,
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [place]);
  return <WeatherDisplay place={place} data={data} />;
}
