import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import logo from '../public/logo.png';

addons.setConfig({
    theme: create({
        base: 'dark',
        brandTitle: 'The Times Graphics Components',
        brandUrl: 'https://times.github.io/graphics-components/',
        brandImage: logo,
    }),
});
