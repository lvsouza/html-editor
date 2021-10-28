import { createEl, createUi } from '../../../lib';

import { ThreeColumns } from '../../shared/components';


const EditorUi = createUi(() => {
  const panel1 = createEl('div');
  const panel2 = createEl('div');
  const panel3 = createEl('div');


  const container = ThreeColumns([panel1, panel2, panel3]);

  return [{}, container];
});

export const Editor = () => {
  const [{ }, container] = EditorUi();


  return container;
}
