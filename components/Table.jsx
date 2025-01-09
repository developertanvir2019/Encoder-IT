"use client";
import { useEffect, useState } from "react";
import TableFilter from "./ui/TableFilter";
import TableBody from "./ui/TableBody";

const MainTable = () => {
  const [searchText, setSearchText] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.razzakfashion.com/?paginate=${perPage}&search=${searchText}&page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchText, perPage, currentPage]);

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-md shadow-default">
        <TableFilter searchText={searchText} setSearchText={setSearchText} />
        <TableBody
          setPerPage={setPerPage}
          setData={setData}
          searchText={searchText}
          orderData={data}
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default MainTable;
