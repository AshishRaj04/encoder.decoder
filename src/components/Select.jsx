import React, { useId } from "react";

function Select({ options, label, className, onChange, ...props }, ref) {
  const id = useId();

  const handleChange = (e) => {
    const value = e.target.value === "true";
    if (onChange) {
      onChange({
        ...e,
        target: {
          ...e.target,
          value: value,
        },
      });
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
