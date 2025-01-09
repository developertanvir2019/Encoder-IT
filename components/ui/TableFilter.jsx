"use client";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClear } from "react-icons/ai";
const TableFilter = ({ searchText, setSearchText }) => {
  return (
    <div className="my-4 px-4 pt-5">
      <div className="lg:flex md:flex sm:block items-center gap-5 mt-4">
        <div className="relative my-6 flex-1 w-full">
          <input
            id="id-l16"
            type="text"
            name="id-l16"
            placeholder="Search by customer or product."
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
            className="relative bg-transparent w-full h-12 px-4 dark:bg-slate-800  transition-all border rounded outline-none peer border-slate-200 dark:border-slate-600 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <CiSearch className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-slate-400 peer-disabled:cursor-not-allowed" />
        </div>
        <div className="flex justify-start gap-3">
          <button
            onClick={() => {
              setSearchText("");
            }}
            className="bg-red-500 cursor-pointer text-white px-3  h-12 rounded-md font-semibold flex items-center gap-1"
          >
            <AiOutlineClear className="text-xl" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
