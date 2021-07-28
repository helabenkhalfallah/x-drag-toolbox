/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import RGL, { WidthProvider, } from 'react-grid-layout';
import { Row, Col, Typography, } from 'antd';
import ToolboxesList from './ToolboxesList';
import ToolboxesCodeGenerator from './ToolboxesCodeGenerator';
import './ToolboxesView.scss';

const {
  Text,
  Title,
} = Typography;

const GridLayout = WidthProvider(RGL);

class ToolboxesView extends React.Component {
  lastIndex = 0;

    static propTypes = {
      className: PropTypes.string,
      onLayoutChange: PropTypes.func,
    }

  static defaultProps = {
    className: 'layout',
    onLayoutChange: () => {},
  };

  state = {
    currentDraggedItem: null,
    layouts: null,
  };

  componentDidMount() {}

  generateDOM = () => {
    const {
      layouts,
    } = this.state;
    const layout = layouts || [];
    return layout.map((tool, i) => (
      <div
        key={tool.i}
        data-grid={tool}
      >
        {layout[i].component}
        <span
          role="button"
          style={{
            position: 'absolute',
            right: '2px',
            top: 0,
            cursor: 'pointer',
          }}
          onClick={() => this.onRemoveItem(tool)}
        >
          x
        </span>
      </div>
    ));
  }

  onRemoveItem = (item) => {
    const {
      layouts,
    } = this.state;
    const newLayouts = layouts.filter((value) => value.key !== item.key);
    this.setState({
      layouts: newLayouts,
    });
  }

  onLayoutChange = (layout) => {
    const {
      onLayoutChange,
    } = this.props;
    onLayoutChange(layout);
    const {
      layouts,
    } = this.state;
    const newLayouts = layouts?.map((item) => {
      const newItem = layout.find((val) => val.i === item.i);
      return ({
        ...item,
        w: newItem?.w,
        h: newItem?.h,
        x: newItem?.x,
        y: newItem?.y,
      });
    });
    this.setState({
      layouts: newLayouts,
    });
  };

  onItemDragged = (item) => {
    this.setState({
      currentDraggedItem: item,
    });
  }

  onDrop = (layout, layoutItem) => {
    const {
      currentDraggedItem,
      layouts,
    } = this.state;
    layout.pop();
    this.lastIndex += 1;
    this.setState({
      layouts: [
        ...layouts || [],
        {
          ...layoutItem,
          i: `${this.lastIndex || 0}`,
          component: currentDraggedItem?.component,
          componentStr: currentDraggedItem?.componentStr,
          key: currentDraggedItem?.key,
          w: currentDraggedItem?.w,
          h: currentDraggedItem?.h,
          resizeHandles: currentDraggedItem?.resizeHandles,
        },
      ],
    });
  };

  render() {
    const {
      layouts,
    } = this.state;
    return (
      <Row
        gutter={[
          2,
          2,
        ]}
        justify="center"
        align="top"
      >
        <Col span={4}>
          <Title level={2}>
            Components
          </Title>
          <Text strong>
            1. Choose a component
          </Text>
          <ToolboxesList
            onItemDragged={(item) => this.onItemDragged(item)}
          />
        </Col>
        <Col span={10}>
          <Title level={2}>
            Your web page
          </Title>
          <Text strong>
            2. Drag/Drop components here
          </Text>
          <br />
          <Text strong>
            3. Move components inside the layout
          </Text>
          <GridLayout
            {...this.props}
            layouts={layouts}
            onLayoutChange={this.onLayoutChange}
            onDrop={this.onDrop}
            resizeHandles={[]}
            cols={24}
            rowHeight={35}
            compactType="vertical"
            preventCollision={false}
            measureBeforeMount={false}
            useCSSTransforms
            isDroppable
          >
            {this.generateDOM()}
          </GridLayout>
        </Col>
        <Col span={10}>
          <Title level={2}>
            Code (jsx)
          </Title>
          <Text strong>
            3. Auto-generated source code (copy/paste)
          </Text>
          <ToolboxesCodeGenerator
            layouts={layouts}
          />
        </Col>
      </Row>
    );
  }
}

export default ToolboxesView;
