import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GARMENT_TITLE_FIELD } from "../garment/GarmentTitle";
import { USERMEASUREMENTS_TITLE_FIELD } from "../userMeasurements/UserMeasurementsTitle";

export const FitPredictionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FitPredictions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="FitRating" source="fitRating" />
        <TextField label="FitScore" source="fitScore" />
        <ReferenceField label="Garment" source="garment.id" reference="Garment">
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
    </List>
  );
};
