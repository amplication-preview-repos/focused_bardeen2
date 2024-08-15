import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { GARMENT_TITLE_FIELD } from "../garment/GarmentTitle";
import { USERMEASUREMENTS_TITLE_FIELD } from "../userMeasurements/UserMeasurementsTitle";

export const FitPredictionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
