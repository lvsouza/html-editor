import { Container, FC, Render, Text } from 'ui-build';

const Component: FC = () => {
  return Container({
    children: [
      Text({ text: 'Meu teste 1' }),
      Text({ text: 'Meu teste 2' }),
    ]
  });
}

const divRoot = document.getElementById('root');
Render(Component({}), divRoot as any);
