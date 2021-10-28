import { TUiProcessor, TUiProcessorResult } from '../types';

export function createUi<C, R extends HTMLElement>(processor: TUiProcessor<C, R>) {
  return () => processor() as TUiProcessorResult<C, R>;
};
