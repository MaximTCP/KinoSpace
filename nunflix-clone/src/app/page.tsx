import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/sections/Hero";
import { LiveSports } from "@/components/sections/LiveSports";
import { ContentSection, ContentSectionScroll } from "@/components/sections/ContentSection";
import {
  featuredContent,
  trendingMovies,
  trendingTVShows,
  topViewedMovies,
  topViewedTVShows,
  liveEvents,
  popularMovies
} from "@/data/mock-data";

export default function Home() {
  return (
    <MainLayout>
      <Hero
        id={featuredContent.id}
        title={featuredContent.title}
        backdropPath={featuredContent.backdropPath}
        description={featuredContent.description}
        releaseDate={featuredContent.releaseDate}
        genres={featuredContent.genres}
        type={featuredContent.type}
        quality={featuredContent.quality}
      />

      <div className="contentWrapper">
        <LiveSports events={liveEvents} />

        <ContentSectionScroll
          title="Trending ~"
          viewAllUrl="/explore/trending"
          items={trendingMovies.concat(trendingTVShows).slice(0, 15).map(item => ({
            id: item.id,
            title: item.title,
            posterPath: item.posterPath,
            releaseDate: item.releaseDate,
            type: item.type,
            rating: item.rating,
            genres: item.genres,
            quality: item.quality
          }))}
          type="day"
        />

        <ContentSectionScroll
          title="Top Viewed ~"
          viewAllUrl="/explore/top-viewed"
          items={topViewedMovies.concat(topViewedTVShows).slice(0, 15).map(item => ({
            id: item.id,
            title: item.title,
            posterPath: item.posterPath,
            releaseDate: item.releaseDate,
            type: item.type,
            rating: item.rating,
            genres: item.genres,
            quality: item.quality
          }))}
        />

        <ContentSectionScroll
          title="Top Rated ~"
          viewAllUrl="/explore/toprated"
          items={[...topViewedTVShows.slice(0, 2), ...topViewedMovies.slice(0, 2)].map(item => ({
            id: item.id,
            title: item.title,
            posterPath: item.posterPath,
            releaseDate: item.releaseDate,
            type: item.type,
            rating: item.rating,
            genres: item.genres,
            quality: item.quality
          }))}
        />

        <ContentSectionScroll
          title="Popular ~"
          viewAllUrl="/explore/popular"
          items={popularMovies.map(item => ({
            id: item.id,
            title: item.title,
            posterPath: item.posterPath,
            releaseDate: item.releaseDate,
            type: item.type,
            rating: item.rating,
            genres: item.genres,
            quality: item.quality
          }))}
        />
      </div>
    </MainLayout>
  );
}
