import React from 'react';
import PropTypes from 'prop-types';
import { Tools, } from '../data/Tools';

const ToolboxList = ({
  onItemDragged,
}) => (
  <div>
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

ToolboxList.propTypes = {
  onItemDragged: PropTypes.func.isRequired,
};

export default ToolboxList;
