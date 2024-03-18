import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "@/app/page";

import commentsData from "@/data/comments.json";

describe("Home", () => {
  it("should have Search input bar", () => {
    const { getByTestId } = render(<Home />);
    const searchBar = getByTestId("search");

    expect(searchBar).toBeInTheDocument();
  });

  it("should have No search results by default", () => {
    const { container, getByTestId } = render(<Home />);
    const entryElements = container.querySelectorAll('[data-testid="entry"]');

    expect(entryElements).toHaveLength(0);
  });

  it("should display correct entries when user searches", async () => {
    const { container, getByTestId } = render(<Home />);
    const searchBar = getByTestId("search");
    const searchTestValue = "sunt";
    fireEvent.change(searchBar, { target: { value: searchTestValue } });

    await waitFor(() => {
      const entryElements = container.querySelectorAll('[data-testid="entry"]');
      const mockedFilterResults = commentsData.filter(
        (item) =>
          item.body.toLowerCase().includes(searchTestValue.toLowerCase()) ||
          item.title.toLowerCase().includes(searchTestValue.toLowerCase())
      );

      entryElements.forEach((element) => {
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(searchTestValue);
      });

      expect(entryElements).toHaveLength(mockedFilterResults.length);
    });
  });

  it("should display no search results if search is empty", async () => {
    const { container, getByTestId } = render(<Home />);
    const searchBar = getByTestId("search");
    const searchTestValue = "";
    fireEvent.change(searchBar, { target: { value: searchTestValue } });

    await waitFor(() => {
      const entryElements = container.querySelectorAll('[data-testid="entry"]');
      expect(entryElements).toHaveLength(0);
    });
  });
});
