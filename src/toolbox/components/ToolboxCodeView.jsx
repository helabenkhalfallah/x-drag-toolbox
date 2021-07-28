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
import {
  generatedLayout,
  ToolboxCodeLayout,
} from '../utils/ToolboxUtils';

const ToolboxCodeView = ({
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
    gutter={[ 2, 10 ]}
  >${ToolboxCodeLayout(items).join('')}  </Row>`;
    })
    : []);

  useEffect(() => {
    const htmlString = `const MyAwesomeView = () => (
<>${CodeLayout().join('')}
</>
);`;
    setPrettifiedHtml(htmlString);
  }, [
    layouts,
  ]);

  return (
    <div>
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
              language="html"
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

ToolboxCodeView.propTypes = {
  layouts: PropTypes.arrayOf(PropTypes.shape({})),
};

ToolboxCodeView.defaultProps = {
  layouts: [],
};

export default ToolboxCodeView;
