import type { NextPage } from "next";

import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import {
  highlightPlugin,
  RenderHighlightTargetProps,
} from "@react-pdf-viewer/highlight";

const Home: NextPage = () => {
  const renderHighlightTarget = (props: RenderHighlightTargetProps) => {
    console.log("Calling renderHighlightTarget");
    console.log(props.selectedText);
    return <></>;
  };

  const highlightPluginInstance = highlightPlugin({
    renderHighlightTarget: renderHighlightTarget,
  });

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Viewer
      fileUrl="/pdf-open-parameters.pdf"
      plugins={[defaultLayoutPluginInstance, highlightPluginInstance]}
      defaultScale={SpecialZoomLevel.ActualSize}
    />
  );
};

export default Home;
