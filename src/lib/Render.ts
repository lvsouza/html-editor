function Render(element: HTMLElement | Text, target: HTMLElement | null) {
  target?.appendChild(element);
}

export const UiBuild = {
  Render,
};
