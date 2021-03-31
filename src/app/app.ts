import { FC } from "ui-build";


import { LayoutBase } from "./shared/layouts";
import { EditorPage } from "./pages";
import './styles/index.css';

export const App: FC = () => {
  return LayoutBase({
    children: [
      EditorPage(),
    ],
  });
};
