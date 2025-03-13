import React from 'react';
import styles from './card.module.css';

interface CardProps {
  venueName: string;  // Must match what the test uses
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ venueName, imgSrc }) => {
  return (
    <div className={styles.card}>
      <img
        src={imgSrc}
        alt={venueName}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        {/* Render the text so the test can find it */}
        <h2>{venueName}</h2>
      </div>
    </div>
  );
};

export default Card;
