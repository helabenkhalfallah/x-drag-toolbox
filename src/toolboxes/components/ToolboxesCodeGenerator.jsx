import React, { useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
import {
  notification,
  Row,
  Col,
  Button,
} from 'antd';
import { CopyFilled, } from '@ant-design/icons';

const generatedLayout = (layouts) => layouts?.sort((a, b) => a.y - b.y)
  .reduce((acc, next) => {
    const currentKey = `${Math.floor(next.y)}`;
    if (acc[currentKey]) {
      const olds = acc[currentKey];
      return ({
        ...acc,
        [currentKey]: [
          ...olds,
          next,
        ],
      });
    }
    return ({
      ...acc,
      [currentKey]: [
        next,
      ],
    });
  }, {});

const ToolboxesCodeLayout = (items) => items?.map((tool, index) => {
  const span = tool.w;
  const offset = index === 0
    ? tool.x
    : (items[index].x - (items[index - 1].x + items[index - 1].w));
  return (tool.componentStr && tool.componentStr.length) ? `
    <Col 
      span={${span}}
      offset={${offset}}
    >
      ${tool.componentStr}
    </Col>
  ` : `
    <Col 
      span={${span}}
      offset={${offset}}
    />
`;
});

const ToolboxesCodeGenerator = ({
  layouts,
}) => {
  const [
    prettifiedHtml,
    setPrettifiedHtml,
  ] = useState('');
  const [
    api,
    contextHolder,
  ] = notification.useNotification();
  const dynamicCodeLayout = generatedLayout(layouts);
  const CodeLayout = () => (dynamicCodeLayout
    ? Object.keys(dynamicCodeLayout).map((line) => {
      const items = dynamicCodeLayout[line].sort((a, b) => a.x - b.x);
      return `
  <Row
    gutter={[
      2,
      10,
    ]}
  >${ToolboxesCodeLayout(items).join('')}</Row>`;
    })
    : []);

  useEffect(() => {
    const htmlString = `<>${CodeLayout().join('')}
</>`;
    setPrettifiedHtml(htmlString);
  }, [
    layouts,
  ]);

  return (
    <div
      className="code-container"
    >
      {contextHolder}
      <Row
        gutter={[
          2,
          10,
        ]}
        justify="end"
        align="top"
      >
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            icon={<CopyFilled />}
            onClick={() => {
              navigator.clipboard.writeText(prettifiedHtml);
              api.success({
                message: 'Code copied to clipboard !',
                placement: 'topRight',
                duration: 1,
                closeIcon: null,
                top: '10%',
              });
            }}
          >
            Copy/Paste
          </Button>
        </Col>
        <Col span={2} />
      </Row>
      <Row
        gutter={[
          2,
          10,
        ]}
        justify="start"
        align="top"
      >
        <Col span={24}>
          {prettifiedHtml && (
            <SyntaxHighlighter
              language="xml"
              showLineNumbers={false}
              wrapLines
              useInlineStyles
              style={vs2015}
            >
              {prettifiedHtml}
            </SyntaxHighlighter>
          )}
        </Col>
      </Row>
    </div>
  );
};

ToolboxesCodeGenerator.propTypes = {
  layouts: PropTypes.arrayOf(PropTypes.shape({})),
};

ToolboxesCodeGenerator.defaultProps = {
  layouts: [],
};

export default ToolboxesCodeGenerator;
