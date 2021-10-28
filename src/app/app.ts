import { createEl, createUi, createStyle, createText } from '../lib';


const classesButton = createStyle({
  button: {
    backgroundColor: 'red',
    borderRadius: 4,
    border: 'none',
    padding: 4,
  },
});
const Button = (text?: string) => {
  const buttonElement = createEl('button');

  buttonElement.classList.add(classesButton.button);

  if (text) buttonElement.appendChild(createText(text));

  return buttonElement
}



const classes = createStyle({
  container: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 8,
  },
});

const AppUi = createUi(() => {
  const divContainer = createEl('div');
  divContainer.classList.add(classes.container);

  const buttonSomar = Button('Somar');
  const buttonSubtrair = Button('Subtrair');
  const buttonReset = Button();

  const textToCountSubtrair = createText('0');
  const textToCountSomar = createText('0');
  const textToCountReset = createText('0');
  buttonSubtrair.appendChild(textToCountSubtrair);
  buttonSomar.appendChild(textToCountSomar);
  buttonReset.appendChild(textToCountReset);


  const changeCountText = (value: string) => {
    const newvalue = value;
    textToCountSubtrair.data = newvalue;
    textToCountSomar.data = newvalue;
    textToCountReset.data = newvalue;
    return true;
  };

  divContainer.append(buttonSubtrair, buttonSomar, buttonReset);

  return [{ changeCountText, buttonSomar, buttonSubtrair }, divContainer];
});

export const App = () => {
  const [{ changeCountText, buttonSomar, buttonSubtrair }, main] = AppUi();

  let counter = 0;

  buttonSomar.onclick = () => {
    counter++;
    changeCountText(String(counter));
  }

  buttonSubtrair.onclick = () => {
    counter--;
    changeCountText(String(counter));
  }

  return main;
}
