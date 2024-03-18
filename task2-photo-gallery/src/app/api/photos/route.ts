import axios from "axios";

export const GET = async (request: Request) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const photos = response.data;
    return new Response(JSON.stringify(photos), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response("err", {
      status: 500,
      statusText: "Error fetching photos",
    });
  }
};
