"use client";
import { useEffect } from "react";

export const useWidgetSdk = () => {
  useEffect(() => {
    console.log(window);

    // Check to ensure the code only runs on the client side
    if (typeof window !== "undefined") {
      // Prevent multiple script insertions
      if (
        !document.querySelector(
          "script[src='https://widget.getwhelp.com/app.js']"
        )
      ) {
        const libraryEl = document.createElement("script");
        libraryEl.src = "https://widget.getwhelp.com/app.js";

        libraryEl.onload = () => {
          const initEl = document.createElement("script");
          initEl.text = `
            Whelp("init", {
              app_id: "ddaa4869af1be6a5e5acfa2a8271692d",
              viewportSetupOff:true
            });
          `;
          document.body.appendChild(initEl);
        };

        document.body.appendChild(libraryEl);

        // Cleanup function to remove scripts on unmount
        return () => {
          document.body.removeChild(libraryEl);
          const initEl = document.querySelector("script[data-widget-init]");
          if (initEl) document.body.removeChild(initEl);
        };
      }
    }
  }, []);
};
