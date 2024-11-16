import React from "react";

import { Header } from "./Header";
import { Contenido } from "./Contenido";
import { Footer } from "./Footer";

export function AppInternos() {
  return (
    <>
      <Header />
        <Contenido />
      <Footer />
    </>
  );
}