import React from "react";
import { css } from "@emotion/css";

const PageWrapper = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        min-width: 100vw;
        min-height: 100vh;
      `}>
      {children}
    </div>
  );
};

export default PageWrapper;
