/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
            font-family: Roboto-Regular;
            src: url(/d/fonts/Roboto/Roboto-Regular-1f6d3cf6d3.woff2) format("woff2"), url(/d/fonts/Roboto/Roboto-Regular.woff) format("woff"), url(/d/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto-Regular-fallback;
            src: local("Arial");
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            ascent-override: 92.49%;
            descent-override: 24.34%;
            line-gap-override: 0;
            size-adjust: 100.3%
        }

        @font-face {
            font-family: Roboto-Medium;
            src: url(/d/fonts/Roboto/Roboto-Medium-e7df3d0942.woff2) format("woff2"), url(/d/fonts/Roboto/Roboto-Medium.woff) format("woff"), url(/d/fonts/Roboto/Roboto-Medium.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto-Medium-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Arial");
            ascent-override: 91.62%;
            descent-override: 24.11%;
            line-gap-override: 0;
            size-adjust: 101.26%
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Regular-1f6d3cf6d3.woff2) format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Medium-e7df3d0942.woff2) format("woff2");
            font-weight: 500;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: Roboto;
            src: url(/d/fonts/Roboto/Roboto-Bold-e9f5aaf547.woff2) format("woff2");
            font-weight: 700;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-dca82eac02.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-c93f4e13dd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-Regular;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-c93f4e13dd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-bf4b850ffb.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Regular-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-RegularSC;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-5fc97c82cd.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-a06bfa24de.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-RegularSC-b3f19b6c56.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-RegularSC-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 87.46%;
            descent-override: 28.13%;
            line-gap-override: 0;
            size-adjust: 113.42%
        }

        @font-face {
            font-family: TimesDigitalW04-Bold;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-9a71df9f73.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-956d1db6de.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Bold-e627de75c8.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Bold-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 86.91%;
            descent-override: 27.95%;
            line-gap-override: 0;
            size-adjust: 114.14%
        }

        @font-face {
            font-family: TimesDigitalW04-BoldItalic;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-bc6071c2c8.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-8c36a2d2bd.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldItalic-2a78549947.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-BoldItalic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 700;
            src: local("Times New Roman Bold Italic");
            ascent-override: 84.79%;
            descent-override: 27.27%;
            line-gap-override: 0;
            size-adjust: 116.99%
        }

        @font-face {
            font-family: TimesDigitalW04-Italic;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-b1475ca316.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-a577e30ef1.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-Italic-624f40f1d5.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 400;
            src: local("Times New Roman Italic");
            ascent-override: 89.35%;
            descent-override: 28.73%;
            line-gap-override: 0;
            size-adjust: 111.02%
        }

        @font-face {
            font-family: TimesDigitalW04-BoldSC;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-cd2602db9d.woff2) format("woff2"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-ddd4d0a956.woff) format("woff"), url(/d/fonts/TimesDigital/TimesDigitalW04-BoldSC-5099432df6.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesDigitalW04-BoldSC-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 86.91%;
            descent-override: 27.95%;
            line-gap-override: 0;
            size-adjust: 114.14%
        }

        @font-face {
            font-family: "Times Digital W04 Regular";
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: url(/d/fonts/TimesDigital/TimesDigitalW04-Regular-dca82eac02.woff2) format("woff2")
        }

        @font-face {
            font-family: TimesModern-Regular;
            src: url(/d/fonts/TimesModern/TimesModern-Regular-f3419df85d.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Regular-39c619f4ef.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Regular-e47b8c277b.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Regular-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 71.84%;
            descent-override: 17.78%;
            line-gap-override: 6.72%;
            size-adjust: 96.74%
        }

        @font-face {
            font-family: TimesModern-Bold;
            src: url(/d/fonts/TimesModern/TimesModern-Bold-62eb027e67.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Bold-828aec4ccd.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Bold-a2020323c6.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Bold-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 700;
            src: local("Times New Roman Bold");
            ascent-override: 73.8%;
            descent-override: 18.26%;
            line-gap-override: 6.9%;
            size-adjust: 94.18%
        }

        @font-face {
            font-family: TimesModern-ExtraBold-Italic;
            src: url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-c71c30fb0b.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-ad4b681d5b.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-ExtraBold-Italic-36c209071c.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-ExtraBold-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 700;
            src: local("Times New Roman Bold Italic");
            ascent-override: 71.6%;
            descent-override: 17.82%;
            line-gap-override: 6.7%;
            size-adjust: 97.06%
        }

        @font-face {
            font-family: TimesModern-Italic;
            src: url(/d/fonts/TimesModern/TimesModern-Italic-cc70e7e7f9.woff2) format("woff2"), url(/d/fonts/TimesModern/TimesModern-Italic-c85a679cf5.woff) format("woff"), url(/d/fonts/TimesModern/TimesModern-Italic-2f957b4455.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModern-Italic-fallback;
            font-display: swap;
            font-style: italic;
            font-weight: 400;
            src: local("Times New Roman Italic");
            ascent-override: 83.3%;
            descent-override: 21.13%;
            line-gap-override: 7.83%;
            size-adjust: 89.44%
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-Regular-f3419df85d.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 400
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-Bold-62eb027e67.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 700
        }

        @font-face {
            font-family: "Times Modern";
            src: url(/d/fonts/TimesModern/TimesModern-ExtraBold-afbbdbe2e3.woff2) format("woff2");
            font-display: swap;
            font-style: normal;
            font-weight: 800
        }

        @font-face {
            font-family: TimesModernMagazine;
            src: url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-367d1488f7.woff2) format("woff2"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-1fbe4b75f4.woff) format("woff"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Bd-2d23205196.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-fallback;
            src: local("Times New Roman");
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-Lt;
            src: url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-02f06ffbdb.woff2) format("woff2"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-e73cf89261.woff) format("woff"), url(/d/fonts/TimesModernMagazine/TimesModernMagazine-Lt-a35dbc7e66.ttf) format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        @font-face {
            font-family: TimesModernMagazine-Lt-fallback;
            font-display: swap;
            font-style: normal;
            font-weight: 400;
            src: local("Times New Roman");
            ascent-override: 97.73%;
            descent-override: 24.2%;
            line-gap-override: 0;
            size-adjust: 97.51%
        }

`;

export const Container = styled.div`
    margin-block-start: 1em;
    margin-block-end: 100px;
`;

export const CardContainer = styled.div`
    font-family: 'RobotoRegular', sans-serif;

    background-color: black;
    color: white;
    margin: 40px 0;
    padding-block-start: 16px;
    padding-block-end: 8px;
    padding-inline: 12px;

    .card-image {
        width: 172px;
        aspect-ratio: 1 / 1;
    }

    .card-name {
        margin-block-start: 8px;
        margin-block-end: 0;
    }

    .card-quote {
        font-family: 'Times Modern', serif;
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        text-align: left;

        color: #d9d9d9;
        margin-block-start: 12px;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1em;

        .waveform-container {
            grid-column: 2 / 3;
            margin-block: 0.5em;
        }

        .card-image--container {
            grid-row: 1 / 3;
        }

        .card-quote {
            margin-block: 0;
        }

        .card-image {
            width: 100%;
        }

        .card-name {
            font-size: 1rem;
        }
    }
`;
