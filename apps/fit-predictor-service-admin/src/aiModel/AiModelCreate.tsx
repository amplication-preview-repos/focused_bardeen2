import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AiModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Accuracy" source="accuracy" />
        <NumberInput label="F1Score" source="f1Score" />
        <TextInput label="ModelName" source="modelName" />
        <NumberInput label="Precision" source="precision" />
        <NumberInput label="Recall" source="recall" />
      </SimpleForm>
    </Create>
  );
};
