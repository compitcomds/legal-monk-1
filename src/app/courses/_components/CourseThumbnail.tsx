"use client";
import fetchImageFromStrapi from "@/lib/fetchImage";
import { useEffect, useState } from "react";

export default function CourseThumbnail({
  imageId,
  className,
  fallbackAlternative,
}: {
  imageId: number;
  className?: string;
  fallbackAlternative?: string;
}) {
  const [image, setImage] = useState({
    url: "https://placehold.co/400x300?text=loading...",
    alternativeText: "Loading Image",
  });

  useEffect(() => {
    const loadImage = async () => {
      try {
        const i = await fetchImageFromStrapi(imageId);
        setImage(i);
      } catch {
        setImage({
          url: "https://placehold.co/400x300?text=Image+Not+Found",
          alternativeText: "",
        });
      }
    };

    loadImage();
  }, []);

  return (
    <img
      src={image.url}
      alt={image.alternativeText || fallbackAlternative}
      className={className}
    />
  );
}
