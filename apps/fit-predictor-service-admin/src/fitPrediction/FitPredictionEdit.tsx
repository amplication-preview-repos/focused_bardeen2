import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GarmentTitle } from "../garment/GarmentTitle";
import { UserMeasurementsTitle } from "../userMeasurements/UserMeasurementsTitle";

export const FitPredictionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
