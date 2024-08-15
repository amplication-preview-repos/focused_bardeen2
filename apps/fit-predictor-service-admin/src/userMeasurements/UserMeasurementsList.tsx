import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserMeasurementsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserMeasurementsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ArmLength" source="armLength" />
        <TextField label="Bust" source="bust" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Gender" source="gender" />
        <TextField label="Height" source="height" />
        <TextField label="Hips" source="hips" />
        <TextField label="ID" source="id" />
        <TextField label="Inseam" source="inseam" />
        <TextField label="ShoulderWidth" source="shoulderWidth" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Waist" source="waist" />
        <TextField label="Weight" source="weight" />
      </Datagrid>
    </List>
  );
};
