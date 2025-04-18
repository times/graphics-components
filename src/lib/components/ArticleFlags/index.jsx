import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';

const pulse = keyframes`
  0% { opacity: 1 }
  50% { opacity: 0 }
  100% { opacity: 1 }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;

    ${({ withContainer }) =>
        withContainer &&
        `
    margin-bottom: 15px;
    margin-top: 5px;
  `}
`;

const FlagFlex = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    p {
        color: rgb(51, 51, 51);
        font-family: Roboto-Regular;
        font-size: 14px;
        line-height: 16px;
    }
`;

const FlagBox = styled.div`
    display: flex;
    align-items: center;
    background: #9f0000;
    height: 24px;
    padding: 7px;
    display: flex;
    flex-direction: row;
    width: fit-content;
    color: white;
    gap: 6px;
    font-family: Roboto-Regular;
    font-weight: 200;
    font-size: 12px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const PulseSquare = styled.div`
    width: 6px;
    height: 6px;
    background: white;
    animation: ${pulse} 1.2s infinite;
`;

const FlagDot = styled.div`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    line-height: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: TimesDigitalW04-RegularSC;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ $type }) => {
        switch ($type) {
            case 'UPDATED':
                return '#3c81be';
            case 'EXCLUSIVE':
                return '#c51d24';
            case 'SPONSORED':
                return '#4d4d4d';
            case 'NEW':
                return '#e34605';
            case 'LONGREAD':
                return '#696969';
            default:
                return '#000';
        }
    }};
`;

const Dot = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
`;

const formatUpdatedTime = (isoString) => {
    if (!isoString) return null;
    const date = new Date(isoString);

    const options = { month: 'long', day: 'numeric' };
    const datePart = date.toLocaleDateString('en-US', options);

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const suffix = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;

    const timePart = `${hours}.${minutes}${suffix}`;
    return `Updated ${datePart}, ${timePart}`;
};

const ArticleFlags = ({
    flags = [],
    longRead = false,
    withContainer = true,
}) => {
    if (!flags.length && !longRead) return null;

    return (
        <>
            <GlobalStyle />
            <Wrapper withContainer={withContainer}>
                {flags.map((flag, i) => {
                    const type = flag.type;

                    if (
                        flag.expiryTime &&
                        new Date(flag.expiryTime) <= new Date()
                    ) {
                        return null;
                    }

                    const label = formatUpdatedTime(flag.updatedTime);

                    if (type === 'LIVE' || type === 'BREAKING') {
                        return (
                            <FlagFlex>
                                <FlagBox key={i} $type={type}>
                                    <PulseSquare />
                                    <span className="live-breaking">
                                        {type}
                                    </span>
                                </FlagBox>
                                {label && (
                                    <p
                                        className="live-breaking"
                                        style={{
                                            fontWeight: 400,
                                            marginLeft: 6,
                                        }}
                                    >
                                        {label}
                                    </p>
                                )}
                            </FlagFlex>
                        );
                    }

                    return (
                        <FlagDot key={i} $type={type}>
                            <Dot />
                            <span>{type}</span>
                        </FlagDot>
                    );
                })}

                {longRead && (
                    <FlagDot key="longread" $type="LONGREAD">
                        <Dot />
                        <span>Long Read</span>
                    </FlagDot>
                )}
            </Wrapper>
        </>
    );
};

export default ArticleFlags;
