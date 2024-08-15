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

import { GARMENT_TITLE_FIELD } from "./GarmentTitle";
import { USERMEASUREMENTS_TITLE_FIELD } from "../userMeasurements/UserMeasurementsTitle";

export const GarmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Brand" source="brand" />
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Elasticity" source="elasticity" />
        <TextField label="FabricType" source="fabricType" />
        <TextField label="FitType" source="fitType" />
        <TextField label="ID" source="id" />
        <TextField label="Length" source="length" />
        <TextField label="ProductID" source="productId" />
        <TextField label="Shoulder" source="shoulder" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Width" source="width" />
        <ReferenceManyField
          reference="FitPrediction"
          target="garmentId"
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
