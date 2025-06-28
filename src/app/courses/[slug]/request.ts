import axiosInstance from "@/lib/axios-instance";
import { type CourseType } from "../request";

const APPEND_TENENT_ID = process.env.NEXT_PUBLIC_APPEND_TENENT_ID;

export default async function fetchCourse(slug: string) {
  const params = new URLSearchParams({
    "filters[meta_format][documentId][$eq]": "e0m8hbd71k356gcermv2ohfz",
    "pagination[pageSize]": "1",
    "fields[0]": "meta_data",
    "fields[1]": "handle",
    "filters[handle][$eq]": slug,
  });
  const { data } = await axiosInstance.get(
    `/meta-datas?${params.toString()}&${APPEND_TENENT_ID}`,
  );
  if (data.data.length < 1) return null;
  return data.data[0] as CourseType;
}
