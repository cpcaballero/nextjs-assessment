import React from "react";
import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPhotos } from "@/utils/getPhotos";
import PhotoAlbum from "@/components/PhotoAlbum";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const ACTUAL_REPLY_COUNT = 5000;
describe("Photo Album Image Components", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("renders correct number of images", async () => {
    const { getAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <PhotoAlbum />
      </QueryClientProvider>
    );
    await waitFor(() => {
      const renderedAlbum = getAllByTestId("photo-card");
      expect(renderedAlbum.length).toBe(ACTUAL_REPLY_COUNT);
    });
  });
});
