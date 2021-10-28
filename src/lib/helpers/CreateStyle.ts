import jss, { Styles, create, InsertionPoint } from 'jss';
import jssPluginCamelCase from 'jss-plugin-camel-case';
import jssPresetDefault from 'jss-preset-default';

jss.setup(jssPresetDefault());
jss.use(jssPluginCamelCase());


export const createStyle = <Name extends string | number | symbol = string, Props = unknown, Theme = undefined>(styles: Partial<Styles<Name, Props, Theme>>, insertionPoint?: InsertionPoint) => {
  if (!insertionPoint) {
    const { classes } = jss.createStyleSheet(styles).attach();
    return classes;
  } else {
    const jss = create({ insertionPoint });
    jss.setup(jssPresetDefault());
    jss.use(jssPluginCamelCase());
    const { classes } = jss.createStyleSheet(styles).attach();
    return classes;
  }
}
