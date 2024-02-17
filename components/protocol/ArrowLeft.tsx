import { Message } from "./Message";

type Props = {
  children: string;
};

export const ArrowLeft: React.FC<Props> = ({ children }) => {
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
          <line x1="5" y1="5" x2="100" y2="5" stroke="black" strokeWidth="2" />
          <polygon points="5,0 0,5 5,10" fill="black" />
        </svg>
      </div>
    </div>
  );
};
