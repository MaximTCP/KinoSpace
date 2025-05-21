"use client";

import { useState } from "react";
import Link from "next/link";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { ContentSectionScroll } from "@/components/sections/ContentSection";
import { ArrowLeft, Settings, Users, Maximize, List, ChevronDown, Share2, Bookmark, Download } from "lucide-react";
import {
  trendingMovies,
  trendingTVShows,
  topViewedMovies,
  topViewedTVShows
} from "@/data/mock-data";

interface WatchPageProps {
  params: {
    type: "movie" | "tv";
    id: string;
  };
}

export default function WatchPage({ params }: WatchPageProps) {
  const { type, id } = params;
  const [selectedServer, setSelectedServer] = useState("VidJoy");

  // In a real app, you would fetch this data from an API
  const content =
    type === "movie"
      ? [...trendingMovies, ...topViewedMovies].find(m => m.id.toString() === id)
      : [...trendingTVShows, ...topViewedTVShows].find(tv => tv.id.toString() === id);

  if (!content) {
    return (
      <MainLayout>
        <div className="contentWrapper py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Content Not Found</h1>
          <p className="mb-6">The content you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const similarContent =
    type === "movie"
      ? [...trendingMovies, ...topViewedMovies]
          .filter(m => m.id !== content.id)
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
          }))
      : [...trendingTVShows, ...topViewedTVShows]
          .filter(tv => tv.id !== content.id)
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

  const servers = [
    { name: "Nunflix 4K", status: "active" },
    { name: "111Movies", status: "active" },
    { name: "VidJoy", status: "active", current: true },
    { name: "Videasy", status: "active" },
    { name: "VidFast", status: "active" },
    { name: "AutoEmbed Dub", status: "active" },
    { name: "MovieClub", status: "active" },
    { name: "Akwy TV (Arabic)", status: "active" }
  ];

  return (
    <MainLayout>
      <div className="bg-black text-white">
        <div className="contentWrapper">
          <div className="py-4 flex items-center justify-between">
            <Link href={`/${type}/${id}`} className="flex items-center gap-2 text-sm">
              <ArrowLeft size={18} />
              <span>Back</span>
            </Link>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-800">
                <Settings size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <Users size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <Maximize size={18} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative bg-black w-full aspect-video flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="mb-4 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
          </div>
          <p className="text-lg font-medium">FETCHING. PLEASE WAIT.</p>
        </div>
      </div>

      <div className="contentWrapper py-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{content.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </span>
                {new Date(content.releaseDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>

              <div className="flex items-center gap-1">
                <span className="w-4 h-4">
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                </span>
                {type === "movie" ? "1:50:00" : "45:00"}
              </div>
            </div>
            <p className="text-gray-300 mt-4 max-w-3xl">{content.description}</p>
          </div>

          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <Button className="gap-2" variant="outline" size="sm">
              <Download size={16} />
              <span>Download</span>
            </Button>
            <Button className="gap-2" variant="outline" size="sm">
              <Bookmark size={16} />
              <span>Add to Queue</span>
            </Button>
            <Button className="gap-2" variant="outline" size="sm">
              <Share2 size={16} />
              <span>Share</span>
            </Button>
          </div>
        </div>

        {/* Server Selection */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Available Servers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {servers.map((server) => (
              <button
                key={server.name}
                onClick={() => setSelectedServer(server.name)}
                className={`p-4 rounded-lg border flex items-center gap-3 transition-colors ${
                  selectedServer === server.name
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:border-gray-700"
                }`}
              >
                <div className="p-2 rounded-full bg-gray-800">
                  <Settings size={20} />
                </div>
                <div className="text-left">
                  <div className="font-medium">{server.name}</div>
                  {server.current && <div className="text-xs text-emerald-500">Currently Active</div>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Discussion Section */}
        <div className="mt-12 bg-card rounded-lg p-6">
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

        {/* Recommendations */}
        <div className="mt-12">
          <ContentSectionScroll
            title="Recommendations"
            items={similarContent}
          />
        </div>
      </div>
    </MainLayout>
  );
}
