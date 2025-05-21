import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentSectionScroll } from "@/components/sections/ContentSection";
import { Play, Download, Bookmark, Share2 } from "lucide-react";
import { trendingMovies, popularMovies } from "@/data/mock-data";

interface MoviePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const movie = [...trendingMovies, ...popularMovies].find(m => m.id.toString() === params.id);

  if (!movie) {
    return {
      title: "Movie Not Found",
      description: "The requested movie could not be found."
    };
  }

  return {
    title: `Watch ${movie.title} | Nunflix`,
    description: movie.description,
  };
}

export default function MoviePage({ params }: MoviePageProps) {
  // In a real app, you would fetch this data from an API
  const movie = [...trendingMovies, ...popularMovies].find(m => m.id.toString() === params.id);

  if (!movie) {
    return (
      <MainLayout>
        <div className="contentWrapper py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Movie Not Found</h1>
          <p className="mb-6">The movie you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  // Format date without relying on locale-specific formatting
  const date = new Date(movie.releaseDate);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const similarMovies = [...trendingMovies, ...popularMovies]
    .filter(m => m.id !== movie.id)
    .slice(0, 10)
    .map(item => ({
      id: item.id,
      title: item.title,
      posterPath: item.posterPath,
      releaseDate: item.releaseDate,
      type: item.type,
      rating: item.rating,
      genres: item.genres,
      quality: item.quality
    }));

  return (
    <MainLayout>
      {/* Hero Section with Backdrop */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={movie.backdropPath}
            alt={movie.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        <div className="contentWrapper relative z-10 pt-12 pb-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Movie Poster */}
            <div className="md:w-1/4">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={movie.posterPath}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Movie Details */}
            <div className="md:w-3/4">
              <div className="flex flex-wrap gap-2 mb-2">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="secondary" className="bg-secondary/60 text-xs">
                    {genre}
                  </Badge>
                ))}
                {movie.quality && (
                  <Badge variant="outline" className="text-xs">
                    {movie.quality}
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-3">{movie.title}</h1>

              <div className="text-gray-400 text-sm mb-3">
                {formattedDate} • {movie.type === "movie" ? "Movie" : "TV Show"}
                {movie.duration && ` • ${movie.duration}`}
              </div>

              {movie.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="rating-circle bg-emerald-700 text-white">{movie.rating.toFixed(1)}</div>
                  <span className="text-sm">User Score</span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Overview</h2>
                <p className="text-gray-300">{movie.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <Link href={`/watch/movie/${movie.id}`}>
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
        </div>
      </div>

      {/* Collection Info */}
      {movie.id === "574475" && (
        <div className="contentWrapper py-10 border-t border-border/20">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://ext.same-assets.com/2541962238/2386550974.jpeg"
                alt="Final Destination Collection"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-6 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Part of the Final Destination Collection</h2>
              <p className="text-gray-300 mb-4 max-w-2xl">
                Includes Final Destination 3, Final Destination 2, Final Destination, The Final Destination, Final Destination 5, Final Destination Bloodlines
              </p>
              <Button variant="secondary">View the Collection</Button>
            </div>
          </div>
        </div>
      )}

      {/* Videos Section */}
      <div className="contentWrapper py-10 border-t border-border/20">
        <h2 className="text-2xl font-bold mb-6">Official Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="relative aspect-video bg-card rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play size={48} className="text-white/80 group-hover:text-white transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                <div className="text-sm font-medium">{movie.title} - Trailer {i + 1}</div>
                <div className="text-xs text-gray-400">Trailer</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="contentWrapper py-10 border-t border-border/20">
        <ContentSectionScroll
          title="Recommendations"
          items={similarMovies}
        />
      </div>

      {/* Discussion */}
      <div className="contentWrapper py-10 border-t border-border/20">
        <div className="bg-card rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            Discussion
            <span className="ml-2 bg-secondary/60 text-xs rounded-full px-2 py-0.5">0</span>
          </h2>
          <div className="text-center py-8">
            <h3 className="text-lg font-medium mb-2">Join the conversation</h3>
            <p className="text-gray-400 mb-4">Log in to read and share comments with other viewers.</p>
            <Button>Sign in to view comments</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
