// .storybook/main.js

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-designs',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};

export default config;
