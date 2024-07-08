import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FavoriteCarParkTitle } from "../favoriteCarPark/FavoriteCarParkTitle";

export const CarParkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <NumberInput label="x_coord" source="xCoord" />
        <NumberInput label="y_coord" source="yCoord" />
        <TextInput label="car_park_type" source="carParkType" />
        <TextInput
          label="type_of_parking_system"
          source="typeOfParkingSystem"
        />
        <TextInput label="short_term_parking" source="shortTermParking" />
        <NumberInput step={1} label="car_park_decks" source="carParkDecks" />
        <NumberInput label="gantry_height" source="gantryHeight" />
        <BooleanInput label="car_park_basement" source="carParkBasement" />
        <TextInput label="car_park_no" source="carParkNo" />
        <TextInput label="free_parking" source="freeParking" />
        <TextInput label="night_parking" source="nightParking" />
        <ReferenceArrayInput
          source="favoriteCarParks"
          reference="FavoriteCarPark"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteCarParkTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
