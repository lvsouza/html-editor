import { createStyle, UiBuild } from "./lib";

import { App } from './app/App';

createStyle({
  '@global': {
    body: {
      backgroundColor: 'lightgray',
    }
  }
});

UiBuild.Render(App(), document.getElementById('root'));
