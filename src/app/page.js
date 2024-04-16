import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
     <Navbar/>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
