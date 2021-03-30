import { FC, Text } from "ui-build";

import { LayoutBase } from "./shared/layouts";
import './styles/global.css';

export const App: FC = () => {
  return LayoutBase({
    left: [
      Text({ text: 'Meu teste 1' }),
      Text({ text: 'Meu teste 2' }),
    ],
    center: [
      Text({ text: 'Meu teste 1' }),
      Text({ text: 'Meu teste 2' }),
    ],
    right: [
      Text({ text: 'Meu teste 1' }),
      Text({ text: 'Meu teste 2' }),
    ]
  });
};
