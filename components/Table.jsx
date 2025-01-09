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
    fetch(
      `https://api.razzakfashion.com/?paginate=${perPage}&search=${searchText}&page=${currentPage}`
    )
      // /?paginate=5&search=Kiehn
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [searchText, perPage, currentPage]);
  console.log(23, perPage);

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
        />
      </div>
    </>
  );
};

export default MainTable;
