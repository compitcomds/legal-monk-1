import axiosInstance from "./axios-instance";

export default async function fetchImageFromStrapi(
  imageId?: string | number | null,
) {
  if (!imageId) return { url: "", alternativeText: "" };
  const { data } = await axiosInstance.get(`/upload/files/${imageId}`);
  return data;
}
