import { apiRequest } from "../../../services/ApiRequest";
import { Car } from "../GoogleMapComponent";

export function serviceGetCars(): Promise<Car[]> {
  return apiRequest({
    url: "/api/cars",
    method: "GET",
  });
}

export function serviceAddCar(values: Car): Promise<Car> {
  return apiRequest({
    url: "/api/cars",
    method: "POST",
    body: JSON.stringify(values),
  });
}

export function serviceDeleteAllCars(): Promise<void> {
  return apiRequest({
    url: "/api/cars",
    method: "DELETE",
  });
}
