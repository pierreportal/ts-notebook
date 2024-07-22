import React from "react";
import { Column, Row } from "./uikit";
import { Topbar } from "./components/Topbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <Column>
      <Topbar />
      <Row>
        <Sidebar />
        <MainContent />
      </Row>
      <Footer />
    </Column>
  );
}
