export const fontColor = (dim: Number) => {
  return {
    light: `hsl(220, 26%, 14%, ${dim})`,
    dark: `hsl(204, 45%, 98%, ${dim})`,
  };
};

export const bgColor = (dim: Number) => {
  return {
    light: `hsl(204, 45%, 98%, ${dim})`,
    dark: `hsl(220, 26%, 14%, ${dim})`,
  };
};

export const fontDimColor = {
  light: 'hsl(220, 26%, 14%, .8)',
  dark: 'hsl(204, 45%, 98%, .8)',
};

export const paraCtaColor = {
  light: 'hsl(216, 15%, 52%, 1)',
  dark: 'hsl(211, 25%, 84%, 1)',
};

export const placeholderColor = {
  light: 'hsl(216, 15%, 52%, .6)',
  dark: 'hsl(211, 25%, 84%, .6)',
};

export const bgCtaButtons = (dim: Number) => {
  return {
    light: `hsl(259, 59%, 59%, ${dim} )`,
    dark: `hsl(259, 59%, 59%, ${dim})`,
  };
};

export const fontCtaColor = {
  light: `hsl(204, 45%, 98%)`,
  dark: `hsl(204, 45%, 98%)`,
};

export const bgInputField = (dim: Number) => {
  return {
    light: `hsl(214, 32%, 91%, ${dim})`,
    dark: `hsl(218, 17%, 35%, ${dim})`,
  };
};
