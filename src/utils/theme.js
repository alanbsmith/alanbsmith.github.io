import { darken, rgba } from 'polished';

// common colors
const chrome000 = '#FFFFFF';
const chrome600 = '#757575';
const chrome800 = '#424242';
const chrome900 = '#212121';

const theme = {
  colors: {
    // ui colors
    background: '#f6f7f8',
    text: '#353535',
    overlay: rgba(chrome900, 0.85),
    shadow: rgba(chrome600, 0.4),
    shadowLight: rgba(chrome600, 0.2),

    // material ui grayscale
    chrome000,
    chrome100: '#F5F5F5',
    chrome200: '#EEEEEE',
    chrome300: '#E0E0E0',
    chrome400: '#BDBDBD',
    chrome500: '#9E9E9E',
    chrome600,
    chrome700: '#616161',
    chrome800,
    chrome900,
  },
  dimensions: {
    baseFontSize: 16,
    baseGrid: 8,
  },
  fonts: {
    primary: ['Open Sans'],
    primaryFallback: ['Helvetica', 'Arial', 'sans-serif'],
  },
};

export default theme;
