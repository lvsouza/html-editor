
export type TUiProcessor<C, P extends object, R extends HTMLElement> = (params: P) => TUiProcessorResult<C, R>;
export type TUiProcessorResult<C, R extends HTMLElement> = [C, R]
