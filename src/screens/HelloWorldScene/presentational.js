// Dependencies
import React from "react";

// Styles
import styles from "./styles";

// Components
import { ViroARScene, ViroText, ViroARSceneNavigator } from "react-viro";

export default function Presentational({ onInitialized, text }) {
  function TextScene() {
    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARScene>
    );
  }
  return <ViroARSceneNavigator initialScene={{ scene: TextScene }} />;
}
