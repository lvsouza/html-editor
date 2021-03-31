import { Container, FC } from "ui-build";

interface LayoutBaseProps {
  children: Node | Node[];
}
export const LayoutBase: FC<LayoutBaseProps> = ({ children }) => {
  return Container({
    classList: ['flex1', 'full-height', 'full-width'],
    children: Container({
      classList: ['flex1', 'background-paper', 'shadow-m'],
      children,
    }),
  });
}
