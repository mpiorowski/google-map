import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { GOOGLE_MAP_KEY } from "../../config/global-variables";
=======
import { SOCKET_ENDPOINT } from "../../config/global-variables";
import { GOOGLE_MAP_KEY } from "../../app-parameters";
>>>>>>> master
import "./GoogleMapComponent.less";
import { Row, Col } from "antd";
import WrappedMap from "./MapComponent";
import { serviceGetCars } from "./api/GoogleMapApi";
import MarkersList from "./list/CarsListComponent";
import Search from "antd/lib/input/Search";

import socketIOClient from "socket.io-client";

export interface Car {
  name: string;
  x: number;
  y: number;
}

const GoogleMapComponent = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filter, setFilter] = useState<string>("");

  // init data load
  useEffect(() => {
    serviceGetCars().then((response) => {
      setCars(response);
    });

    // start socker
    const socket = socketIOClient({path: "/socket"});
    socket.on("cars-response", (response: Car[]) => {
      setCars(response);
    });
    return () => {
      socket.off("cars-response");
    };
  }, []);

  // startin interval
  // useInterval(() => {
  //   serviceGetCars().then((response) => {
  //     let filteredResponse;
  //     // filtering based on filters
  //     if (filter != "") {
  //       filteredResponse = response.filter((car) => car.name.includes(filter));
  //     } else {
  //       filteredResponse = response;
  //     }
  //     // checking for changed values (no rerender for the same values)
  //     if (JSON.stringify(filteredResponse) != JSON.stringify(cars)) {
  //       setCars(filteredResponse);
  //     }
  //   });
  // }, delay);

  const filterChange = (value: string) => {
    setFilter(value);
  };

  return (
    <div>
      <Row className={"filter-row"}>
        <div className="filter-input-div">
          <Search
            placeholder="filter"
            className="filter-input"
            onSearch={(value) => filterChange(value)}
            enterButton
          />
        </div>
      </Row>
      <Row className={"map-row"}>
        <Col span={18}>
          <WrappedMap
            cars={cars}
            filter={filter}
            isMarkerShown
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" +
              GOOGLE_MAP_KEY
            }
            loadingElement={<div className={"loading-element"} />}
            containerElement={<div className={"container-element"} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Col>
        <Col span={6}>
          <MarkersList cars={cars} filter={filter}></MarkersList>
        </Col>
      </Row>
    </div>
  );
};

export default GoogleMapComponent;
