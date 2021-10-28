import { createComponent } from '../lib';

import { Editor } from './pages';

export const App = createComponent(() => {
  return Editor();
});
