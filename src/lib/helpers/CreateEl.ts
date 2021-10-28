
export const createEl = <K extends keyof HTMLElementTagNameMap>(tagName: K) => document.createElement(tagName);
