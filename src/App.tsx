import React, {Fragment} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarNavigation from "./containers/AppBarNavigation";
import {ThemeProvider} from "@material-ui/core/styles";
import SideBarDrawer from "./containers/SideBarDrawer";
import Content from "./components/Content";

type PropsType = {
    theme: any;
}

const App:React.FC<PropsType> = ({theme}) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <AppBarNavigation />
        <SideBarDrawer />
              <Content/>
      </Fragment>
    </ThemeProvider>
  );
};


export default App;

