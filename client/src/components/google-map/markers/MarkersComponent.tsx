import React from "react";
import { Car } from "../GoogleMapComponent";
import { Marker, InfoWindow } from "react-google-maps";

interface Props {
  car: Car;
  openedInfo: string[];
  handleOpenInfo: (arg0: string, arg1: number) => void;
}

const MarkersComponent = (props: Props) => {

  const handleToggleOpen = (name: string) => {
    props.handleOpenInfo(name, 1);
  };

  const handleToggleClose = (name: string) => {
    props.handleOpenInfo(name, 2);
  };
  return (
    <div>
      <Marker
        key={props.car.name}
        position={{ lat: props.car.x, lng: props.car.y }}
        onClick={() => handleToggleOpen(props.car.name)}
      >
        {props.openedInfo.includes(props.car.name) ? (
          <InfoWindow onCloseClick={() => handleToggleClose(props.car.name)}>
            <span style={{ color: "black" }}>
              <p>{props.car.name}</p>
              <p>Lat: {props.car.x}</p>
              <p>Lng: {props.car.y}</p>
            </span>
          </InfoWindow>
        ) : (
          ""
        )}
      </Marker>
    </div>
  );
};

export default MarkersComponent;
