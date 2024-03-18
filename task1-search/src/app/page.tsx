"use client";
import { useState } from "react";
import Search from "@/components/Search";
import mockData from "@/data/comments.json";
import Entry from "@/components/Entry";
import { isEmpty, trim } from "lodash";

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [searchResults, setSearchResults] = useState<IData[]>([]);

  const handleSearch = (value: string) => {
    if (isEmpty(trim(value))) setSearchResults([]);
    else
      setSearchResults(
        mockData.filter(
          (comment) =>
            comment.title.toLowerCase().includes(value.toLowerCase()) ||
            comment.body.toLowerCase().includes(value.toLowerCase())
        )
      );
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-between font-mono text-sm lg:flex">
        <Search onSearch={handleSearch} />
        {searchResults.length > 0 ? (
          <>
            <h2>Search Results: {searchResults.length} </h2>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              {searchResults.map((result) => (
                <li
                  className="pb-3 sm:pb-4"
                  key={result.id + result.userId}
                  data-testid="entry"
                >
                  <Entry title={result.title} body={result.body} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h4>No Search Results</h4>
        )}
      </div>
    </main>
  );
}
