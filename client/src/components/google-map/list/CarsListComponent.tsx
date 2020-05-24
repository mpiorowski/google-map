import "./CarsListComponent.less";
import React from "react";
import { List } from "antd";
import { Car } from "../GoogleMapComponent";
var parse = require("html-react-parser");

interface Props {
  cars: Car[];
  filter: string
}

const MarkersList = (props: Props) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.cars.filter((car) => car.name.includes(props.filter))}
        renderItem={(car) => (
          <List.Item>
            <List.Item.Meta
              title={"id: " + car.name}
              description={parse(
                "<p>latitude: " +
                  car.x +
                  "</p><p>" +
                  "longitude: " +
                  car.y +
                  "</p>"
              )}
              className={"marker-list"}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default MarkersList;
