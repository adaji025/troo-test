import * as React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [seePw, setSeePw] = React.useState(true);

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
      <div
        className={cn(
          "relative flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        <input
          type={seePw ? "password" : "text"}
          className="outline-0 w-full"
          ref={ref}
          {...props}
          placeholder={!isFocused ? placeholder : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {seePw ? (
          <FaRegEyeSlash
            color="#025C56"
            className="absolute top-2.5 right-3"
            onClick={() => setSeePw(!seePw)}
          />
        ) : (
          <FaRegEye
            color="#025C56"
            className="absolute top-2.5 right-3"
            onClick={() => setSeePw(!seePw)}
          />
        )}

        {focusedValueCheck() && (
          <div className="absolute -top-[12px] left-4 bg-white">
            {placeholder}
          </div>
        )}
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
