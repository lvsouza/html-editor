import { createStyle, UiBuild } from "./lib";

import { App } from './app/App';

createStyle({
  '@global': {
    body: {
      backgroundColor: 'lightgray',
      padding: 0,
      margin: 0,
    }
  }
});

UiBuild.Render(App()[1], document.getElementById('root'));
