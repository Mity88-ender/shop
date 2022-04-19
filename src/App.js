import React, { useState } from "react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Shop } from "./Components/Shop";

export default function App() {
  return (
    <>
      <Header />
      <Shop />
      <Footer />
    </>
  );
}
