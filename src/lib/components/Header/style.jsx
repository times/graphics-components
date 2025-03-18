import styled from 'styled-components';
import { breakpoints } from '@times-visuals/styles';

export const HeadingContainer = styled.div`
    .headline {
        font-family: 'RobotoRegular', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #232323;
        text-align: left;
        line-height: normal;
    }

    .standfirst {
        font-family: 'RobotoRegular', sans-serif;
        font-size: 18px;
        color: #232323;
        text-align: left;
    }

    padding-inline-start: 10px;

    @media (min-width: ${breakpoints.mobile}) {
        padding-inline: 72.297px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        padding-inline: 220.5px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        padding-inline: 258.4px;
    }
`;
