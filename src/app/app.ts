import { Container, FC, Text } from "ui-build";

export const App: FC = () => {
  return Container({
    children: [
      Text({ text: 'Meu teste 1' }),
      Text({ text: 'Meu teste 2' }),
    ]
  });
};
