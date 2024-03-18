"use client";
import { getPhotos } from "@/utils/getPhotos";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const PhotoAlbum = () => {
  const {
    data: photos,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["photos"], queryFn: getPhotos });
  return (
    <div data-testid="photo-album">
      <h1>Photo Gallery</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {photos?.map((photo) => (
            <div key={photo.id} data-testid="photo-card">
              <Image
                src={photo.thumbnailUrl}
                alt={photo.title}
                width={300}
                height={300}
                loading="lazy"
              />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoAlbum;
