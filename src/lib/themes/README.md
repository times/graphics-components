# Theme System

This theme system provides a structured way to manage design tokens that can be imported from Figma variables.

## Basic Usage

### 1. Using ThemeProvider

Wrap your app or components with the `ThemeProvider`:

```jsx
import React from 'react';
import { ThemeProvider, MediaBlock } from '@times/graphics-components';

function App() {
  return (
    <ThemeProvider>
      <MediaBlock data={mediaData} />
    </ThemeProvider>
  );
}
```

### 2. Using Custom Theme

You can override or extend the default Figma theme:

```jsx
import React from 'react';
import { ThemeProvider, MediaBlock } from '@times/graphics-components';

const customTheme = {
  colors: {
    primary: {
      500: '#ff6b35' // Override primary color
    },
    brand: {
      main: '#1a1a1a' // Add new brand colors
    }
  },
  spacing: {
    // Add custom spacing
    '7': '1.75rem'
  }
};

function App() {
  return (
    <ThemeProvider customTheme={customTheme}>
      <MediaBlock data={mediaData} />
    </ThemeProvider>
  );
}
```

### 3. Using Theme in Components

Use the `useTheme` hook to access theme values and utilities:

```jsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@times/graphics-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.utils.color('primary.500')};
  color: ${props => props.theme.utils.color('neutral.50')};
  padding: ${props => props.theme.utils.spacing('3')} ${props => props.theme.utils.spacing('6')};
  border-radius: ${props => props.theme.utils.borderRadius('md')};
  font-size: ${props => props.theme.utils.typography('fontSize', 'base')};
  
  ${props => props.theme.utils.media.up('md')} {
    font-size: ${props => props.theme.utils.typography('fontSize', 'lg')};
  }
`;

function CustomButton() {
  const theme = useTheme();
  
  return (
    <StyledButton>
      Click me
    </StyledButton>
  );
}
```

## Theme Structure

The theme follows this structure based on common Figma variable patterns:

```json
{
  "colors": {
    "primary": { "50": "#f0f9ff", "500": "#0ea5e9", "900": "#0c4a6e" },
    "neutral": { "50": "#fafafa", "500": "#737373", "900": "#171717" },
    "semantic": { "error": "#ef4444", "success": "#10b981" },
    "theme": {
      "light": { "bg": "#ffffff", "font": "#111827" },
      "dark": { "bg": "#121212", "font": "#b6b6b6" }
    }
  },
  "typography": {
    "fontFamily": { "sans": ["Inter", "system-ui", "sans-serif"] },
    "fontSize": { "sm": "0.875rem", "base": "1rem", "lg": "1.125rem" },
    "fontWeight": { "normal": "400", "bold": "700" }
  },
  "spacing": { "1": "0.25rem", "4": "1rem", "8": "2rem" },
  "borderRadius": { "md": "0.375rem", "lg": "0.5rem" },
  "breakpoints": { "sm": "640px", "md": "768px", "lg": "1024px" }
}
```

## Theme Utilities

### Color Utilities

```jsx
// Basic color
theme.utils.color('primary.500') // #0ea5e9

// Color with opacity
theme.utils.color('primary.500', 0.5) // rgba(14, 165, 233, 0.5)

// Theme-aware colors (responds to light/dark mode)
theme.utils.themeColor('bg', 'light') // #ffffff
theme.utils.themeColor('bg', 'dark')  // #121212
```

### Spacing

```jsx
theme.utils.spacing('4') // 1rem
```

### Typography

```jsx
theme.utils.typography('fontSize', 'lg')    // 1.125rem
theme.utils.typography('fontWeight', 'bold') // 700
```

### Media Queries

```jsx
// Min-width media query
theme.utils.media.up('md') // @media (min-width: 768px)

// Max-width media query  
theme.utils.media.down('md') // @media (max-width: 640px)
```

## Figma Integration

When exporting design tokens from Figma:

1. Export your Figma variables as JSON
2. Replace the contents of `figma-theme.json` with your exported tokens
3. Ensure the structure matches the expected format above
4. The theme system will automatically use your Figma variables

## Components with Theme Support

All components in this library automatically support the theme system:

- `MediaBlock` - Uses theme for spacing, colors, typography
- `GlobalStyle` - Automatically applies theme-aware light/dark mode
- All styled components receive theme props automatically

## Fallbacks

All theme utilities include fallback values, so the components will work even without a theme provider or if a theme value is missing. 