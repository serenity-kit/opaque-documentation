import { Message } from "./Message";

type Props = {
  children: string;
};

export const ArrowRight: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-80 border-l-2 py-8 border-l-protocol-amber-400 border-r-2 border-r-protocol-emerald-400">
        <Message>{children}</Message>
        <svg
          width="100%"
          height="15"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="5" x2="95" y2="5" stroke="black" strokeWidth="2" />
          <polygon points="95,0 100,5 95,10" fill="black" />
        </svg>
      </div>
    </div>
  );
};
