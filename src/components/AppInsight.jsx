import React, { useEffect } from "react";

const AppInsightsScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.text = `
      !(function (cfg) {
        function e() {
          cfg.onInit && cfg.onInit(n);
        }
        var x, w, D, t, E, n, C = window,
          O = document,
          b = C.location,
          q = "script",
          I = "ingestionendpoint",
          L = "disableExceptionTracking",
          j = "ai.device.";
        "instrumentationKey"[x = "toLowerCase"](),
          w = "crossOrigin",
          D = "POST",
          t = "appInsightsSDK",
          E = cfg.name || "appInsights",
          (cfg.name || C[t]) && (C[t] = E),
          n = C[E] || function (g) {
            var f = !1,
              m = !1,
              h = {
                initialize: !0,
                queue: [],
                sv: "8",
                version: 2,
                config: g
              };
            function v(e, t) {
              var n = {},
                i = "Browser";

              function a(e) {
                e = "" + e;
                return 1 === e.length ? "0" + e : e;
              }
              return n[j + "id"] = i[x](),
                n[j + "type"] = i,
                n["ai.operation.name"] = b && b.pathname || "_unknown_",
                n["ai.internal.sdkVersion"] = "javascript:snippet_" + (h.sv || h.version), {
                  time: (i = new Date).getUTCFullYear() + "-" + a(1 + i.getUTCMonth()) + "-" + a(i.getUTCDate()) + "T" + a(i.getUTCHours()) + ":" + a(i.getUTCMinutes()) + ":" + a(i.getUTCSeconds()) + "." + (i.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z",
                  iKey: e,
                  name: "Microsoft.ApplicationInsights." + e.replace(/-/g, "") + "." + t,
                  sampleRate: 100,
                  tags: n,
                  data: {
                    baseData: {
                      ver: 2
                    }
                  },
                  ver: undefined,
                  seq: "1",
                  aiDataContract: undefined
                }
            }
            // Rest of the script logic
            return h;
          }(cfg.cfg), (C[E] = n).queue && 0 === n.queue.length ? (n.queue.push(e), n.trackPageView({})) : e();
      })({
        src: "https://js.monitor.azure.com/scripts/b/ai.3.gbl.min.js",
        crossOrigin: "anonymous",
        cfg: {
          connectionString: "InstrumentationKey=b7718f6f-691f-4018-99ff-941eb264376b;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=9ab347f0-9f15-4d02-94dc-2c504419ca52"
        }
      });
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default AppInsightsScript;
