import cn from "../utils/cn";

const Button = ({ className, outline }) => {
  return (
    <button
      className={cn(
        "bg-gray-600 px-3 py-3 rounded-md",
        {
          "border border-red-800 bg-opacity-300": outline,
        },
        className
      )}
    >
      Merge tailwind Button
    </button>
  );
};
export default Button;
