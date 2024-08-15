import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AiModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Accuracy" source="accuracy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="F1Score" source="f1Score" />
        <TextField label="ID" source="id" />
        <TextField label="ModelName" source="modelName" />
        <TextField label="Precision" source="precision" />
        <TextField label="Recall" source="recall" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
