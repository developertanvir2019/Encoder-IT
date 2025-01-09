import React, { useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const TablePagination = ({ brandData, setTableData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = brandData?.length;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
  useEffect(() => {
    setTableData(brandData?.slice(startIndex, endIndex));
  }, [brandData, endIndex, startIndex]);

  return (
    <div className="lg:flex justify-end mb-5">
      <div className="flex justify-center items-center px-6 py-2">
        <div className="flex items-center gap-3 mr-5 text-slate-600 dark:text-slate-300">
          <h3>Order per page</h3>
          <form className="w-13">
            <fieldset>
              <select
                style={{
                  outline: "none",
                  boxShadow: "none",
                  border: "none",
                }}
                className="dark:bg-slate-700 bg-slate-100 rounded-md"
                name="itemsPerPage"
                id="frm-items-per-page"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </fieldset>
          </form>
        </div>
        <div className="w-28 flex justify-center">
          <h3>
            {startIndex + 1}-{endIndex} of {totalItems}
          </h3>
        </div>
        <button
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md dark:bg-gray-900 dark:border-gray-800"
          onClick={handlePrevClick}
        >
          <MdArrowBackIos />
        </button>
        <button
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md dark:bg-gray-900 dark:border-gray-800"
          onClick={handleNextClick}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
