import React, { Component, } from 'react';
import {
  Layout,
} from 'antd';
import ToolboxesView from './components/ToolboxesView';
import './ToolboxesDashboard.scss';

const {
  Content,
  Header,
} = Layout;

class ToolboxesDashboard extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Layout
        className="toolboxes_dashboard"
      >
        <Header
          className="toolboxes_dashboard__header"
        >
          <div
            className="toolboxes_dashboard__header-content"
          >
            <h2
              className="toolboxes_dashboard__header-title"
            >
              x-Drag
              <span
                className="toolboxes_dashboard__header-subtitle"
              >
                (design to code)
              </span>
            </h2>
          </div>
        </Header>
        <Layout>
          <Content
            className="toolboxes_dashboard__content"
          >
            <ToolboxesView />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default ToolboxesDashboard;
