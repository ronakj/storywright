/**
 * Interface object to pass arguments to story processor.
 */
export interface StoryWrightOptions {
  url: string;
  screenShotDestPath: string;
  browsers: Array<string>;
  headless: boolean;
  concurrency: number;
  skipSteps: boolean;
}