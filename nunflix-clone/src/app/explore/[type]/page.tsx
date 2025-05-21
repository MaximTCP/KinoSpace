"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { MovieCard } from "@/components/ui/movie-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";
import { trendingMovies, trendingTVShows, topViewedMovies, topViewedTVShows, popularMovies } from "@/data/mock-data";

interface ExplorePageProps {
  params: {
    type: string;
  };
  searchParams: {
    genre?: string;
    year?: string;
    sort?: string;
  };
}

export default function ExplorePage({ params, searchParams }: ExplorePageProps) {
  const { type } = params;
  const { genre, year, sort } = searchParams;

  const [selectedGenres, setSelectedGenres] = useState<string[]>(genre ? [genre] : []);
  const [showFilters, setShowFilters] = useState(false);

  // Get content based on type
  const getContent = () => {
    switch (type) {
      case "movie":
        return [...trendingMovies, ...popularMovies];
      case "tv":
        return [...trendingTVShows, ...topViewedTVShows];
      case "trending":
        return [...trendingMovies.slice(0, 5), ...trendingTVShows.slice(0, 5)];
      case "toprated":
        return [...topViewedMovies.slice(0, 5), ...topViewedTVShows.slice(0, 5)];
      case "popular":
        return popularMovies;
      default:
        return [];
    }
  };

  const content = getContent();

  // Get title based on type
  const getTitle = () => {
    switch (type) {
      case "movie":
        return "Explore Movies";
      case "tv":
        return "Explore TV Shows";
      case "trending":
        return "Trending Content";
      case "toprated":
        return "Top Rated Content";
      case "popular":
        return "Popular Content";
      default:
        return "Explore";
    }
  };

  const title = getTitle();

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const movieGenres = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary",
    "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery",
    "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"
  ];

  // Filter content based on selected genres
  const filteredContent = selectedGenres.length > 0
    ? content.filter(item => item.genres.some(g => selectedGenres.includes(g)))
    : content;

  return (
    <MainLayout>
      <div className="contentWrapper py-8">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search in results..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
            </Button>

            <div className="flex gap-4">
              <Button
                variant={type === "movie" ? "default" : "outline"}
                className="min-w-24"
                onClick={() => {
                  window.location.href = "/explore/movie";
                }}
              >
                Movies
              </Button>
              <Button
                variant={type === "tv" ? "default" : "outline"}
                className="min-w-24"
                onClick={() => {
                  window.location.href = "/explore/tv";
                }}
              >
                TV Shows
              </Button>
            </div>
          </div>
        </div>

        {showFilters && (
          <div className="mb-8 p-6 bg-card rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Sort by</label>
                <Select defaultValue="popularity">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="release_date">Release Date</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <Select defaultValue="en">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="jp">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">From Year</label>
                <Select defaultValue="2020">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="From Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => 2025 - i).map(year => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">To Year</label>
                <Select defaultValue="2025">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="To Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => 2025 - i).map(year => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Genres (Click to include, Right-click to exclude)</label>
              <div className="flex flex-wrap gap-2">
                {movieGenres.map(genre => (
                  <Button
                    key={genre}
                    variant={selectedGenres.includes(genre) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleGenre(genre)}
                    className="text-xs"
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredContent.map(item => (
            <MovieCard
              key={`${item.type}-${item.id}`}
              id={item.id}
              title={item.title}
              posterPath={item.posterPath}
              releaseDate={item.releaseDate}
              type={item.type}
              rating={item.rating}
              genres={item.genres}
              quality={item.quality}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
