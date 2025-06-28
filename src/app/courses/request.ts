import axiosInstance from "@/lib/axios-instance";

const APPEND_TENENT_ID = process.env.NEXT_PUBLIC_APPEND_TENENT_ID;

export type CourseType = {
  handle: string;
  meta_data: {
    price: 200;
    title: string;
    excerpt: string;
    thumbnail: number;
    meta_title: string;
    sale_price: number;
    cover_image: number;
    trailer_url: string;
    checkout_url: string;
    meta_keywords: string;
    course_syllabus: string[];
    meta_description: string;
    what_will_you_get: string[];
    who_should_take_this_course: string[];
  };
};

export default async function fetchCourses() {
  const params = new URLSearchParams({
    "filters[meta_format][documentId][$eq]": "e0m8hbd71k356gcermv2ohfz",
    "pagination[pageSize]": "50",
    "fields[0]": "meta_data",
    "fields[1]": "handle",
  });
  const { data } = await axiosInstance.get(
    `/meta-datas?${params.toString()}&${APPEND_TENENT_ID}`,
  );
  return data.data as CourseType[];
}
