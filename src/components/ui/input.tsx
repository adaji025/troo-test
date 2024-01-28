import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }, ref) => {
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
      <div
        className={cn(
          "relative flex h-10 w-full rounded-md border border-secondary bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        <input
          type={type}
          className="outline-0 w-full"
          ref={ref}
          {...props}
          placeholder={!isFocused ? placeholder : ""}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={(e) => setValue(e.target.value)}
            />
        {focusedValueCheck() && (
          <div className="absolute -top-[12px] left-4 bg-white">
            {placeholder}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
