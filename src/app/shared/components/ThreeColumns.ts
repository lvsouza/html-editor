import { createEl, createStyle, createUi } from '../../../lib';


const classes = createStyle({
  base: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
  },
  column1: {
    height: '100vh',
    backgroundColor: 'red',
  },
  divider: {
    width: 8,
    marginLeft: -4,
    height: '100vh',
    marginRight: -4,
    cursor: 'e-resize',
    '&:hover': {
      backgroundColor: 'green',
    }
  },
  column2: {
    flex: 1,
    height: '100vh',
    backgroundColor: 'black',
  },
  column3: {
    height: '100vh',
    backgroundColor: 'blue',
  },
});


const ThreeColumnsUi = createUi(() => {
  const container = createEl('div');
  container.classList.add(classes.base);

  const column1 = createEl('div');
  column1.classList.add(classes.column1);

  let left = 40;
  const divider1 = createEl('div');
  column1.style.width = `${left}px`;
  divider1.classList.add(classes.divider);
  divider1.onmousedown = () => {
    const handleMove = (e: MouseEvent) => {
      left += e.movementX;
      column1.style.width = `${left}px`;
    }

    const handleUp = () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  }

  const column2 = createEl('div');
  column2.classList.add(classes.column2);

  const column3 = createEl('div');
  column3.style.width = `${left}px`;
  column3.classList.add(classes.column3);

  let right = 40;
  const divider2 = createEl('div');
  divider2.classList.add(classes.divider);
  divider2.onmousedown = () => {
    const handleMove = (e: MouseEvent) => {
      right -= e.movementX;
      column3.style.width = `${right}px`;
    }

    const handleUp = () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  }


  container.append(column1, divider1, column2, divider2, column3);

  const setChilds = (...[child1, child2, child3]: [HTMLElement, HTMLElement, HTMLElement]) => {
    column1.appendChild(child1);
    column2.appendChild(child2);
    column3.appendChild(child3);
  }

  return [{ setChilds }, container];
});

export const ThreeColumns = ([column1, column2, column3]: [HTMLElement, HTMLElement, HTMLElement]) => {
  const [{ setChilds }, container] = ThreeColumnsUi();

  setChilds(column1, column2, column3);

  return container;
}
