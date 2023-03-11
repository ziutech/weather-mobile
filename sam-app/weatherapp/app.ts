import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import fetch from 'node-fetch';
import { Geo } from './src/types';

const API_KEY = process.env.API_KEY;
const site = 'http://api.openweathermap.org';
const geo = (place: string) => `${site}/geo/1.0/direct?q=${place}&limit=5&appid=${API_KEY}`;
const weather = (lon: number, lat: number) => `${site}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

function response(statusCode: number, value: string) {
  return {
    statusCode: statusCode,
    headers: {
      contentType: 'application/json',
    },
    body: value,
  };
}

function handleError(err: unknown) {
  if (typeof err === 'string') {
    return err;
  } else if (err instanceof Error) {
    return JSON.stringify({
      message: err.message,
    });
  }
  return 'unexpected error';
}

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const place = event.queryStringParameters?.place;
    if (place === undefined) {
      throw new Error('place not defined');
    }
    const res = await fetch(geo(place));
    const g: [Geo] = await (res.json() as Promise<[Geo]>);
    if ((g.length as number) == 0) {
      return response(200, JSON.stringify({}));
    }
    const resW = await fetch(weather(g[0].lon, g[0].lat));
    const w = await resW.json();

    return response(200, JSON.stringify(w));
  } catch (err: unknown) {
    return response(500, handleError(err));
  }
};
