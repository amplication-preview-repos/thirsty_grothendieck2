import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FavoriteCarParkList } from "./favoriteCarPark/FavoriteCarParkList";
import { FavoriteCarParkCreate } from "./favoriteCarPark/FavoriteCarParkCreate";
import { FavoriteCarParkEdit } from "./favoriteCarPark/FavoriteCarParkEdit";
import { FavoriteCarParkShow } from "./favoriteCarPark/FavoriteCarParkShow";
import { CarParkList } from "./carPark/CarParkList";
import { CarParkCreate } from "./carPark/CarParkCreate";
import { CarParkEdit } from "./carPark/CarParkEdit";
import { CarParkShow } from "./carPark/CarParkShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"CarParkService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FavoriteCarPark"
          list={FavoriteCarParkList}
          edit={FavoriteCarParkEdit}
          create={FavoriteCarParkCreate}
          show={FavoriteCarParkShow}
        />
        <Resource
          name="CarPark"
          list={CarParkList}
          edit={CarParkEdit}
          create={CarParkCreate}
          show={CarParkShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
