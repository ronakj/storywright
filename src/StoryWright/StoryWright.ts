import { createElement, Fragment, useEffect } from 'react';
import { BrowserExecutor } from './BrowserExecutor';

/**
 * Wrapper react component
 * @param p 
 * @returns 
 */
export const StoryWright = p => {
  useEffect(() => {
    BrowserExecutor.executesteps(p.steps);
  }, []);
  return createElement(Fragment, null, p.children);
};
