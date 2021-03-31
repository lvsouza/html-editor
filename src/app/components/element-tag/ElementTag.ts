import { Container } from "ui-build";
import { Properties } from "csstype";

interface ElementTagProps {
  bgColor?: string;
}

export function ElementTag(target: HTMLElement | null, props?: ElementTagProps) {
  const tagType = Container({
    classList: [],
  });

  const tagCss: Properties<string | number> = {
    backgroundColor: props?.bgColor || 'blue',
    fontFamily: 'sans-serif',
    pointerEvents: 'none',
    position: 'absolute',
    alignItems: 'center',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'default',
    minWidth: '32px',
    fontSize: '12px',
    display: 'none',
    color: 'white',
    left: '0px',
    top: '0px',

    paddingRight: '2px',
    paddingLeft: '2px',
    height: '16px',
  }

  Object.assign(tagType.style, tagCss);


  function showTag(x: number, y: number, text: string) {
    if (!target) return;;

    target.appendChild(tagType);
    tagType.style.display = 'flex';
    tagType.style.left = x + 'px';
    tagType.style.top = y + 'px';
    tagType.textContent = text;
  }

  function hideTag() {
    if (!target) return;

    try {
      target.removeChild(tagType);
    } catch (error) { }
  }

  return {
    tagType,
    showTag,
    hideTag,
  }
}
