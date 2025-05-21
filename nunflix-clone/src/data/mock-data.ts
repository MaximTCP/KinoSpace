export interface Movie {
  id: string | number;
  title: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  description: string;
  genres: string[];
  rating: number;
  type: "movie";
  quality?: string;
  duration?: string;
}

export interface TVShow {
  id: string | number;
  title: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  description: string;
  genres: string[];
  rating: number;
  type: "tv";
  quality?: string;
  seasons?: number;
  episodes?: number;
}

export interface SportEvent {
  id: string;
  teamA: string;
  teamB: string;
  sport: "football" | "tennis" | "basketball" | "hockey" | "cricket" | "other" | "baseball";
  time: string;
  isLive: boolean;
  imageUrl?: string;
}

export const featuredContent: (Movie | TVShow) = {
  id: "574475",
  title: "Final Destination Bloodlines",
  posterPath: "https://ext.same-assets.com/2541962238/1715860318.jpeg",
  backdropPath: "https://ext.same-assets.com/40286142/1715860318.jpeg",
  releaseDate: "2025-05-09",
  description: "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
  genres: ["Horror", "Mystery"],
  rating: 7.1,
  type: "movie",
  quality: "1080p",
  duration: "1h 50m"
};

export const trendingMovies: Movie[] = [
  {
    id: "950387",
    title: "A Minecraft Movie",
    posterPath: "https://ext.same-assets.com/380209615/601560408.jpeg",
    backdropPath: "https://ext.same-assets.com/380209615/601560408.jpeg",
    releaseDate: "2025-03-31",
    description: "A young girl and her group of admittedly unusual friends must save their world from the malevolent Ender Dragon.",
    genres: ["Family", "Comedy"],
    rating: 8.5,
    type: "movie",
    quality: "1080P"
  },
  {
    id: "574475",
    title: "Final Destination Bloodlines",
    posterPath: "https://ext.same-assets.com/380209615/1715860318.jpeg",
    backdropPath: "https://ext.same-assets.com/380209615/1715860318.jpeg",
    releaseDate: "2025-05-09",
    description: "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
    genres: ["Horror", "Mystery"],
    rating: 7.1,
    type: "movie",
    quality: "1080p"
  },
  {
    id: "1480799",
    title: "The Great Escape",
    posterPath: "https://ext.same-assets.com/380209615/3511788571.jpeg",
    backdropPath: "https://ext.same-assets.com/380209615/3511788571.jpeg",
    releaseDate: "2023-05-26",
    description: "A group of prisoners plan an elaborate escape from a high-security prison.",
    genres: ["Action", "Thriller"],
    rating: 7.8,
    type: "movie",
    quality: "HD"
  },
  {
    id: "1197306",
    title: "A Working Man",
    posterPath: "https://ext.same-assets.com/380209615/3893108830.jpeg",
    backdropPath: "https://ext.same-assets.com/380209615/3893108830.jpeg",
    releaseDate: "2025-03-26",
    description: "A blue-collar worker struggles to provide for his family during hard economic times.",
    genres: ["Action", "Crime"],
    rating: 6.6,
    type: "movie",
    quality: "1080P"
  },
  {
    id: "447273",
    title: "Snow White",
    posterPath: "https://ext.same-assets.com/380209615/646360987.jpeg",
    backdropPath: "https://ext.same-assets.com/380209615/646360987.jpeg",
    releaseDate: "2025-03-12",
    description: "A young princess is pursued by her evil stepmother, but finds refuge with seven dwarfs.",
    genres: ["Family", "Fantasy"],
    rating: 4.3,
    type: "movie",
    quality: "1080P"
  },
  {
    id: "1241436",
    title: "Warfare",
    posterPath: "https://ext.same-assets.com/380209615/4283607253.jpeg",
    backdropPath: "https://ext.same-assets.com/380209615/4283607253.jpeg",
    releaseDate: "2025-04-09",
    description: "Soldiers face the brutal realities of modern warfare in a high-stakes mission.",
    genres: ["War", "Action"],
    rating: 7.2,
    type: "movie",
    quality: "4K"
  }
];

