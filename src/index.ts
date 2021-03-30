import * as UiBuild from 'ui-build';

import { App } from './app/app';


UiBuild.Render(App({}), document.getElementById('root') as any);
