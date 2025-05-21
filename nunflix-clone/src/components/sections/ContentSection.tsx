"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MovieCard } from "@/components/ui/movie-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ContentItem {
  id: string | number;
  title: string;
  posterPath: string;
  releaseDate: string;
  type: "movie" | "tv";
  rating?: number;
  genres?: string[];
  quality?: string;
}

interface ContentSectionProps {
  title: string;
  viewAllUrl?: string;
  items: ContentItem[];
  type?: "day" | "week" | "movies" | "tv-shows";
}

export function ContentSection({ title, viewAllUrl, items, type }: ContentSectionProps) {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          {type && (
            <div className="hidden md:flex items-center gap-2 ml-4">
              <Button
                variant="secondary"
                size="sm"
                className="px-2 py-1 h-7 text-xs rounded-lg"
              >
                Day
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-2 py-1 h-7 text-xs rounded-lg"
              >
                Week
              </Button>
            </div>
          )}
        </div>

        {viewAllUrl && (
          <Link
            href={viewAllUrl}
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            See all <ChevronRight size={16} />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {items.map((item) => (
          <MovieCard key={`${item.type}-${item.id}`} {...item} />
        ))}
      </div>
    </section>
  );
}

export function ContentSectionScroll({ title, viewAllUrl, items, type }: ContentSectionProps) {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          {type && (
            <div className="hidden md:flex items-center gap-2 ml-4">
              <Button
                variant="secondary"
                size="sm"
                className="px-2 py-1 h-7 text-xs rounded-lg"
              >
                Day
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-2 py-1 h-7 text-xs rounded-lg"
              >
                Week
              </Button>
            </div>
          )}
        </div>

        {viewAllUrl && (
          <Link
            href={viewAllUrl}
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            See all <ChevronRight size={16} />
          </Link>
        )}
      </div>

      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex space-x-4 pb-4">
          {items.map((item) => (
            <div key={`${item.type}-${item.id}`} className="w-[180px] flex-shrink-0">
              <MovieCard {...item} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}
