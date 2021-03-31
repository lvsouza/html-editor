import { Container, Divider, FC, Input, Label, Render, Text, Title } from "ui-build";

import { getAllPossibleKeysByTagName } from "../../shared/services";
import { EditorLayout } from "../../shared/layouts";
import { EditablePanel } from "../../components";

export const EditorPage: FC = () => {
  const rightPanel = Container({
    classList: ['flex-column']
  });

  const handleOnSelectElement = (event: MouseEvent, target: HTMLElement) => {

    function getBreadCrumps(element: HTMLElement): string {
      if (element.parentElement) {
        return `${getBreadCrumps(element.parentElement)}/${element.tagName}`;
      } else {
        return `/${element.tagName}`;
      }
    }

    function getAttributes(element: HTMLElement) {
      const attrs = getAllPossibleKeysByTagName(element);
      return attrs.map(attribute => ({
        name: attribute.name,
        type: attribute.type,
        value: element.getAttribute(attribute.name)
      })).filter(attr => attr.type === 'number' || attr.type === 'string' || attr.type === 'bigint' || attr.type === 'boolean' || attr.type === 'undefined' || attr.type === 'object');
    }

    function GetPropertieItem(name: string, value: any, type: string, target: any): HTMLElement {
      const inputElement = Input({ classList: ['full-width'] });

      switch (type) {
        case 'boolean':
          inputElement.type = 'checkbox';
          inputElement.checked = value === 'true';

          inputElement.oninput = () => {
            if (inputElement.checked) {
              target.setAttribute(name, inputElement.checked)
            } else {
              target.removeAttribute(name);
            }
          }

          break;
        case 'bigint':
          inputElement.value = value;
          inputElement.type = 'number';

          inputElement.oninput = () => {
            if (inputElement.value !== '') {
              target.setAttribute(name, inputElement.value)
            } else {
              target.removeAttribute(name);
            }
          }

          break;
        case 'number':
          inputElement.value = value;
          inputElement.type = 'number';

          inputElement.oninput = () => {
            if (inputElement.value !== '') {
              target.setAttribute(name, inputElement.value)
            } else {
              target.removeAttribute(name);
            }
          }

          break;
        case 'string':
          inputElement.value = value;

          inputElement.oninput = () => {
            if (inputElement.value !== '') {
              target.setAttribute(name, inputElement.value)
            } else {
              target.removeAttribute(name);
            }
          }

          break;

        default: break;
      }

      return Container({
        classList: ['full-width'],
        children: Label({
          classList: ['margin-top-s', 'full-width'],
          children: [
            Container({
              classList: ['text-ellipsis', 'full-width'],
              children: Text({ text: name })
            }),
            inputElement,
          ]
        })
      });
    }

    rightPanel.textContent = '';

    Render(rightPanel, [
      Title({
        variant: 'h4',
        classList: ['font-weight-xg'],
        children: [
          Container({
            classList: ['margin-bottom-s', 'margin-top-s'],
            children: Text({ text: getBreadCrumps(target) }),
          }),
          Divider({ classList: ['margin-bottom-m'] }),
          Text({ text: target.tagName }),
        ],
      }),
      ...getAttributes(target).map(prop => GetPropertieItem(prop.name, prop.value, prop.type, target))
    ]);
  }

  return EditorLayout({
    left: [
      Text({ text: 'Meu teste 1' }),
      Text({ text: 'Meu teste 2' }),
    ],
    center: [
      EditablePanel({
        onSelectElement: handleOnSelectElement
      }),
    ],
    right: rightPanel,
  });
}