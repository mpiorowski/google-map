// bounds for poland
export const xMax = 54.327488;
export const xMin = 49.774716;
export const yMax = 23.071192;
export const yMin = 14.764489;

export interface Car {
  id?: number;
  name: string;
  x: number;
  y: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

// init data
export const cars: Car[] = [
  {
    name: "car 1",
    x: Math.floor(Math.random() * (xMax - xMin)) + xMin,
    y: Math.floor(Math.random() * (yMax - yMin)) + yMin,
  },
  {
    name: "car 2",
    x: Math.floor(Math.random() * (xMax - xMin)) + xMin,
    y: Math.floor(Math.random() * (yMax - yMin)) + yMin,
  },
  {
    name: "bus 1",
    x: Math.floor(Math.random() * (xMax - xMin)) + xMin,
    y: Math.floor(Math.random() * (yMax - yMin)) + yMin,
  },
  {
    name: "bus 2",
    x: Math.floor(Math.random() * (xMax - xMin)) + xMin,
    y: Math.floor(Math.random() * (yMax - yMin)) + yMin,
  },
  {
    name: "truck 1",
    x: Math.floor(Math.random() * (xMax - xMin)) + xMin,
    y: Math.floor(Math.random() * (yMax - yMin)) + yMin,
  },
  {
    name: "truck 2",
    x: Math.floor(Math.random() * (xMax - xMin)) + xMin,
    y: Math.floor(Math.random() * (yMax - yMin)) + yMin,
  },
];
