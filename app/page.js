import MainTable from "@/components/Table";
import TShirtCustomizer from "@/components/TShirt";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-slate-800  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-3">
      <div className="w-full max-w-7xl">
        <MainTable />
        <TShirtCustomizer />
      </div>
    </main>
  );
}
