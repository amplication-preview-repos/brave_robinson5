import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EsgMetricList } from "./esgMetric/EsgMetricList";
import { EsgMetricCreate } from "./esgMetric/EsgMetricCreate";
import { EsgMetricEdit } from "./esgMetric/EsgMetricEdit";
import { EsgMetricShow } from "./esgMetric/EsgMetricShow";
import { IoTDeviceList } from "./ioTDevice/IoTDeviceList";
import { IoTDeviceCreate } from "./ioTDevice/IoTDeviceCreate";
import { IoTDeviceEdit } from "./ioTDevice/IoTDeviceEdit";
import { IoTDeviceShow } from "./ioTDevice/IoTDeviceShow";
import { HouseList } from "./house/HouseList";
import { HouseCreate } from "./house/HouseCreate";
import { HouseEdit } from "./house/HouseEdit";
import { HouseShow } from "./house/HouseShow";
import { ReadingList } from "./reading/ReadingList";
import { ReadingCreate } from "./reading/ReadingCreate";
import { ReadingEdit } from "./reading/ReadingEdit";
import { ReadingShow } from "./reading/ReadingShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CarList } from "./car/CarList";
import { CarCreate } from "./car/CarCreate";
import { CarEdit } from "./car/CarEdit";
import { CarShow } from "./car/CarShow";
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
        title={"ESGDashboard"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EsgMetric"
          list={EsgMetricList}
          edit={EsgMetricEdit}
          create={EsgMetricCreate}
          show={EsgMetricShow}
        />
        <Resource
          name="IoTDevice"
          list={IoTDeviceList}
          edit={IoTDeviceEdit}
          create={IoTDeviceCreate}
          show={IoTDeviceShow}
        />
        <Resource
          name="House"
          list={HouseList}
          edit={HouseEdit}
          create={HouseCreate}
          show={HouseShow}
        />
        <Resource
          name="Reading"
          list={ReadingList}
          edit={ReadingEdit}
          create={ReadingCreate}
          show={ReadingShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Car"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
          show={CarShow}
        />
      </Admin>
    </div>
  );
};

export default App;
