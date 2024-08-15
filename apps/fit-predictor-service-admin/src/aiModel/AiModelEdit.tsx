import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AiModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Accuracy" source="accuracy" />
        <NumberInput label="F1Score" source="f1Score" />
        <TextInput label="ModelName" source="modelName" />
        <NumberInput label="Precision" source="precision" />
        <NumberInput label="Recall" source="recall" />
      </SimpleForm>
    </Edit>
  );
};
