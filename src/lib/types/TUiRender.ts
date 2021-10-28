
export type TUiProcessor<C, R extends HTMLElement> = () => TUiProcessorResult<C, R>;
export type TUiProcessorResult<C, R extends HTMLElement> = [C, R]
