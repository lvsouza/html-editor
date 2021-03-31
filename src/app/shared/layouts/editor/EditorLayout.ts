import { Container, FC } from "ui-build";

interface EditorLayoutProps {
  left: Node | Node[];
  center: Node | Node[];
  right: Node | Node[];
}
export const EditorLayout: FC<EditorLayoutProps> = ({ left, center, right }) => {
  return Container({
    classList: ['flex1', 'full-height', 'full-width', 'background'],
    children: [
      Container({
        classList: ['flex1', 'background-paper', 'shadow-m'],
        children: left,
      }),
      Container({
        classList: ['flex4', 'overflow-auto'],
        children: center,
      }),
      Container({
        classList: ['flex1', 'background-paper', 'shadow-m', 'flex-column', 'padding-s', 'overflow-auto'],
        children: right,
      }),
    ]
  });
}
