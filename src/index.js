import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory({ basename: '' });
const reactPlugin = new ReactPlugin();

const appInsights = new ApplicationInsights({
  config: {
    connectionString: 'InstrumentationKey=a814f79a-52c5-4d54-807f-8165a01bd9ed;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=80709ac6-9cb8-4fb6-bdb0-cb3166297576',
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  } });

appInsights.loadAppInsights();
appInsights.trackPageView();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals();
