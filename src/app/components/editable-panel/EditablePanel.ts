import { FC, Container, IFrame, Button, Input, Text } from "ui-build";

import { ElementTag } from "./../element-tag/ElementTag";


interface EditablePanelProps {
  children?: (iframeDocument: HTMLDocument) => Node | Node[];
  onSelectElement?: (event: MouseEvent, target: HTMLElement) => void;
}
export const EditablePanel: FC<EditablePanelProps, HTMLIFrameElement> = ({ onSelectElement, children }) => {

  const editablePanel = IFrame({
    onLoad,
    classList: ['margin-g', 'full-width', 'border-thin', 'border-radius-soft'],
    children: [
      Button({
        children: Text({ text: 'Button' })
      }),
      Button({
        children: Text({ text: 'Button' })
      }),
      Button({
        children: Text({ text: 'Button' })
      }),
      Button({
        children: Text({ text: 'Button' })
      }),
      Button({
        children: Text({ text: 'Button' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),
      Container({
        children: Text({ text: 'Teste' })
      }),

      Input({ type: 'checkbox' }),
      Input({ type: 'color' }),
      Input({ type: 'radio' }),
      Input({ type: 'range' }),
      Input({ type: 'date' }),
      Input({ type: 'time' }),

      Input({ type: 'number' }),
      Input(),
      Text({ text: 'Teste de texto' }),
      Text({ text: 'Teste de texto' }),
      Text({ text: 'Teste de texto' }),
      Text({ text: 'Teste de texto' }),
      Text({ text: 'Teste de texto' }),
      ...(Array.isArray(children) ? children : [children]),
    ]
  });

  function onLoad() {
    if (!editablePanel.contentDocument) return;

    const hoverTag = ElementTag(editablePanel.contentDocument.body, { bgColor: '#6868ff' });
    const cliquedTag = ElementTag(editablePanel.contentDocument.body, { bgColor: 'blue' });

    editablePanel.contentDocument.onmouseover = (event: any) => {
      if (!event.target) return;

      event.target.style.outline = 'thin solid #5858ff';
      hoverTag?.showTag(event.target.offsetLeft, event.target.offsetTop - 14, event.target.tagName);
    };

    editablePanel.contentDocument.onmouseout = (event: any) => {
      if (!event.target.dataset.focused || event.target.dataset.focused !== 'true') {
        event.target.style.outline = 'thin solid transparent';
      }

      hoverTag?.hideTag();
    };

    editablePanel.contentDocument.onmousedown = (event: any) => {
      if (!editablePanel.contentDocument) return;
      event.preventDefault();

      editablePanel.contentDocument.querySelectorAll(`[data-focused=true]`).forEach(el => {
        el.setAttribute('data-focused', 'false');
        (el as any).style.outline = 'thin solid transparent';
      });

      event.target.setAttribute('data-focused', 'true');

      event.target.style.outline = 'thin solid blue';
      cliquedTag?.showTag(event.target.offsetLeft, event.target.offsetTop - 14, event.target.tagName);

      // Call a external logic
      onSelectElement && onSelectElement(event, event.target);
    };
  }

  return editablePanel;
}
