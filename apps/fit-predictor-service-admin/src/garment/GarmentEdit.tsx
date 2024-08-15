import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { FitPredictionTitle } from "../fitPrediction/FitPredictionTitle";

export const GarmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Brand" source="brand" />
        <SelectInput
          source="category"
          label="Category"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="Elasticity" source="elasticity" />
        <TextInput label="FabricType" source="fabricType" />
        <ReferenceArrayInput
          source="fitPredictions"
          reference="FitPrediction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FitPredictionTitle} />
        </ReferenceArrayInput>
        <TextInput label="FitType" source="fitType" />
        <NumberInput label="Length" source="length" />
        <TextInput label="ProductID" source="productId" />
        <NumberInput label="Shoulder" source="shoulder" />
        <TextInput label="Size" source="size" />
        <NumberInput label="Width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
