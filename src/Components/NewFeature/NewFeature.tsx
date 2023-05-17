import React from 'react';
import styles from './NewFeature.module.css';

export const NewFeature: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>New Feature!</h2>
        <p>Drag&Drop Codes to ReOrder!!!</p>
      </div>
    </>
  );
};
