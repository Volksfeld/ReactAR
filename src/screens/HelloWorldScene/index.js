import React from "react";

import { ViroConstants } from "react-viro";

import Presentational from "./presentational";
export default function HelloWorldScene() {
  const [text, setText] = React.useState("Initializing AR...");

  function onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    }
  }
  return React.createElement(Presentational, {
    onInitialized,
    text,
  });
}
