import TShirtCustomizer from "@/components/TShirt";
import React from "react";

const TShirt = () => {
  return (
    <main className="relative bg-white dark:bg-slate-500  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-3">
      <div className="w-full max-w-7xl h-full min-h-screen flex items-center justify-center">
        <TShirtCustomizer />
      </div>
    </main>
  );
};

export default TShirt;
