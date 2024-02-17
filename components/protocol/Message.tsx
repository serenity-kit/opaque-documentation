import cn from "clsx";

type Props = {
  children: string;
};

export const Message: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <code
        className={cn(
          "block",
          "bg-gray-150 px-1.5 py-0.5 rounded text-gray-900 text-xs nx-break-words"
          // "dark:bg-gray-800/50 dark:text-gray-400"
        )}
        // always show code blocks in ltr
        dir="ltr"
      >
        {children}
      </code>
    </div>
  );
};
