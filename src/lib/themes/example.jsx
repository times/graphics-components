import React from 'react';
import styled from 'styled-components';
import ThemeProvider, { useTheme } from './ThemeProvider';

// Example styled component using theme utilities
const ExampleCard = styled.div`
  background-color: ${props => props.theme.utils.color('neutral.50')};
  border: 1px solid ${props => props.theme.utils.color('neutral.200')};
  border-radius: ${props => props.theme.utils.borderRadius('lg')};
  padding: ${props => props.theme.utils.spacing('6')};
  margin: ${props => props.theme.utils.spacing('4')};
  box-shadow: ${props => props.theme.utils.shadow('md')};

  h2 {
    color: ${props => props.theme.utils.color('neutral.900')};
    font-size: ${props => props.theme.utils.typography('fontSize', '2xl')};
    font-weight: ${props => props.theme.utils.typography('fontWeight', 'bold')};
    margin-bottom: ${props => props.theme.utils.spacing('4')};
  }

  p {
    color: ${props => props.theme.utils.color('neutral.600')};
    font-size: ${props => props.theme.utils.typography('fontSize', 'base')};
    line-height: ${props => props.theme.utils.typography('lineHeight', 'relaxed')};
    margin-bottom: ${props => props.theme.utils.spacing('3')};
  }

  ${props => props.theme.utils.media.up('md')} {
    padding: ${props => props.theme.utils.spacing('8')};
    
    h2 {
      font-size: ${props => props.theme.utils.typography('fontSize', '3xl')};
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.utils.themeColor('page', 'dark')};
    border-color: ${props => props.theme.utils.themeColor('border', 'dark')};
    
    h2 {
      color: ${props => props.theme.utils.themeColor('font', 'dark')};
    }
    
    p {
      color: ${props => props.theme.utils.color('neutral.400')};
    }
  }
`;

const Button = styled.button`
  background-color: ${props => props.theme.utils.color('primary.500')};
  color: ${props => props.theme.utils.color('neutral.50')};
  border: none;
  border-radius: ${props => props.theme.utils.borderRadius('md')};
  padding: ${props => props.theme.utils.spacing('3')} ${props => props.theme.utils.spacing('6')};
  font-size: ${props => props.theme.utils.typography('fontSize', 'base')};
  font-weight: ${props => props.theme.utils.typography('fontWeight', 'medium')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.utils.color('primary.600')};
    transform: translateY(-1px);
  }

  &:active {
    background-color: ${props => props.theme.utils.color('primary.700')};
    transform: translateY(0);
  }
`;

// Component that uses the useTheme hook
const ThemeInfo = () => {
  const theme = useTheme();

  return (
    <ExampleCard>
      <h2>Theme System Example</h2>
      <p>
        This component demonstrates the theme system in action. It uses various
        theme utilities for colors, spacing, typography, and responsive design.
      </p>
      <p>
        <strong>Primary Color:</strong> {theme.utils.color('primary.500')}
      </p>
      <p>
        <strong>Base Font Size:</strong> {theme.utils.typography('fontSize', 'base')}
      </p>
      <p>
        <strong>Medium Spacing:</strong> {theme.utils.spacing('4')}
      </p>
      <Button onClick={() => alert('Theme system working!')}>
        Test Button
      </Button>
    </ExampleCard>
  );
};

// Example with custom theme override
const customTheme = {
  colors: {
    primary: {
      500: '#ff6b35',
      600: '#e55a2b',
      700: '#cc4a20'
    },
    custom: {
      accent: '#ffd700'
    }
  }
};

export const ThemeExample = () => (
  <ThemeProvider>
    <ThemeInfo />
  </ThemeProvider>
);

export const CustomThemeExample = () => (
  <ThemeProvider customTheme={customTheme}>
    <ThemeInfo />
  </ThemeProvider>
);

export default ThemeExample; 