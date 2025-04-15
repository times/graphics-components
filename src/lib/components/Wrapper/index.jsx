/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  h3 {
    line-height: 20px;
    color: #000;
    font-family: var(--font-body);
    font-size: 22px;
    font-weight: 700;
    margin: 0 auto;
    padding: 0 0 4px;
    text-align: left;
  }

  h4 {
    line-height: 20px;
    color: #000;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 400;
    margin: 0 auto 15px;
    padding: 0 0 4px;
    text-align: left;
  }

  .chart-title {
    line-height: 20px;
    color: #000;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 400;
    margin: 0 auto 15px;
    padding: 0 0 4px;
    text-align: left;
  }

  .note {
    color: rgb(51, 51, 51);
    font-family: Roboto-Regular, Roboto-Regular-fallback, sans-serif;
    font-size: 9px;
    line-height: 17px;
    margin-bottom: 0px;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: left;
  }
`;

const Wrapper = ({ data = {}, children }) => {
  const { hed = '', dek = '', chartTitle = '', note = '', source = '' } = data;

  return (
    <WrapperContainer>
      {hed && <h3>{hed}</h3>}
      {dek && <h4>{dek}</h4>}
      {chartTitle && <p className="chart-title">{chartTitle}</p>}
      {children}
      {(note || source) && (
        <div className="note-container">
          {note && <p className="note">{note}</p>}
          {source && <p className="note">{source}</p>}
        </div>
      )}
    </WrapperContainer>
  );
};

export default Wrapper;
