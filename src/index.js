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
    connectionString: 'InstrumentationKey=b7718f6f-691f-4018-99ff-941eb264376b;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=9ab347f0-9f15-4d02-94dc-2c504419ca52',
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  }
});

appInsights.loadAppInsights();
appInsights.trackPageView();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals();
