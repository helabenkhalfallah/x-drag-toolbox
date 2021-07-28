import React, { Component, } from 'react';
import Layout from 'antd/es/layout';
import ToolboxesView from './ToolboxesView';
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
          className="toolboxes_dashboard--header"
        >
          Header

        </Header>
        <Layout>
          <Content
            className="toolboxes_dashboard--content"
          >
            <ToolboxesView />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default ToolboxesDashboard;
