"use client";
import { useEffect } from "react";

export const useWidgetSdk = () => {
  useEffect(() => {
    const libraryEl = document.createElement("script");
    libraryEl.src = "https://widget.getwhelp.com/app.js";
    libraryEl.onload = () => {
      const initEl = document.createElement("script");
      initEl.append(`Whelp("init", {
        app_id: "ddaa4869af1be6a5e5acfa2a8271692d"
      });`);
      document.body.append(initEl);
    };
    document.body.append(libraryEl);
  }, []);
};