export const trendingTVShows: TVShow[] = [
  {
    id: "83867",
    title: "Andor",
    posterPath: "https://ext.same-assets.com/327726614/3959561553.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3959561553.jpeg",
    releaseDate: "2022-09-21",
    description: "Prequel series to Star Wars' 'Rogue One'. In an era filled with danger, deception and intrigue, Cassian will embark on the path that is destined to turn him into a Rebel hero.",
    genres: ["Sci-Fi & Fantasy", "Action & Adventure"],
    rating: 8.1,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 12
  },
  {
    id: "86831",
    title: "Love, Death & Robots",
    posterPath: "https://ext.same-assets.com/327726614/3275288904.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3275288904.jpeg",
    releaseDate: "2019-03-15",
    description: "Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David Fincher.",
    genres: ["Animation", "Sci-Fi & Fantasy"],
    rating: 8.2,
    type: "tv",
    quality: "HDTV",
    seasons: 4,
    episodes: 41
  },
  {
    id: "100088",
    title: "The Last of Us",
    posterPath: "https://ext.same-assets.com/327726614/3272116947.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3272116947.jpeg",
    releaseDate: "2023-01-15",
    description: "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
    genres: ["Drama"],
    rating: 8.7,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 9
  },
  {
    id: "227191",
    title: "Nine Puzzles",
    posterPath: "https://ext.same-assets.com/327726614/322207032.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/322207032.jpeg",
    releaseDate: "2025-05-21",
    description: "A brilliant detective tackles a series of seemingly unrelated cases that are connected by a mysterious pattern.",
    genres: ["Crime", "Mystery"],
    rating: 7.5,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 8
  },
  {
    id: "241554",
    title: "Murderbot",
    posterPath: "https://ext.same-assets.com/327726614/3760553615.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3760553615.jpeg",
    releaseDate: "2025-05-15",
    description: "A self-hacking android navigates life among humans while trying to understand its own existence.",
    genres: ["Comedy", "Drama"],
    rating: 8.3,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 10
  },
  {
    id: "247718",
    title: "MobLand",
    posterPath: "https://ext.same-assets.com/327726614/3927218253.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3927218253.jpeg",
    releaseDate: "2025-03-30",
    description: "A crime family's power is threatened by rival organizations and internal struggles.",
    genres: ["Crime", "Drama"],
    rating: 7.8,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 8
  }
];

export const topViewedMovies: Movie[] = [
  {
    id: "950387",
    title: "A Minecraft Movie",
    posterPath: "https://ext.same-assets.com/327726614/1573002659.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/1573002659.jpeg",
    releaseDate: "2025-03-31",
    description: "A young girl and her group of admittedly unusual friends must save their world from the malevolent Ender Dragon.",
    genres: ["Family", "Comedy"],
    rating: 8.5,
    type: "movie",
    quality: "Movie"
  },
  {
    id: "574475",
    title: "Final Destination Bloodlines",
    posterPath: "https://ext.same-assets.com/327726614/2328028258.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/2328028258.jpeg",
    releaseDate: "2025-05-09",
    description: "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
    genres: ["Horror", "Mystery"],
    rating: 7.1,
    type: "movie",
    quality: "Movie"
  },
  {
    id: "447273",
    title: "Snow White",
    posterPath: "https://ext.same-assets.com/327726614/1729729583.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/1729729583.jpeg",
    releaseDate: "2025-03-12",
    description: "A young princess is pursued by her evil stepmother, but finds refuge with seven dwarfs.",
    genres: ["Family", "Fantasy"],
    rating: 4.3,
    type: "movie",
    quality: "Movie"
  },
  {
    id: "1197306",
    title: "A Working Man",
    posterPath: "https://ext.same-assets.com/327726614/416511638.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/416511638.jpeg",
    releaseDate: "2025-03-26",
    description: "A blue-collar worker struggles to provide for his family during hard economic times.",
    genres: ["Action", "Crime"],
    rating: 6.6,
    type: "movie",
    quality: "Movie"
  }
];

