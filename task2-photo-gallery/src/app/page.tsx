"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
const queryClient = new QueryClient();

const namedComponent = async <T, N extends keyof T>(
  modPromise: Promise<T>,
  exportName: N
) => {
  const mod = await modPromise;
  return mod[exportName];
};

const PhotoAlbumLazy = dynamic(() =>
  namedComponent(import("@/components/PhotoAlbum"), "default")
);

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <PhotoAlbumLazy />
        </div>
      </main>
    </QueryClientProvider>
  );
}
