import { ImageData } from "../../types/types";
import cn from "clsx";

export type PartnersProps = {
  header: string;
  imageData: Array<ImageData>;
};

export const Partners: React.FC<PartnersProps> = ({
  header,
  imageData,
  ...props
}: PartnersProps) => {
  const imageCount = imageData.length;

  return (
    <div className="flex flex-col gap-8 py-12" {...props}>
      <p className="text-center text-text-tertiary dark:text-dark-text-tertiary text-sm uppercase">
        {header}
      </p>
      <div
        className={cn(
          "flex flex-wrap",
          imageData.length > 4 ? "justify-start" : "justify-center"
        )}
      >
        {imageData.map((image) => {
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