export const topViewedTVShows: TVShow[] = [
  {
    id: "1396",
    title: "Breaking Bad",
    posterPath: "https://ext.same-assets.com/327726614/639136380.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/639136380.jpeg",
    releaseDate: "2008-01-20",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    genres: ["Drama", "Crime"],
    rating: 9.5,
    type: "tv",
    quality: "HDTV",
    seasons: 5,
    episodes: 62
  },
  {
    id: "219246",
    title: "When Life Gives You Tangerines",
    posterPath: "https://ext.same-assets.com/327726614/3291970631.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3291970631.jpeg",
    releaseDate: "2025-03-07",
    description: "A woman's life is turned upside down when she inherits a citrus farm from her estranged grandmother.",
    genres: ["Drama"],
    rating: 7.9,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 10
  },
  {
    id: "209867",
    title: "Frieren: Beyond Journey's End",
    posterPath: "https://ext.same-assets.com/327726614/3694274498.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3694274498.jpeg",
    releaseDate: "2023-09-29",
    description: "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her?",
    genres: ["Animation", "Action & Adventure"],
    rating: 9.0,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 28
  },
  {
    id: "94605",
    title: "Arcane",
    posterPath: "https://ext.same-assets.com/327726614/2640157059.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/2640157059.jpeg",
    releaseDate: "2021-11-06",
    description: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
    genres: ["Animation", "Sci-Fi & Fantasy"],
    rating: 9.2,
    type: "tv",
    quality: "HDTV",
    seasons: 1,
    episodes: 9
  }
];

export const liveEvents: SportEvent[] = [
  {
    id: "1",
    teamA: "Al Kholood",
    teamB: "Al Fayha",
    sport: "football",
    time: "16:25",
    isLive: true
  },
  {
    id: "2",
    teamA: "Geneva Centre Court: Marton Fucsovics",
    teamB: "Novak Djokovic",
    sport: "tennis",
    time: "16:15",
    isLive: true
  },
  {
    id: "3",
    teamA: "William & Mary",
    teamB: "Charleston",
    sport: "baseball",
    time: "16:00",
    isLive: true
  },
  {
    id: "4",
    teamA: "BC Wolves",
    teamB: "BC Maeikaiai",
    sport: "basketball",
    time: "16:00",
    isLive: true
  },
  {
    id: "5",
    teamA: "Chess.com Classic - Play-Offs Day 2",
    teamB: "",
    sport: "other",
    time: "15:15",
    isLive: true
  },
  {
    id: "6",
    teamA: "United Arab Emirates",
    teamB: "Bangladesh",
    sport: "cricket",
    time: "15:00",
    isLive: true
  }
];

export const popularMovies: Movie[] = [
  {
    id: "950387",
    title: "A Minecraft Movie",
    posterPath: "https://ext.same-assets.com/327726614/601560408.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/601560408.jpeg",
    releaseDate: "2025-03-31",
    description: "A young girl and her group of admittedly unusual friends must save their world from the malevolent Ender Dragon.",
    genres: ["Family", "Comedy"],
    rating: 8.5,
    type: "movie",
    quality: "1080P"
  },
  {
    id: "574475",
    title: "Final Destination Bloodlines",
    posterPath: "https://ext.same-assets.com/327726614/1715860318.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/1715860318.jpeg",
    releaseDate: "2025-05-09",
    description: "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
    genres: ["Horror", "Mystery"],
    rating: 7.1,
    type: "movie",
    quality: "1080p"
  },
  {
    id: "447273",
    title: "Snow White",
    posterPath: "https://ext.same-assets.com/327726614/646360987.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/646360987.jpeg",
    releaseDate: "2025-03-12",
    description: "A young princess is pursued by her evil stepmother, but finds refuge with seven dwarfs.",
    genres: ["Family", "Fantasy"],
    rating: 4.3,
    type: "movie",
    quality: "1080P"
  },
  {
    id: "1197306",
    title: "A Working Man",
    posterPath: "https://ext.same-assets.com/327726614/3893108830.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/3893108830.jpeg",
    releaseDate: "2025-03-26",
    description: "A blue-collar worker struggles to provide for his family during hard economic times.",
    genres: ["Action", "Crime"],
    rating: 6.6,
    type: "movie",
    quality: "1080P"
  },
  {
    id: "1480799",
    title: "The Great Escape",
    posterPath: "https://ext.same-assets.com/327726614/382712013.jpeg",
    backdropPath: "https://ext.same-assets.com/327726614/382712013.jpeg",
    releaseDate: "2023-05-26",
    description: "A group of prisoners plan an elaborate escape from a high-security prison.",
    genres: ["Action", "Thriller"],
    rating: 7.8,
    type: "movie",
    quality: "Movie"
  }
];
