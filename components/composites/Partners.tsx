import { ImageData } from "../../types/types";
import { P } from "../P";
import cn from "clsx";

export type PartnersProps = {
  header: string;
  images: Array<ImageData>;
};

export const Partners: React.FC<PartnersProps> = ({
  header,
  images,
  ...props
}: PartnersProps) => {
  return (
    <div className="flex flex-col gap-8 py-12" {...props}>
      <P className="text-center uppercase" variant="tertiary" size="sm">
        {header}
      </P>
      <div
        className={cn(
          "flex flex-wrap",
          images.length > 4 ? "justify-start" : "justify-center"
        )}
      >
        {images.map((image) => {
          return (
            <div
              className="flex items-center justify-center w-1/4 py-6 px-4"
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                key={image.src}
                className="h-full max-h-8 w-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
