import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CARPARK_TITLE_FIELD } from "./CarParkTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CarParkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FavoriteCarPark"
          target="carParkId"
          label="FavoriteCarParks"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="carPark"
              source="carpark.id"
              reference="CarPark"
            >
              <TextField source={CARPARK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
