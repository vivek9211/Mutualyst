/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    background: '#FFFFFF',
    text: '#0D1117',
    secondaryText: '#8B949E',
    link: '#1F6FEB',
    button: '#238636',
    icon: '#C9D1D9',
    tint: tintColorLight,
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: '#0D1117',
    text: '#E6EDF3',
    secondaryText: '#8B949E',
    link: '#1F6FEB',
    button: '#238636',
    icon: '#C9D1D9',
    tint: tintColorDark,
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
