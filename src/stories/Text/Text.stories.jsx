import React from 'react';
import { Text } from '../../lib/components';
import WithWrapper from '../../storybook/decorators/WithWrapper';

export default {
    title: 'Furniture Components/Text',
    component: Text,

    decorators: [
        (Story) => (
            <WithWrapper>
                <Story />
            </WithWrapper>
        ),
    ],
};

const Template = () => {
    return (
        <Text
            text="Trump said Marco Rubio, his secretary of state, was “right” to say the US would decide “in a matter of days” whether peace was doable. “We’re going to get it stopped, ideally,” Trump said in the Oval Office on Friday, but added: “If for some reason one of the two parties makes it very difficult, we’re just going to say: ‘You’re foolish, you’re fools, you’re horrible people, and we’re going to just take a pass’. But hopefully we won’t have to do that. “We want to see it end. Think of it, every day, a lot of people are being"
        />
    );
};
export const Default = Template.bind({});
