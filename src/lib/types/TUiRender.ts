

export type TUiProcessorRecordOfComponents = { [key: string]: HTMLElement; };

export type TUiProcessor<C extends TUiProcessorRecordOfComponents, R extends HTMLElement> = () => TUiProcessorResult<C, R>;
export type TUiProcessorResult<C extends TUiProcessorRecordOfComponents, R extends HTMLElement> = [C, R]
