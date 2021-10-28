import { createEl, createComponent } from '../../../lib';

import { ThreeColumns } from '../../shared/components';


export const Editor = createComponent(() => {
  const panel1 = createEl('div');
  const panel2 = createEl('div');
  const panel3 = createEl('div');


  const [, treeColumns] = ThreeColumns([panel1, panel2, panel3]);

  return [{}, treeColumns];
});
