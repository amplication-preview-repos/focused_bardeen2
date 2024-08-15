import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AiModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AIModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Accuracy" source="accuracy" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="F1Score" source="f1Score" />
        <TextField label="ID" source="id" />
        <TextField label="ModelName" source="modelName" />
        <TextField label="Precision" source="precision" />
        <TextField label="Recall" source="recall" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
