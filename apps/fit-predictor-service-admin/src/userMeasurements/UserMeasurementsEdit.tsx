import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { FitPredictionTitle } from "../fitPrediction/FitPredictionTitle";

export const UserMeasurementsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="ArmLength" source="armLength" />
        <NumberInput label="Bust" source="bust" />
        <ReferenceArrayInput
          source="fitPredictions"
          reference="FitPrediction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FitPredictionTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="gender"
          label="Gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Height" source="height" />
        <NumberInput label="Hips" source="hips" />
        <NumberInput label="Inseam" source="inseam" />
        <NumberInput label="ShoulderWidth" source="shoulderWidth" />
        <NumberInput label="Waist" source="waist" />
        <NumberInput label="Weight" source="weight" />
      </SimpleForm>
    </Edit>
  );
};
