import cn from "clsx";

type Props = {
  children: string;
  participant: "client" | "server";
};

export const Codeblock: React.FC<Props> = ({ children, participant }) => {
  const lines = children.split("\n");

  return (
    <div className={cn("flex", participant === "client" ? "" : "justify-end")}>
      <code
        className={cn(
          "block w-10/12",
          "px-2 py-1 rounded-sm text-gray-900 text-xs nx-break-words border-t-2 border-b-2 shadow-sm",
          // "dark:bg-gray-800/50 dark:text-gray-400"
          participant === "client"
            ? " border-protocol-amber-400 bg-protocol-amber-100"
            : "border-protocol-emerald-400 bg-protocol-emerald-100"
        )}
        // always show code blocks in ltr
        dir="ltr"
      >
        {lines.map((line) => {
          return (
            <span key={line} className="block py-1">
              {line}
            </span>
          );
        })}
      </code>
    </div>
  );
};
