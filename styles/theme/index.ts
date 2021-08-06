import {extendTheme, theme as chakraTheme} from '@chakra-ui/react';
import {fonts, fontSizes, fontWeights} from './typography/fonts';
import {breakpoints} from './media-queries/breakpoints';

const overrides = {
  ...chakraTheme,
  fonts,
  fontWeights,
  fontSizes,
  breakpoints,
};

export const theme = extendTheme(overrides);

