"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Bookmark } from "lucide-react";
import { useState } from "react";

interface MovieCardProps {
  id: string | number;
  title: string;
  posterPath: string;
  releaseDate: string;
  type: "movie" | "tv";
  rating?: number;
  genres?: string[];
  quality?: string;
}

export function MovieCard({
  id,
  title,
  posterPath,
  releaseDate,
  type,
  rating,
  genres = [],
  quality,
}: MovieCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getRatingColor = (rating: number) => {
    if (rating >= 7.5) return "bg-emerald-700 text-white";
    if (rating >= 6) return "bg-amber-600 text-white";
    if (rating >= 4) return "bg-orange-700 text-white";
    return "bg-red-700 text-white";
  };

  // Extract year, month, day without relying on locale-specific formatting
  const date = new Date(releaseDate);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear().toString().substring(2); // Get last 2 digits
  const formattedDate = `${month} ${day}, ${year}`;

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    // In a real app, you would save this to your backend
  };

  return (
    <div className="movie-card group">
      <Link href={`/${type}/${id}`} className="block relative aspect-[2/3]">
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

        {/* Quality Badge */}
        {quality && (
          <div className="absolute top-2 left-2 z-20">
            <Badge variant="secondary" className="bg-black/70 text-xs font-medium">
              {quality}
            </Badge>
          </div>
        )}

        {/* Bookmark Button */}
        <button
          onClick={toggleBookmark}
          className="absolute top-2 right-2 z-20 p-1 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        >
          <Bookmark
            size={16}
            className={isBookmarked ? "fill-white text-white" : "text-white"}
          />
        </button>

        {/* Poster Image */}
        <Image
          src={posterPath}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Rating Circle */}
        {rating !== undefined && (
          <div className="absolute bottom-2 left-2 z-20">
            <div className={`rating-circle ${getRatingColor(rating)}`}>
              {rating.toFixed(1)}
            </div>
          </div>
        )}
      </Link>

      <div className="mt-2 px-1">
        {/* Genres */}
        {genres.length > 0 && (
          <div className="mb-1">
            {genres.slice(0, 2).map((genre) => (
              <span key={genre} className="genre-tag">
                {genre}
              </span>
            ))}
          </div>
        )}

        {/* Title and Date */}
        <h3 className="font-medium text-sm truncate">{title}</h3>
        <p className="text-xs text-gray-400">{formattedDate} • {type === "movie" ? "Movie" : "TV"}</p>
      </div>
    </div>
  );
}
