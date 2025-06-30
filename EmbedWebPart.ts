import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Embed from './components/Embed';
import { IEmbedProps } from './components/IEmbedProps';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';

export interface IEmbedWebPartProps {
  embedUrl: string;
}

export default class EmbedWebPart extends BaseClientSideWebPart<IEmbedWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IEmbedProps> = React.createElement(
      Embed,
      { url: this.properties.embedUrl }
    );

    ReactDom.render(element, this.domElement);
  }

  protected getPropertyPaneConfiguration() {
    return {
      pages: [
        {
          header: { description: 'Embed any page via URL' },
          groups: [
            {
              groupName: 'Settings',
              groupFields: [
                PropertyPaneTextField('embedUrl', {
                  label: 'Embed URL'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
