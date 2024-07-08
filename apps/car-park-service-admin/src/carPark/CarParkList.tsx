import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CarParkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CarParks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="address" source="address" />
        <TextField label="x_coord" source="xCoord" />
        <TextField label="y_coord" source="yCoord" />
        <TextField label="car_park_type" source="carParkType" />
        <TextField
          label="type_of_parking_system"
          source="typeOfParkingSystem"
        />
        <TextField label="short_term_parking" source="shortTermParking" />
        <TextField label="car_park_decks" source="carParkDecks" />
        <TextField label="gantry_height" source="gantryHeight" />
        <BooleanField label="car_park_basement" source="carParkBasement" />
        <TextField label="car_park_no" source="carParkNo" />
        <TextField label="free_parking" source="freeParking" />
        <TextField label="night_parking" source="nightParking" />
      </Datagrid>
    </List>
  );
};
