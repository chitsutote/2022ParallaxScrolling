import { useMediaQuery } from 'react-responsive';

export const breakpoints = {
  sm: { min: 576, max: 991.98, query: '(min-width: 576px)' },
  md: { min: 992, max: 1599.98, query: '(min-width: 992px)' },
  lg: { min: 1600, max: 999999999, query: '(min-width: 1600px)' },
}

export const breakpointUp = (width) => `screen and (min-width: ${breakpoints[width].min}px)`

export const useIsMobile = () => useMediaQuery({ maxWidth: breakpoints.sm.max })