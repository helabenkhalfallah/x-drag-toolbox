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
  TOOLBOXES_PATH,
} = Path;

const {
  ToolboxesDashboard,
  ToolboxesMockPage,
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
          path={TOOLBOXES_PATH}
          component={(props) => (
            <ToolboxesDashboard
              {...props}
              page="ToolboxesDashboard"
            />
          )}
        />
        <Route
          exact
          path="/mock-page"
          component={(props) => (
            <ToolboxesMockPage
              {...props}
              page="ToolboxesMockPage"
            />
          )}
        />
        <Redirect
          from="/"
          to={TOOLBOXES_PATH}
        />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Router;
