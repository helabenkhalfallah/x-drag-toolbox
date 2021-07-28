export const generatedLayout = (layouts) => layouts?.sort((a, b) => a.y - b.y)
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

export const ToolboxCodeLayout = (items) => items?.map((tool, index) => {
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
