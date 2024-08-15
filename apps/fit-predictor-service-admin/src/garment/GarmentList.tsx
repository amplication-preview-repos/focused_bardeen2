import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const GarmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Garments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
