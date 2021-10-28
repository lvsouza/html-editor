import { TUiProcessor, TUiProcessorResult } from '../types';

export function createComponent<C, P extends object, R extends HTMLElement>(processor: TUiProcessor<C, P, R>) {
  return (params?: P) => processor(params || {} as P) as TUiProcessorResult<C, R>;
};
