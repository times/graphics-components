import React from 'react';
import { HeadingContainer } from './style';

function Header({ headline, standfirst }) {
    return (
        <HeadingContainer>
            {headline && <h1 className="headline">{headline}</h1>}
            {standfirst && <p className="standfirst">{standfirst}</p>}
        </HeadingContainer>
    );
}

export default Header;
