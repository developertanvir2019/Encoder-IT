"use client";
import { useEffect, useState } from "react";
import TableFilter from "./ui/TableFilter";
import TableBody from "./ui/TableBody";

const MainTable = () => {
  const [reviewData, setReviewData] = useState([
    {
      id: 1,
      date: "2023-01-01",
      customerName: "John Doe",
      productName: "Iphone 12",
      ratting: 5,
      image: "/images/products/samsung3.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 2,
      date: "2023-02-15",
      customerName: "Jane Smith",
      productName: "Rolex xs",
      ratting: 5,
      image: "/images/products/watch2.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 3,
      date: "2023-03-10",
      customerName: "Bob Johnson",
      productName: "Iphone 13",
      ratting: 2.5,
      image: "/images/products/iphone-15.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 4,
      date: "2023-04-05",
      customerName: "Carlos Colman",
      productName: "Samsung J7",
      ratting: 4.3,
      image: "/images/products/samsung1.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 5,
      date: "2023-05-20",
      customerName: "Charlie Brown",
      productName: "Hp Elitebook",
      ratting: 5,
      image: "/images/products/laptop1.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 6,
      date: "2023-06-15",
      customerName: "Eva Davis",
      productName: "Curran y6",
      ratting: 4.6,
      image: "/images/products/watch1.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 7,
      date: "2023-03-10",
      customerName: "Tom Cruise",
      productName: "Titan v2",
      ratting: 4,
      image: "/images/products/watch2.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 8,
      date: "2023-04-05",
      customerName: "Alice Williams",
      productName: "Thikpad 21",
      ratting: 4.3,
      image: "/images/products/laptop2.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 9,
      date: "2023-05-20",
      customerName: "Charlie Brown",
      productName: "Iphone 16",
      ratting: 2.4,
      image: "/images/products/apple1.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 10,
      date: "2023-06-15",
      customerName: "Eva Davis",
      productName: "Lenovo i7",
      ratting: 4.3,
      image: "/images/products/laptop3.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 11,
      date: "2023-01-01",
      customerName: "Mr jack",
      productName: "Iphone 21",
      ratting: 5,
      image: "/images/products/apple2.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
    {
      id: 12,
      date: "2023-02-15",
      customerName: "Jane Smith",
      productName: "Curran t3",
      ratting: 3.6,
      image: "/images/products/watch2.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae tempora temporibus odio, cumque laudantium minus, eum ut, nostrum numquam exercitationem? Quam exercitationem, natus culpa dignissimos facere magnam. Molestias at adipisci distinctio et? Saepe!",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.razzakfashion.com/?paginate=5&search=Kiehn`)
      // /?paginate=5&search=Kiehn
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-md shadow-default">
        <TableFilter
          reviewData={reviewData}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <TableBody setData={setData} searchText={searchText} orderData={data} />
      </div>
    </>
  );
};

export default MainTable;
