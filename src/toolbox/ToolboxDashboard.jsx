import React, { Component, } from 'react';
import {
  Layout,
} from 'antd';
import ToolboxView from './components/ToolboxView';
import './ToolboxDashboard.scss';

const {
  Content,
  Header,
} = Layout;

class ToolboxDashboard extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Layout
        className="toolbox_dashboard"
      >
        <Header
          className="toolbox_dashboard__header"
        >
          <div
            className="toolbox_dashboard__header-content"
          >
            <h2
              className="toolbox_dashboard__header-title"
            >
              x-Drag
              <span
                className="toolbox_dashboard__header-subtitle"
              >
                (Drag and drop, rearrange and the code will be generated automatically for you)
              </span>
            </h2>
          </div>
        </Header>
        <Layout>
          <Content
            className="toolbox_dashboard__content"
          >
            <ToolboxView />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default ToolboxDashboard;
