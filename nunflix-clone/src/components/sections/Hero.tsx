"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Bookmark, Share2 } from "lucide-react";

interface HeroProps {
  id: string | number;
  title: string;
  backdropPath: string;
  description: string;
  releaseDate: string;
  genres: string[];
  type: "movie" | "tv";
  quality?: string;
}

export function Hero({
  id,
  title,
  backdropPath,
  description,
  releaseDate,
  genres,
  type,
  quality = "1080p",
}: HeroProps) {
  // Format date using ISO string to avoid hydration errors
  const date = new Date(releaseDate);
  // Use UTC to ensure consistency between server and client
  const year = date.getUTCFullYear();
  const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
  const day = date.getUTCDate();
  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Backdrop Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backdropPath}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="contentWrapper relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-2">
            {genres.slice(0, 2).map((genre) => (
              <Badge key={genre} variant="secondary" className="bg-secondary/60 text-xs">
                {genre}
              </Badge>
            ))}
            {quality && (
              <Badge variant="outline" className="text-xs">
                {quality}
              </Badge>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>

          <div className="text-gray-400 text-sm mb-4">
            {formattedDate} • {type === "movie" ? "Movie" : "TV Show"}
          </div>

          <p className="text-sm md:text-base text-gray-300 mb-6 line-clamp-3 md:line-clamp-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="gap-2">
              <Link href={`/watch/${type}/${id}`}>
                <Play size={18} />
                Watch Now
              </Link>
            </Button>

            <Button variant="outline" size="icon">
              <Download size={18} />
            </Button>

            <Button variant="outline" size="icon">
              <Bookmark size={18} />
            </Button>

            <Button variant="outline" size="icon">
              <Share2 size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
