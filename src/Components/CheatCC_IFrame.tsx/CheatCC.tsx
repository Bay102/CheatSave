import React from 'react';
import styles from './CheatCC.module.css';

export const CheatCC: React.FC = () => {
  return (
    <>
      <iframe className={styles.cheatCC_Iframe} src="https://www.supercheats.com/cheats.htm" />
    </>
  );
};
