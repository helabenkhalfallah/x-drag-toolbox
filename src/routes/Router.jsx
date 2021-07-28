import React, { Suspense, } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Spin from 'antd/es/spin';
import LazyRoute from './LazyRoute';
import Path from './Path';

const {
  TOOLBOX_PATH,
  TOOLBOX_MOCK_PATH,
} = Path;

const {
  ToolboxDashboard,
  ToolboxMockPage,
} = LazyRoute;

const Router = () => (
  <Suspense fallback={(
    <Spin spinning />
  )}
  >
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={TOOLBOX_PATH}
          component={(props) => (
            <ToolboxDashboard
              {...props}
              page="ToolboxDashboard"
            />
          )}
        />
        <Route
          exact
          path={TOOLBOX_MOCK_PATH}
          component={(props) => (
            <ToolboxMockPage
              {...props}
              page="ToolboxMockPage"
            />
          )}
        />
        <Redirect
          from="/"
          to={TOOLBOX_PATH}
        />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Router;
