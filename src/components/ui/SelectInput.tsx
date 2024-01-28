import React from "react";

type IProps = {
  data?: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
};

const SelectInput = ({ data, placeholder }: IProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  // Event handler for input blur
  const handleBlur = () => {
    setIsFocused(false);
  };

  const focusedValueCheck = React.useCallback(() => {
    if (isFocused || value !== "") {
      return true;
    }
    return false;
  }, [isFocused, value]);

  return (
    <div className="relative flex h-10 w-full rounded-md border border-secondary bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      <select
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none w-full"
      >
        {data?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {focusedValueCheck() && (
        <div className="absolute -top-[12px] left-4 bg-white">
          {placeholder}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
