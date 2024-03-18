import axios from "axios";
import { Photo } from "@/types/photo";

export const getPhotos = async (): Promise<Photo[]> => {
  const { data } = await axios.get("/api/photos");
  return data;
};
