import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GARMENT_TITLE_FIELD } from "../garment/GarmentTitle";
import { USERMEASUREMENTS_TITLE_FIELD } from "./UserMeasurementsTitle";

export const UserMeasurementsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FitPrediction"
          target="userMeasurementId"
          label="FitPredictions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="FitRating" source="fitRating" />
            <TextField label="FitScore" source="fitScore" />
            <ReferenceField
              label="Garment"
              source="garment.id"
              reference="Garment"
            >
              <TextField source={GARMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Recommendation" source="recommendation" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserMeasurement"
              source="usermeasurements.id"
              reference="UserMeasurements"
            >
              <TextField source={USERMEASUREMENTS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
