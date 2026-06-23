export type WorkGalleryItemProps = {
  imageUrl: string;
  imageAlt: string;
};

export const WorkGalleryItem = (props: WorkGalleryItemProps) => {
  return (
    <figure className="w-full h-full overflow-hidden rounded-[18px] bg-black">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="w-full h-full object-contain"
      />
    </figure>
  );
};
