"use client"; // 👈 ensure this runs only on the client

import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    // Clean up old script if hot-reloaded
    if (!container.current) return;
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "lineWidth": 3,
        "lineType": 0,
        "chartType": "area",
        "fontColor": "rgb(106, 109, 120)",
        "gridLineColor": "rgba(242, 242, 242, 0.06)",
        "volumeUpColor": "rgba(34, 171, 148, 0.5)",
        "volumeDownColor": "rgba(247, 82, 95, 0.5)",
        "backgroundColor": "#0F0F0F",
        "widgetFontColor": "#DBDBDB",
        "upColor": "#22ab94",
        "downColor": "#f7525f",
        "borderUpColor": "#22ab94",
        "borderDownColor": "#f7525f",
        "wickUpColor": "#22ab94",
        "wickDownColor": "#f7525f",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en",
        "chartOnly": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "symbols": [["OANDA:XAUUSD|1M"]],
        "dateRanges": [
          "5d|5",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ],
        "fontSize": "10",
        "headerFontSize": "medium",
        "autosize": false,
        "lineColor": "rgba(49, 121, 245, 0.74)",
        "width": "200%",
        "height": "100%",
        "noTimeScale": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[600px]">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget" />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/symbols/XAUUSD/?exchange=OANDA"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <span className="text-blue-500">XAUUSD quote</span>
          </a>
          <span className="text-gray-400">&nbsp;by TradingView</span>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
