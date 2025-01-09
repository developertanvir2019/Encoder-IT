"use client";
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import CustomCheckbox from "../common/Checkbox";
import TablePagination from "../common/Pagination";
import dayjs from "dayjs";

const TableBody = ({
  orderData,
  setPerPage,
  perPage,
  currentPage,
  setCurrentPage,
}) => {
  const [tableData, setTableData] = useState([]);
  const [selectItem, setSelectItem] = useState([]);
  const handleSelect = (data) => {
    const selectedData = selectItem.includes(data);
    if (selectedData) {
      const filteredData = selectItem.filter((item) => item !== data);
      setSelectItem(filteredData);
    } else {
      setSelectItem((prevData) => [...prevData, data]);
    }
  };

  useEffect(() => {
    setTableData(orderData?.data);
  }, [orderData?.data]);
  console.log(222, tableData);
  return (
    <>
      {!tableData?.length ? (
        <div className="flex justify-center font-semibold text-2xl py-20">
          <h1>No data found</h1>
        </div>
      ) : (
        <div className="w-full overflow-x-auto  rounded-md ">
          <table
            className="w-full text-center border-collapse rounded w-overflow-x-auto"
            cellSpacing="0"
          >
            <tbody>
              <tr
                className={`pb-5 h-[4.25rem] ${
                  selectItem?.length ? "bg-green-100" : "bg-slate-100"
                }  dark:bg-slate-700 text-slate-700 dark:text-slate-300`}
              >
                <th
                  scope="col"
                  className="h-16 px-6 text-sm font-medium stroke-slate-700  "
                >
                  {!selectItem?.length ? (
                    <CustomCheckbox
                      id="orderBalk"
                      checked={selectItem.length > 0}
                      onChange={() =>
                        setSelectItem(
                          selectItem.length === orderData?.length
                            ? []
                            : [...orderData]
                        )
                      }
                    />
                  ) : (
                    <FiMinus
                      className=" w-[1.1rem] cursor-pointer bg-green-400 h-[1.1rem] border-[0.1rem] border-green-400 rounded-sm text-xl font-semibold text-white"
                      onClick={() => setSelectItem([])}
                    />
                  )}
                </th>
                <th
                  scope="col"
                  className="h-16 px-6 w-32 text-sm font-medium stroke-slate-700 "
                >
                  {!selectItem?.length ? (
                    "ID"
                  ) : (
                    <h2 className="text-lg text-green-400">
                      {selectItem?.length} Select
                    </h2>
                  )}
                </th>
                <th
                  scope="col"
                  className="h-16 px-6 text-sm font-medium stroke-slate-700  "
                >
                  <p className={selectItem.length ? "invisible" : ""}>
                    First Name
                  </p>
                </th>
                <th
                  scope="col"
                  className="h-16 px-6 text-sm font-medium stroke-slate-700 "
                >
                  <p className={selectItem.length ? "invisible" : ""}>
                    Last Name
                  </p>
                </th>

                <th
                  scope="col"
                  className="h-16 w-44 px-6 text-sm font-medium stroke-slate-700  "
                >
                  <p className={selectItem.length ? "invisible" : ""}> Date</p>
                </th>
                <th
                  scope="col"
                  className="h-16 ml-6 px-6 text-sm font-semibold stroke-slate-700  "
                >
                  <p className={selectItem.length ? "invisible" : ""}>Email</p>
                </th>
              </tr>
              {tableData?.map((data, i) => {
                const formattedDate = dayjs(data?.createdAt).format(
                  "YYYY-MM-DD"
                );
                return (
                  <tr
                    key={i}
                    className="border-b border-slate-200 dark:border-slate-600 dark:bg-slate-800 text-slate-500 dark:text-slate-300"
                  >
                    <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 ">
                      <CustomCheckbox
                        id={data?.id}
                        checked={selectItem.includes(data)}
                        onChange={() => handleSelect(data)}
                      />
                    </td>
                    <td className="h-16  px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 ">
                      {data?.id}
                    </td>

                    <td className="h-16  px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 ">
                      {data?.name?.split(" ")?.[0]}
                    </td>
                    <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 ">
                      {data?.name?.split(" ")?.[1]}
                    </td>
                    <td className="h-16  px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 ">
                      {formattedDate}
                    </td>
                    <td className="h-16 flex justify-center items-center  px-6 text-center text-sm transition duration-300 border-slate-200 stroke-slate-50">
                      <p>{data?.email}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="py-3">
            <TablePagination
              setPerPage={setPerPage}
              totalItems={orderData?.total}
              itemsPerPage={perPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TableBody;
