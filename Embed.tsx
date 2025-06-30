import * as React from 'react';
import { IEmbedProps } from './IEmbedProps';
import styles from './Embed.module.scss';

const Embed: React.FC<IEmbedProps> = ({ url }) => {
  if (!url) {
    return <div>Please configure an embed URL.</div>;
  }

  return (
    <div className={styles.embedContainer}>
      <iframe
        src={url}
        frameBorder="0"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups"
        style={{ width: '100%', height: '600px' }}
      />
    </div>
  );
};

export default Embed;
