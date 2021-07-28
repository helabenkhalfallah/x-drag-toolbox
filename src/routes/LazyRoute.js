import loadable from '@loadable/component';

// full dynamic import page
const ToolboxDashboard = loadable((props) => import(`../toolbox/${props.page}`));
const ToolboxMockPage = loadable((props) => import(`../mock-project/${props.page}`));

const LazyRoute = {
  ToolboxDashboard,
  ToolboxMockPage,
};

export default LazyRoute;
