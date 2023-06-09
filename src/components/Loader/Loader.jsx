import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#3f51b5"
        barColor="#ffff4d"
      />
    </div>
  );
};
