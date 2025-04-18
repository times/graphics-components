import React from 'react';
import { Headline } from '../../lib/components';
import WithWrapper from '../../storybook/decorators/WithWrapper';

export default {
    title: 'Furniture Components/Headline',
    component: Headline,
    
    decorators: [
        (Story) => (
            <WithWrapper>
                <Story />
            </WithWrapper>
        ),
    ],
};

const Template = () => {
  return <Headline text="Trump: If Ukraine-Russia peace deal’s too difficult we’ll ‘take a pass’" />;
};
export const Default = Template.bind({});

