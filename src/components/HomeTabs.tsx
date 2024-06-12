"use client";

import React, { useState } from "react";

export default function HomeTabs() {
  const [tab, setTab] = useState("all");
  return (
    <div className="py-20 flex items-center">
      <div
        className="capitalize px-4 font-bold border-b py-3 cursor-pointer"
        style={{
          color: tab === "all" ? "#ff3b2e" : "#616D8B",
        }}
        onClick={() => setTab("all")}
      >
        All Best
      </div>
      <div
        className="capitalize px-4 font-bold border-b py-3 cursor-pointer"
        style={{
          color: tab === "high" ? "#ff3b2e" : "#616D8B",
        }}
        onClick={() => setTab("high")}
      >
        High Rollers
      </div>
    </div>
  );
}
