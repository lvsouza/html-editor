import { createEl, createStyle, createComponent } from '../../../lib';


const classes = createStyle({
  base: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
  },
  column1: {
    height: '100vh',
    borderRight: 'thin solid gray',
  },
  divider: {
    width: 8,
    marginLeft: -4,
    height: '100vh',
    marginRight: -4,
    cursor: 'e-resize',
    transition: 'all .2s',
    '&:active': {
      backgroundColor: 'green',
    }
  },
  column2: {
    flex: 1,
    height: '100vh',
  },
  column3: {
    height: '100vh',
    borderLeft: 'thin solid gray',
  },
});


export const ThreeColumns = createComponent(([child1, child2, child3]: [HTMLElement, HTMLElement, HTMLElement]) => {
  const container = createEl('div');
  container.classList.add(classes.base);

  const column1 = createEl('div');
  column1.classList.add(classes.column1);
  column1.appendChild(child1);

  let left = 40;
  const divider1 = createEl('div');
  divider1.classList.add(classes.divider);
  column1.style.width = `${left}px`;
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
  column2.appendChild(child2);

  const column3 = createEl('div');
  column3.classList.add(classes.column3);
  column3.style.width = `${left}px`;
  column3.appendChild(child3);

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

  return [{}, container];
});
