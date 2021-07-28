import React from 'react';
import {
  Layout,
  Steps,
  List,
  Button,
  Select,
  Input,
  Radio,
  Checkbox,
  Row,
  Col,
  Tabs,
} from 'antd';

const { TabPane, } = Tabs;
const { Step, } = Steps;
const { Option, } = Select;
const {
  Header,
  Footer,
} = Layout;

// eslint-disable-next-line max-lines-per-function
const ToolboxesMockPage = () => (
  <>
    <Row
      justify="start"
      align="top"
    >
      <Col span={10}>
        <>
          <Row
            gutter={[
              2,
              10,
            ]}
          >
            <Col
              span={24}
              offset={0}
            >
              <Header
                style={{
                  backgroundColor: '#4195D3',
                  color: 'white',
                  width: '100%',
                }}
              >
                Header
              </Header>
            </Col>
          </Row>
          <Row
            gutter={[
              2,
              10,
            ]}
          >
            <Col
              span={24}
              offset={0}
            >
              <Tabs
                defaultActiveKey="1"
              >
                <TabPane
                  tab="Top News"
                  key="1"
                >
                  Tab Top News
                </TabPane>
                <TabPane
                  tab="All News"
                  key="2"
                >
                  Tab All News
                </TabPane>
                <TabPane
                  tab="Categories"
                  key="3"
                >
                  Tab Categories
                </TabPane>
              </Tabs>
            </Col>
          </Row>
          <Row
            gutter={[
              2,
              10,
            ]}
          >
            <Col
              span={24}
              offset={0}
            >
              <Steps
                current={1}
                style={{
                  cursor: 'pointer',
                }}
              >
                <Step
                  title="Terminé"
                  description="Additional description"
                />
                <Step
                  title="In progress"
                  description="Additional description"
                />
                <Step
                  title="Waiting"
                  description="Additional description"
                />
              </Steps>
            </Col>
          </Row>
          <Row
            gutter={[
              2,
              10,
            ]}
          >
            <Col
              span={6}
              offset={0}
            >
              <Button
                type="default"
              >
                Button Default
              </Button>
            </Col>

            <Col
              span={18}
              offset={0}
            />
          </Row>
          <Row
            gutter={[
              2,
              10,
            ]}
          >
            <Col
              span={6}
              offset={12}
            >
              <Button
                type="primary"
              >
                Button Primary
              </Button>
            </Col>

            <Col
              span={6}
              offset={0}
            >
              <Button
                danger
                type="primary"
              >
                Button Danger
              </Button>
            </Col>
          </Row>
          <Row
            gutter={[
              2,
              10,
            ]}
          >
            <Col
              span={24}
              offset={0}
            >
              <Footer
                style={{
                  backgroundColor: '#BF60B1',
                  color: 'white',
                  width: '100%',
                }}
              >
                Footer
              </Footer>
            </Col>
          </Row>
        </>
      </Col>
    </Row>
  </>
);

export default ToolboxesMockPage;
