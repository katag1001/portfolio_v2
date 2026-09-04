import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BubbleBackground from "../components/BubbleBackground";
import { HeaderEyebrowProvider } from "../context/HeaderEyebrowContext";
import "../pages/pages.css";

export default function MainLayout() {
  return (
    <HeaderEyebrowProvider>
      <BubbleBackground numBubbles={22} minSize={12} maxSize={200} />
      <Header />
      <div className="page-container">
        <Outlet />
      </div>
    </HeaderEyebrowProvider>
  );
}
