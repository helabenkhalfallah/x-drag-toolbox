import React from 'react';
import PropTypes from 'prop-types';
import { Tools, } from './Tools';

const ToolboxesList = ({
  onItemDragged,
}) => (
  <div className="droppable-container">
    {Tools.map((tool) => (
      <div
        key={tool.key}
        className="droppable-element"
        draggable
        unselectable="on"
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', '');
          onItemDragged(tool);
        }}
      >
        {tool.component}
      </div>
    ))}
  </div>
);

ToolboxesList.propTypes = {
  onItemDragged: PropTypes.func.isRequired,
};

export default ToolboxesList;
