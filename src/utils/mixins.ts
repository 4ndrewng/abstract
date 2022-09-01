import { BREAKPOINTS } from "./constants";

export const mediaUp = (range: string) => {
  let minWidth: string = range;

  for (const [key, value] of Object.entries(BREAKPOINTS)) {
    if (key === range) {
      minWidth = value;
    }
  }

  return `(min-width: ${minWidth})`;
};

export const mediaDown = (range: string) => {
  let maxWidth: string = range;

  for (const [key, value] of Object.entries(BREAKPOINTS)) {
    if (key === range) {
      maxWidth = value;
    }
  }

  return `(max-width: ${maxWidth})`;
};

export const mediaBetween = (bottomRange: string, topRange: string) => {
  let maxWidth: string = topRange;
  let minWidth: string = bottomRange;

  for (const [key, value] of Object.entries(BREAKPOINTS)) {
    if (key === topRange) {
      maxWidth = value;
    }

    if (key === bottomRange) {
      minWidth = value;
    }
  }

  return `(min-width: ${minWidth}) and (max-width: ${maxWidth})`;
};
