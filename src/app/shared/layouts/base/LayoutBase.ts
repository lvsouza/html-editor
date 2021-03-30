import { Container, FC } from "ui-build";

interface LayoutBaseProps {
  left: Node | Node[];
  center: Node | Node[];
  right: Node | Node[];
}
export const LayoutBase: FC<LayoutBaseProps> = ({ left, center, right }) => {
  return Container({
    classList: ['flex1', 'full-height', 'full-width'],
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
