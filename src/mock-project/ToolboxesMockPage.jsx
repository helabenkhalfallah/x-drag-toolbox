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
                  backgroundColor: '#3ba0e9',
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
                  description="Une description supplémentaire"
                />
                <Step
                  title="En cours"
                  description="Une description supplémentaire"
                />
                <Step
                  title="En attente"
                  description="Une description supplémentaire"
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
              span={11}
              offset={0}
            >
              <Select
                style={{
                  width: '100%',
                }}
                defaultValue="Madame"
              >
                <Option value="Madame">Madame</Option>
                <Option value="Monsieur">Monsieur</Option>
                <Option value="Mademoiselle">Mademoiselle</Option>
              </Select>
            </Col>

            <Col
              span={4}
              offset={0}
            >
              <Button
                type="primary"
                size="small"
              >
                Button Small
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
            />
          </Row>
          <Row
            gutter={[
              2,
              10,
            ]}
          >
            <Col
              span={11}
              offset={0}
            >
              <Input
                style={{
                  width: '100%',
                }}
                placeholder="Tap Your Text Here"
              />
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
              <Radio.Group
                value="iOS"
              >
                <Radio value="iOS">iOS</Radio>
                <Radio value="Android">Android</Radio>
              </Radio.Group>
            </Col>

            <Col
              span={6}
              offset={0}
            >
              <Checkbox>
                Accept - Decline
              </Checkbox>
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
              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={[
                  'Ego vero sic intellego, Patres conscripti, nos hoc',
                  'Etenim si attendere diligenter, existimare vere de',
                  'Has autem provincias, quas Orontes ambiens amnis',
                  'In his tractibus navigerum nusquam visitur flumen',
                  'Has autem provincias, quas Orontes ambiens amnis',
                ]}
                renderItem={(item) => (
                  <List.Item>
                    {item}
                  </List.Item>
                )}
              />
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
                  backgroundColor: '#7dbcea',
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
