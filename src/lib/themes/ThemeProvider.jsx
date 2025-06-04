/* eslint-disable linebreak-style */
import React, { createContext, useContext, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import figmaTheme from './figma-theme.json';

// Create a context for theme utilities
const ThemeContext = createContext();

// Theme utility functions
const createThemeUtils = (theme) => ({
  // Get color value with optional opacity
  color: (path, opacity = 1) => {
    const value = getNestedValue(theme.colors, path);
    if (!value) return path; // fallback to original value if not found
    
    if (opacity === 1) return value;
    
    // Convert hex to rgba if opacity is provided
    if (value.startsWith('#')) {
      const hex = value.slice(1);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return value;
  },
  
  // Get spacing value
  spacing: (key) => getNestedValue(theme.spacing, key) || key,
  
  // Get typography value
  typography: (category, key) => getNestedValue(theme.typography[category], key) || key,
  
  // Get border radius
  borderRadius: (key) => getNestedValue(theme.borderRadius, key) || key,
  
  // Get shadow
  shadow: (key) => getNestedValue(theme.shadows, key) || key,
  
  // Get breakpoint for media queries
  breakpoint: (key) => getNestedValue(theme.breakpoints, key) || key,
  
  // Media query helper
  media: {
    up: (key) => `@media (min-width: ${getNestedValue(theme.breakpoints, key) || key})`,
    down: (key) => {
      const breakpoints = Object.values(theme.breakpoints);
      const currentIndex = Object.keys(theme.breakpoints).indexOf(key);
      const prevBreakpoint = breakpoints[currentIndex - 1];
      return `@media (max-width: ${prevBreakpoint || '0px'})`;
    }
  },
  
  // Theme-aware colors (light/dark mode)
  themeColor: (colorKey, mode = 'light') => {
    return getNestedValue(theme.colors.theme[mode], colorKey) || colorKey;
  }
});

// Helper function to get nested object values
const getNestedValue = (obj, path) => {
  if (!path || !obj) return undefined;
  
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current[key] === undefined) return undefined;
    current = current[key];
  }
  
  return current;
};

// Custom hook to use theme utilities
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider component
const ThemeProvider = ({ children, customTheme = {} }) => {
  // Merge custom theme with figma theme
  const mergedTheme = useMemo(() => {
    return deepMerge(figmaTheme, customTheme);
  }, [customTheme]);

  // Create theme utilities
  const themeUtils = useMemo(() => {
    return createThemeUtils(mergedTheme);
  }, [mergedTheme]);

  // Combine theme data and utilities
  const themeValue = useMemo(() => ({
    ...mergedTheme,
    utils: themeUtils
  }), [mergedTheme, themeUtils]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <StyledThemeProvider theme={themeValue}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Deep merge utility function
const deepMerge = (target, source) => {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  
  return result;
};

export default ThemeProvider; 