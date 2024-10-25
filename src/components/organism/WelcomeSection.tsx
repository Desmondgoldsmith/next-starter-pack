import React from "react";
import { WelcomeMessage } from "../molecules/WelcomeMessage";

export const WelcomeSection = () => (
  <section className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    <WelcomeMessage />
  </section>
);
