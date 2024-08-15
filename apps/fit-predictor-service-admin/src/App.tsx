import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserMeasurementsList } from "./userMeasurements/UserMeasurementsList";
import { UserMeasurementsCreate } from "./userMeasurements/UserMeasurementsCreate";
import { UserMeasurementsEdit } from "./userMeasurements/UserMeasurementsEdit";
import { UserMeasurementsShow } from "./userMeasurements/UserMeasurementsShow";
import { GarmentList } from "./garment/GarmentList";
import { GarmentCreate } from "./garment/GarmentCreate";
import { GarmentEdit } from "./garment/GarmentEdit";
import { GarmentShow } from "./garment/GarmentShow";
import { FitPredictionList } from "./fitPrediction/FitPredictionList";
import { FitPredictionCreate } from "./fitPrediction/FitPredictionCreate";
import { FitPredictionEdit } from "./fitPrediction/FitPredictionEdit";
import { FitPredictionShow } from "./fitPrediction/FitPredictionShow";
import { AiModelList } from "./aiModel/AiModelList";
import { AiModelCreate } from "./aiModel/AiModelCreate";
import { AiModelEdit } from "./aiModel/AiModelEdit";
import { AiModelShow } from "./aiModel/AiModelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FitPredictorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserMeasurements"
          list={UserMeasurementsList}
          edit={UserMeasurementsEdit}
          create={UserMeasurementsCreate}
          show={UserMeasurementsShow}
        />
        <Resource
          name="Garment"
          list={GarmentList}
          edit={GarmentEdit}
          create={GarmentCreate}
          show={GarmentShow}
        />
        <Resource
          name="FitPrediction"
          list={FitPredictionList}
          edit={FitPredictionEdit}
          create={FitPredictionCreate}
          show={FitPredictionShow}
        />
        <Resource
          name="AiModel"
          list={AiModelList}
          edit={AiModelEdit}
          create={AiModelCreate}
          show={AiModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
