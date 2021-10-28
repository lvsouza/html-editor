import { TUiProcessor, TUiProcessorResult, TUiProcessorRecordOfComponents } from '../types';

export function createUi<C extends TUiProcessorRecordOfComponents, R extends HTMLElement>(processor: TUiProcessor<C, R>) {
  return () => processor() as TUiProcessorResult<C, R>;
};
