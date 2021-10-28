import { createEl, createUi } from '../lib';


const UiRender = createUi(() => {
  const divContainer = createEl('div');
  const input = createEl('input');
  const paragraph = createEl('p');

  paragraph.innerHTML = 'Text: ';

  divContainer.append(paragraph, input);


  return [{ paragraph, input }, divContainer];
})

export const App = () => {
  const [{ paragraph, input }, main] = UiRender();


  input.oninput = () => {
    paragraph.innerText = `Text: ${input.value}`;
  }

  return main;
}
