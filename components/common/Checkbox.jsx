const CustomCheckbox = ({ id, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <label
        htmlFor={id}
        className={`${
          checked
            ? "bg-green-400 border-green-400"
            : "bg-transparent border-slate-500 "
        } cursor-pointer border-[.1rem]   select-none flex items-center justify-center w-[1.1rem] h-[1.1rem]  rounded-sm `}
      >
        {checked && (
          <svg
            className="w-auto h-auto text-white  "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </label>
    </div>
  );
};

export default CustomCheckbox;
