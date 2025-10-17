"use client"; // 👈 Required to make this run only on the client

import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear any existing scripts (for hot reload in dev)
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "OANDA:XAUUSD",
        "chartOnly": false,
        "width": "200%",
        "height": "65%",
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "isTransparent": false,
        "autosize": false,
        "noTimeScale": false
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[300px]">
      {" "}
      {/* 👈 Control size here with Tailwind */}
      <div
        className="tradingview-widget-container w-full h-full"
        ref={container}
      >
        <div className="tradingview-widget-container__widget" />
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/symbols/XAUUSD/?exchange=OANDA"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <span className="text-blue-500">XAUUSD quote</span>
          </a>
          <span className="text-gray-400"> by TradingView</span>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
