import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import { Car } from "./GoogleMapComponent";
import MarkersComponent from "./markers/MarkersComponent";

interface Props {
  cars: Car[];
  filter: string;
  isMarkerShown: boolean;
  googleMapURL: string;
  loadingElement: JSX.Element;
  containerElement: JSX.Element;
  mapElement: JSX.Element;
}

const WrappedMap = withScriptjs(
  withGoogleMap((props: Props) => {
    const [mapRef, setmapRef] = useState<GoogleMap | null>();

    const [openedInfo, setOpenedInfo] = useState<string[]>([]);

    // settings bounds and auto fit map
    useEffect(() => {
      const mapBounds = new google.maps.LatLngBounds();
      props.cars.forEach((car) => {
        mapBounds.extend(new google.maps.LatLng(car.x, car.y));
      });
      mapRef?.fitBounds(mapBounds);
    }, [mapRef]);

    const handleOpenInfo = (name: string, type:number) => {
      if(type === 1 && !openedInfo.includes(name)) {
        setOpenedInfo((openedInfo) => openedInfo.concat(name));
      } else if (type === 2 && openedInfo.includes(name)) {
        setOpenedInfo((openedInfo) => openedInfo.filter((openedInfo) => openedInfo !== name));
      }
    };

    // settings markers
    const Markers = (): JSX.Element => {
      const markers = props.cars?.map((car) => {
        if (car.x && car.y && car.name.includes(props.filter)) {
          return <MarkersComponent car={car} openedInfo={openedInfo} handleOpenInfo={handleOpenInfo}/>;
        }
      });
      return <React.Fragment>{markers}</React.Fragment>;
    };

    return (
      <GoogleMap
        ref={(ref) => {
          setmapRef(ref);
        }}
      >
        <Markers></Markers>
      </GoogleMap>
    );
  })
);

export default WrappedMap;
