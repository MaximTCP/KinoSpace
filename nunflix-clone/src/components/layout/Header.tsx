"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-background border-b border-border/40 sticky top-0 z-50">
      <div className="contentWrapper py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl md:text-2xl">
                <span className="text-red-500">NUN</span>FLIX
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="menu-items hidden md:flex">
          <li className="menu-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1">
                  <span>Movies</span>
                  <ChevronDown size={16} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover">
                <DropdownMenuItem>
                  <Link href="/explore/movie" className="w-full">
                    All Movies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/movie?genre=action" className="w-full">
                    Action
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/movie?genre=comedy" className="w-full">
                    Comedy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/movie?genre=horror" className="w-full">
                    Horror
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="menu-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1">
                  <span>Shows</span>
                  <ChevronDown size={16} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover">
                <DropdownMenuItem>
                  <Link href="/explore/tv" className="w-full">
                    All TV Shows
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/tv?genre=drama" className="w-full">
                    Drama
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/tv?genre=comedy" className="w-full">
                    Comedy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/tv?genre=documentary" className="w-full">
                    Documentary
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="menu-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1">
                  <span>Streaming</span>
                  <ChevronDown size={16} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover">
                <DropdownMenuItem>
                  <Link href="/explore/netflix" className="w-full">
                    Netflix
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/prime" className="w-full">
                    Amazon Prime
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/hulu" className="w-full">
                    Hulu
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/disney" className="w-full">
                    Disney+
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="menu-item">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1">
                  <span>Discover</span>
                  <ChevronDown size={16} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover">
                <DropdownMenuItem>
                  <Link href="/explore/popular" className="w-full">
                    Popular
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/toprated" className="w-full">
                    Top Rated
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/explore/trending" className="w-full">
                    Trending
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <span className="divider mx-2 text-gray-500">|</span>
          <li className="menu-item">
            <a href="https://discord.gg/CXVyfhgn26" target="_blank" rel="noopener noreferrer" title="Join Discord">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.4921C18.7873 3.80147 17.147 3.29265 15.4319 3.00177C15.4007 2.9956 15.3695 3.00546 15.3534 3.03487C15.1424 3.40879 14.9087 3.89958 14.7451 4.28438C12.9004 4.01346 11.0652 4.01346 9.25832 4.28438C9.09465 3.89338 8.85248 3.40879 8.64057 3.03487C8.62448 3.00639 8.59328 2.99653 8.56205 3.00177C6.84791 3.29172 5.20756 3.80054 3.67694 4.4921C3.66368 4.49827 3.65233 4.5075 3.64479 4.51972C0.533392 9.09612 -0.31895 13.5569 0.0991801 17.9657C0.101072 17.9893 0.11337 18.0121 0.130398 18.0275C2.18321 19.5333 4.17171 20.4337 6.12328 21.0258C6.15451 21.0353 6.18761 21.0244 6.20748 20.9979C6.66913 20.3435 7.08064 19.6566 7.43348 18.9379C7.4543 18.8943 7.43442 18.8431 7.39186 18.8262C6.73913 18.583 6.1176 18.2872 5.51973 17.9533C5.47244 17.9256 5.46865 17.8559 5.51216 17.8236C5.63797 17.7283 5.76382 17.6285 5.88396 17.5275C5.90569 17.5091 5.93598 17.5056 5.96153 17.5172C9.88928 19.3332 14.1415 19.3332 18.023 17.5172C18.0486 17.5046 18.0789 17.5082 18.1015 17.5265C18.2216 17.6285 18.3475 17.7283 18.4742 17.8236C18.5177 17.8559 18.5148 17.9256 18.4675 17.9533C17.8696 18.2937 17.2481 18.583 16.5945 18.8252C16.5519 18.8422 16.533 18.8943 16.5538 18.9379C16.9138 19.6556 17.3253 20.3425 17.7779 20.9969C17.7969 21.0244 17.83 21.0353 17.8612 21.0258C19.8223 20.4337 21.8108 19.5333 23.8636 18.0275C23.8816 18.0121 23.893 17.9903 23.8949 17.9667C24.3942 12.9242 23.0408 8.50358 20.3482 4.52066C20.3416 4.5075 20.3303 4.49827 20.317 4.4921ZM8.02002 15.2778C6.8375 15.2778 5.86313 14.1883 5.86313 12.8705C5.86313 11.5527 6.8186 10.4632 8.02002 10.4632C9.23087 10.4632 10.1958 11.5617 10.1769 12.8705C10.1769 14.1883 9.22141 15.2778 8.02002 15.2778ZM15.9947 15.2778C14.8123 15.2778 13.8379 14.1883 13.8379 12.8705C13.8379 11.5527 14.7933 10.4632 15.9947 10.4632C17.2056 10.4632 18.1705 11.5617 18.1516 12.8705C18.1516 14.1883 17.2056 15.2778 15.9947 15.2778Z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li className="menu-item">
            <button aria-label="Search" className="flex items-center">
              <Search size={22} />
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Login
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="block md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/40 py-4">
          <div className="contentWrapper">
            <ul className="space-y-4">
              <li>
                <Link href="/explore/movie" className="block py-2">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/explore/tv" className="block py-2">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/streaming" className="block py-2">
                  Streaming
                </Link>
              </li>
              <li>
                <Link href="/discover" className="block py-2">
                  Discover
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <a href="https://discord.gg/CXVyfhgn26" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.4921C18.7873 3.80147 17.147 3.29265 15.4319 3.00177C15.4007 2.9956 15.3695 3.00546 15.3534 3.03487C15.1424 3.40879 14.9087 3.89958 14.7451 4.28438C12.9004 4.01346 11.0652 4.01346 9.25832 4.28438C9.09465 3.89338 8.85248 3.40879 8.64057 3.03487C8.62448 3.00639 8.59328 2.99653 8.56205 3.00177C6.84791 3.29172 5.20756 3.80054 3.67694 4.4921C3.66368 4.49827 3.65233 4.5075 3.64479 4.51972C0.533392 9.09612 -0.31895 13.5569 0.0991801 17.9657C0.101072 17.9893 0.11337 18.0121 0.130398 18.0275C2.18321 19.5333 4.17171 20.4337 6.12328 21.0258C6.15451 21.0353 6.18761 21.0244 6.20748 20.9979C6.66913 20.3435 7.08064 19.6566 7.43348 18.9379C7.4543 18.8943 7.43442 18.8431 7.39186 18.8262C6.73913 18.583 6.1176 18.2872 5.51973 17.9533C5.47244 17.9256 5.46865 17.8559 5.51216 17.8236C5.63797 17.7283 5.76382 17.6285 5.88396 17.5275C5.90569 17.5091 5.93598 17.5056 5.96153 17.5172C9.88928 19.3332 14.1415 19.3332 18.023 17.5172C18.0486 17.5046 18.0789 17.5082 18.1015 17.5265C18.2216 17.6285 18.3475 17.7283 18.4742 17.8236C18.5177 17.8559 18.5148 17.9256 18.4675 17.9533C17.8696 18.2937 17.2481 18.583 16.5945 18.8252C16.5519 18.8422 16.533 18.8943 16.5538 18.9379C16.9138 19.6556 17.3253 20.3425 17.7779 20.9969C17.7969 21.0244 17.83 21.0353 17.8612 21.0258C19.8223 20.4337 21.8108 19.5333 23.8636 18.0275C23.8816 18.0121 23.893 17.9903 23.8949 17.9667C24.3942 12.9242 23.0408 8.50358 20.3482 4.52066C20.3416 4.5075 20.3303 4.49827 20.317 4.4921ZM8.02002 15.2778C6.8375 15.2778 5.86313 14.1883 5.86313 12.8705C5.86313 11.5527 6.8186 10.4632 8.02002 10.4632C9.23087 10.4632 10.1958 11.5617 10.1769 12.8705C10.1769 14.1883 9.22141 15.2778 8.02002 15.2778ZM15.9947 15.2778C14.8123 15.2778 13.8379 14.1883 13.8379 12.8705C13.8379 11.5527 14.7933 10.4632 15.9947 10.4632C17.2056 10.4632 18.1705 11.5617 18.1516 12.8705C18.1516 14.1883 17.2056 15.2778 15.9947 15.2778Z" fill="currentColor"/>
                    </svg>
                    Join Discord
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Search size={20} />
                  <span>Search</span>
                </div>
              </li>
              <li>
                <Button className="w-full">Login</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
