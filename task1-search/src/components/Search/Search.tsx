"use client";

import React, {
  ChangeEvent,
  useState,
  useCallback,
  useEffect,
  memo,
} from "react";
import { debounce } from "lodash";

export interface ISearchProps {
  onSearch: (value: string) => void;
}
const DEBOUNCE_TIMEOUT = 500;

const Search: React.FC<ISearchProps> = memo(({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  }, []);

  const searchQuery = () => {
    onSearch(value);
  };

  const debounceHandleSearch = useCallback(
    debounce(searchQuery, DEBOUNCE_TIMEOUT),
    [value]
  );

  useEffect(() => {
    debounceHandleSearch();
    return debounceHandleSearch.cancel;
  }, [value, debounceHandleSearch]);

  return (
    <div className="relative w-full text-gray-600">
      <input
        data-testid="search"
        className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
        value={value}
        onChange={handleSearch}
      />
      <span className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
});

export default Search;
