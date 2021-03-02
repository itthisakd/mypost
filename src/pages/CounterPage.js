import React from "react";
import ExtraCounter from "../components/ExtraCounter.js";
import Counter from "../components/Counter.js";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CounterPage() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-contents: center;
        margin: 50px;
      `}
    >
      <Counter />
      <br />
      <ExtraCounter />
    </div>
  );
}

export default CounterPage;
