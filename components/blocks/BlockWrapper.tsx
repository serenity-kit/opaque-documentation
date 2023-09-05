import { ReactElement } from "react";

export type BlockWrapperProps = ReactElement & {};

export const BlockWrapper = ({ children, ...props }): BlockWrapperProps => {
  return (
    <div
      className="h-[50rem] max-w-[67.5rem] mx-auto bg-gray-300 flex items-center"
      {...props}
    >
      <div>{children}</div>
    </div>
  );
};
