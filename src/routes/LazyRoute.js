import loadable from '@loadable/component';

// full dynamic import page
const ToolboxesDashboard = loadable((props) => import(`../toolboxes/${props.page}`));
const ToolboxesMockPage = loadable((props) => import(`../mock-project/${props.page}`));

const LazyRoute = {
  ToolboxesDashboard,
  ToolboxesMockPage,
};

export default LazyRoute;
