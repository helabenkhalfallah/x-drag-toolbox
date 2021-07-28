import React from 'react';
import { v4 as uuidv4, } from 'uuid';
import {
  Layout,
  Steps,
  List,
  Button,
  Select,
  Input,
  Radio,
  Checkbox,
  Tabs,
} from 'antd';

const { TabPane, } = Tabs;
const { Step, } = Steps;
const { Option, } = Select;
const {
  Header,
  Footer,
} = Layout;

const ListData = [
  'Ego vero sic intellego, Patres conscripti, nos hoc',
  'Etenim si attendere diligenter, existimare vere de',
  'Has autem provincias, quas Orontes ambiens amnis',
  'In his tractibus navigerum nusquam visitur flumen',
  'Has autem provincias, quas Orontes ambiens amnis',
];

export const DefaultTool = {
  x: 0,
  y: 0,
  w: 2.25,
  h: 1,
  i: '0',
  static: false,
  key: uuidv4(),
  component: <span className="text">Drag Item Here</span>,
};

export const Tools = [
  {
    x: 0,
    y: 0,
    w: 24,
    h: 2,
    static: false,
    key: uuidv4(),
    component: (
      <Header
        style={{
          backgroundColor: '#4195D3',
          color: 'white',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Header
      </Header>
    ),
    componentStr: `<Header
        style={{
          backgroundColor: '#4195D3',
          color: 'white',
          width: '100%',
        }}
      >
        Header
      </Header>`,
  },
  {
    x: 0,
    y: 0,
    w: 24,
    h: 2,
    static: false,
    key: uuidv4(),
    component: (
      <Footer
        style={{
          backgroundColor: '#BF60B1',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Footer
      </Footer>
    ),
    componentStr: `<Footer
        style={{
          backgroundColor: '#BF60B1',
          color: 'white',
          width: '100%',
        }}
      >
       Footer
      </Footer>`,
  },
  {
    x: 0,
    y: 0,
    w: 4,
    h: 1,
    static: false,
    resizeHandles: [
      'e',
    ],
    key: uuidv4(),
    component: (
      <div
        style={{
          cursor: 'pointer',
          minWidth: '2px',
          minHeight: '33px',
          backgroundColor: '#ECBD45',
          color: 'white',
        }}
      >
        Space
      </div>
    ),
    componentStr: '',
  },
  {
    x: 0,
    y: 0,
    w: 24,
    h: 2,
    static: false,
    key: uuidv4(),
    component: (
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
    ),
    componentStr: `<Tabs
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
      </Tabs>`,
  },
  {
    x: 0,
    y: 0,
    w: 24,
    h: 2,
    static: false,
    key: uuidv4(),
    component: (
      <Steps
        current={1}
        style={{
          cursor: 'pointer',
        }}
      >
        <Step
          title="Terminated"
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
    ),
    componentStr: `<Steps
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
      </Steps>`,
  },
  {
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Button
        type="primary"
        style={{
          width: '174px',
        }}
      >
        Button Primary
      </Button>
    ),
    componentStr: `<Button
        type="primary"
      >
        Button Primary
      </Button>`,
  },
  {
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Button
        type="default"
        style={{
          width: '174px',
        }}
      >
        Button Default
      </Button>
    ),
    componentStr: `<Button
        type="default"
      >
        Button Default
      </Button>`,
  },
  {
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Button
        danger
        type="primary"
        style={{
          width: '174px',
        }}
      >
        Button Danger
      </Button>
    ),
    componentStr: `<Button
        danger
        type="primary"
      >
        Button Danger
      </Button>`,
  },
  {
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Button
        type="primary"
        size="large"
        style={{
          width: '174px',
        }}
      >
        Button Large
      </Button>
    ),
    componentStr: `<Button
        type="primary"
        size="large"
      >
        Button Large
      </Button>`,
  },
  {
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Button
        type="primary"
        size="middle"
        style={{
          width: '174px',
        }}
      >
        Button Middle
      </Button>
    ),
    componentStr: `<Button
        type="primary"
        size="middle"
      >
        Button Middle
      </Button>`,
  },
  {
    x: 0,
    y: 0,
    w: 4,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Button
        type="primary"
        size="small"
        style={{
          width: '111px',
        }}
      >
        Button Small
      </Button>
    ),
    componentStr: `<Button
        type="primary"
        size="small"
      >
        Button Small
      </Button>`,
  },
  {
    x: 0,
    y: 0,
    w: 11,
    h: 1.5,
    static: false,
    key: uuidv4(),
    component: (
      <div style={{
        padding: '10px',
        width: '325px',
        cursor: 'pointer',
        backgroundColor: '#5138eeAA',
      }}
      >
        <Select
          style={{
            width: '300px',
          }}
          defaultValue="Madame"
        >
          <Option value="Madame">Madame</Option>
          <Option value="Monsieur">Monsieur</Option>
          <Option value="Mademoiselle">Mademoiselle</Option>
        </Select>
      </div>
    ),
    componentStr: `<Select
        style={{
          width: '100%',
        }}
        defaultValue="Madame"
      >
        <Option value="Madame">Madame</Option>
        <Option value="Monsieur">Monsieur</Option>
        <Option value="Mademoiselle">Mademoiselle</Option>
      </Select>`,
  },
  {
    x: 0,
    y: 0,
    w: 11,
    h: 1.5,
    static: false,
    key: uuidv4(),
    component: (
      <div style={{
        padding: '10px',
        width: '325px',
        cursor: 'pointer',
        backgroundColor: '#5138eeBB',
      }}
      >
        <Input
          style={{
            width: '300px',
          }}
          placeholder="Tap Your Text Here"
        />
      </div>
    ),
    componentStr: `<Input
        style={{
          width: '100%',
        }}
        placeholder="Tap Your Text Here"
      />`,
  }, {
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Radio.Group
        value="iOS"
        style={{
          width: '175px',
        }}
      >
        <Radio value="iOS">iOS</Radio>
        <Radio value="Android">Android</Radio>
      </Radio.Group>
    ),
    componentStr: `<Radio.Group
        value="iOS"
      >
        <Radio value="iOS">iOS</Radio>
        <Radio value="Android">Android</Radio>
      </Radio.Group>`,
  },
  {
    x: 0,
    y: 0,
    w: 6,
    h: 1,
    static: false,
    key: uuidv4(),
    component: (
      <Checkbox
        style={{
          width: '175px',
        }}
      >
        Accept - Decline
      </Checkbox>
    ),
    componentStr: `<Checkbox>
        Accept - Decline
      </Checkbox>`,
  },
  {
    x: 0,
    y: 0,
    w: 16,
    h: ListData.length + 3,
    static: false,
    key: uuidv4(),
    resizeHandles: [
      'e',
    ],
    component: (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={ListData}
        renderItem={(item) => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    ),
    componentStr: `<List
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
      />`,
  },
];
