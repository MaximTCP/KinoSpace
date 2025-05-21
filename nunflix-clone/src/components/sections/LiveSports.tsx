"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface SportEvent {
  id: string;
  teamA: string;
  teamB: string;
  sport: "football" | "tennis" | "basketball" | "hockey" | "cricket" | "other" | "baseball";
  time: string;
  isLive: boolean;
  imageUrl?: string;
}

interface LiveSportsProps {
  events: SportEvent[];
}

export function LiveSports({ events }: LiveSportsProps) {
  const getSportIcon = (sport: SportEvent["sport"]) => {
    switch (sport) {
      case "football":
        return "⚽";
      case "tennis":
        return "🎾";
      case "basketball":
        return "🏀";
      case "hockey":
        return "🏒";
      case "cricket":
        return "🏏";
      case "baseball":
        return "⚾";
      default:
        return "🎮";
    }
  };

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          Live Sports
          {events.some(event => event.isLive) && (
            <Badge variant="destructive" className="text-xs bg-red-600">LIVE</Badge>
          )}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/live/${event.id}`}
            className="relative bg-card rounded-md overflow-hidden group transition-transform hover:scale-105"
          >
            {/* Background Image or Color */}
            <div className="aspect-video bg-card relative">
              {event.imageUrl ? (
                <Image
                  src={event.imageUrl}
                  alt={`${event.teamA} vs ${event.teamB}`}
                  fill
                  className="object-cover opacity-50"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl">
                  {getSportIcon(event.sport)}
                </div>
              )}

              {/* Live Badge */}
              {event.isLive && (
                <div className="absolute top-2 left-2">
                  <Badge variant="destructive" className="text-xs bg-red-600">LIVE</Badge>
                </div>
              )}
            </div>

            {/* Event Details */}
            <div className="p-2">
              <div className="flex justify-between items-center gap-2 text-sm font-medium">
                <div className="truncate">{event.teamA}</div>
                <div className="text-gray-400">VS</div>
                <div className="truncate">{event.teamB}</div>
              </div>

              <div className="flex justify-between mt-2">
                <div className="text-xs text-gray-400">{event.sport}</div>
                <div className="text-xs text-gray-400">{event.time}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
