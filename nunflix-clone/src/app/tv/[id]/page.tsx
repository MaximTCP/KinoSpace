import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentSectionScroll } from "@/components/sections/ContentSection";
import { Play, Download, Bookmark, Share2 } from "lucide-react";
import { trendingTVShows, topViewedTVShows } from "@/data/mock-data";

interface TVShowPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TVShowPageProps): Promise<Metadata> {
  // In a real app, you would fetch this data from an API
  const tvShow = [...trendingTVShows, ...topViewedTVShows].find(tv => tv.id.toString() === params.id);

  if (!tvShow) {
    return {
      title: "TV Show Not Found",
      description: "The requested TV show could not be found."
    };
  }

  return {
    title: `Watch ${tvShow.title} | Nunflix`,
    description: tvShow.description,
  };
}

export default function TVShowPage({ params }: TVShowPageProps) {
  // In a real app, you would fetch this data from an API
  const tvShow = [...trendingTVShows, ...topViewedTVShows].find(tv => tv.id.toString() === params.id);

  if (!tvShow) {
    return (
      <MainLayout>
        <div className="contentWrapper py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">TV Show Not Found</h1>
          <p className="mb-6">The TV show you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const formattedDate = new Date(tvShow.releaseDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const similarShows = [...trendingTVShows, ...topViewedTVShows]
    .filter(tv => tv.id !== tvShow.id)
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
            src={tvShow.backdropPath}
            alt={tvShow.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        <div className="contentWrapper relative z-10 pt-12 pb-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* TV Show Poster */}
            <div className="md:w-1/4">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={tvShow.posterPath}
                  alt={tvShow.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* TV Show Details */}
            <div className="md:w-3/4">
              <div className="flex flex-wrap gap-2 mb-2">
                {tvShow.genres.map((genre) => (
                  <Badge key={genre} variant="secondary" className="bg-secondary/60 text-xs">
                    {genre}
                  </Badge>
                ))}
                {tvShow.quality && (
                  <Badge variant="outline" className="text-xs">
                    {tvShow.quality}
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-3">{tvShow.title}</h1>

              <div className="text-gray-400 text-sm mb-3">
                {formattedDate} • TV Series
                {tvShow.seasons && ` • ${tvShow.seasons} Season${tvShow.seasons > 1 ? 's' : ''}`}
                {tvShow.episodes && ` • ${tvShow.episodes} Episode${tvShow.episodes > 1 ? 's' : ''}`}
              </div>

              {tvShow.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="rating-circle bg-emerald-700 text-white">{tvShow.rating.toFixed(1)}</div>
                  <span className="text-sm">User Score</span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Overview</h2>
                <p className="text-gray-300">{tvShow.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <Link href={`/watch/tv/${tvShow.id}`}>
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

      {/* Seasons Section */}
      <div className="contentWrapper py-10 border-t border-border/20">
        <h2 className="text-2xl font-bold mb-6">Seasons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: tvShow.seasons || 1 }).map((_, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden group">
              <div className="relative aspect-video bg-card/50">
                <Image
                  src={tvShow.posterPath}
                  alt={`Season ${i + 1}`}
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 px-4 py-2 rounded-md">
                    <span className="text-sm font-medium">Season {i + 1}</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-medium">Season {i + 1}</div>
                <div className="text-xs text-gray-400">{Math.floor(Math.random() * 15) + 5} Episodes • {2022 + i}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                <div className="text-sm font-medium">{tvShow.title} - Trailer {i + 1}</div>
                <div className="text-xs text-gray-400">Trailer</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="contentWrapper py-10 border-t border-border/20">
        <ContentSectionScroll
          title="You May Also Like"
          items={similarShows}
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
