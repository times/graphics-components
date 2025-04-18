import React from 'react';

import Headline from '../Headline';
import Description from '../Description';
import ArticleFlags from '../ArticleFlags';
import Text from '../Text';
import MediaBlock from '../MediaBlock';

const FurnitureBlock = ({ blocks, align = 'left' }) => {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'headline':
            return <Headline key={i} text={block.text} align={align} />;
          case 'description':
            return <Description key={i} text={block.text} align={align} />;
          case 'flags':
            return (
              <ArticleFlags
                key={i}
                withContainer={block.withContainer}
                longRead={block.longRead}
                flags={block.flags}
              />
            );
          case 'text':
            return <Text key={i} text={block.text} align={align} />;
          case 'media':
            return <MediaBlock key={i} data={block.data} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default FurnitureBlock;
