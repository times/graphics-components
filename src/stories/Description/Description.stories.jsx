import React from 'react';
import { Description } from '../../lib/components';
import WithWrapper from '../../storybook/decorators/WithWrapper';

export default {
    title: 'Furniture Components/Description',
    component: Description,
    
    decorators: [
        (Story) => (
            <WithWrapper>
                <Story />
            </WithWrapper>
        ),
    ],
};

const Template = () => {
  return <Description text="President echoes Marco Rubio’s warning to European leaders of a ticking clock — while JD Vance tells Georgia Meloni he is optimistic about talks" />;
};
export const Default = Template.bind({});

