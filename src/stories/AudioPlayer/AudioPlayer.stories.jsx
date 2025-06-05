import React from 'react';
import { AudioPlayer } from '../../lib/components';
import WithTextWrapper from '../../storybook/decorators/WithTextWrapper';
import WithThemeProvider from '../../storybook/decorators/WithThemeProvider';

export default {
    title: 'Components/AudioPlayer',
    component: AudioPlayer,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <WithThemeProvider>
                <WithTextWrapper>
                    <Story />
                </WithTextWrapper>
            </WithThemeProvider>
        ),
    ],
};

const Template = (args) => <AudioPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        id: 1,
        name: 'Sir Mark Rowley',
        quote: "'They were called things like “the Aids kids”'",
        audioSrc: 'rowley',
        imgSrc: 'rowley',
    },
};
