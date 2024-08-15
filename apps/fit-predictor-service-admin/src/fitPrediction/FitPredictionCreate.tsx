import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GarmentTitle } from "../garment/GarmentTitle";
import { UserMeasurementsTitle } from "../userMeasurements/UserMeasurementsTitle";

export const FitPredictionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="FitRating" source="fitRating" />
        <TextInput label="FitScore" source="fitScore" />
        <ReferenceInput source="garment.id" reference="Garment" label="Garment">
          <SelectInput optionText={GarmentTitle} />
        </ReferenceInput>
        <TextInput label="Recommendation" multiline source="recommendation" />
        <ReferenceInput
          source="userMeasurement.id"
          reference="UserMeasurements"
          label="UserMeasurement"
        >
          <SelectInput optionText={UserMeasurementsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
