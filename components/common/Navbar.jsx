import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-4 bg-indigo-600 sticky top-0 py-3 px-5">
      <Link
        className="px-3 py-3 text-white font-semibold cursor-pointer"
        href="/"
      >
        Home
      </Link>
      <Link
        className="px-3 py-3 text-white font-semibold cursor-pointer"
        href="/shirt"
      >
        T-Shirt
      </Link>
    </div>
  );
};

export default Navbar;
