import type { AppType } from "next/dist/shared/lib/utils";
import { Worker } from "@react-pdf-viewer/core";

// Styles

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js">
      <Component {...pageProps} />{" "}
    </Worker>
  );
};

export default MyApp;
