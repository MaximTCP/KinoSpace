import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border/20">
      <div className="contentWrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="footer-section lg:col-span-2">
            <h2>About Us</h2>
            <p className="text-gray-400 mt-2">
              Experience limitless entertainment with Nunflix! Stream blockbuster movies and binge-worthy TV shows in seamless high-definition. Enjoy a user-friendly interface for your ultimate viewing pleasure.
            </p>
          </div>

          <div className="footer-section">
            <h2>Browse</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/explore/movie">Movies</Link></li>
              <li><Link href="/explore/tv">TV Shows</Link></li>
              <li><Link href="/explore/anime">Anime</Link></li>
              <li><Link href="/explore/popular">Popular</Link></li>
              <li><Link href="/explore/toprated">Top Rated</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>Genres</h2>
            <ul>
              <li><Link href="/explore/movie?genre=action">Action</Link></li>
              <li><Link href="/explore/movie?genre=comedy">Comedy</Link></li>
              <li><Link href="/explore/movie?genre=drama">Drama</Link></li>
              <li><Link href="/explore/movie?genre=horror">Horror</Link></li>
              <li><Link href="/explore/movie?genre=romance">Romance</Link></li>
              <li><Link href="/explore/movie?genre=documentary">Documentary</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>Platforms</h2>
            <ul>
              <li><Link href="/explore/netflix">Netflix</Link></li>
              <li><Link href="/explore/prime">Amazon Prime</Link></li>
              <li><Link href="/explore/hulu">Hulu</Link></li>
              <li><Link href="/explore/disney">Disney+</Link></li>
              <li><Link href="/explore/hbo">HBO</Link></li>
              <li><Link href="/explore/appletv">Apple TV+</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>Franchises</h2>
            <ul>
              <li><Link href="/explore/marvel">Marvel</Link></li>
              <li><Link href="/explore/dc">DC</Link></li>
              <li><Link href="/explore/cw">CW</Link></li>
              <li><Link href="/explore/anime">Anime</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>User</h2>
            <ul>
              <li><Link href="/profile">Profile</Link></li>
              <li><Link href="/bookmark">Bookmarks</Link></li>
              <li><Link href="/history">Watch History</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="https://discord.gg/wRJ4ZJkU" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Contact Us</Link>
            <Link href="https://www.themoviedb.org/terms-of-use" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
            <Link href="https://www.themoviedb.org/privacy-policy" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
            <Link href="/dmca" className="text-gray-400 hover:text-white transition-colors">DMCA</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://discord.gg/CXVyfhgn26" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.4921C18.7873 3.80147 17.147 3.29265 15.4319 3.00177C15.4007 2.9956 15.3695 3.00546 15.3534 3.03487C15.1424 3.40879 14.9087 3.89958 14.7451 4.28438C12.9004 4.01346 11.0652 4.01346 9.25832 4.28438C9.09465 3.89338 8.85248 3.40879 8.64057 3.03487C8.62448 3.00639 8.59328 2.99653 8.56205 3.00177C6.84791 3.29172 5.20756 3.80054 3.67694 4.4921C3.66368 4.49827 3.65233 4.5075 3.64479 4.51972C0.533392 9.09612 -0.31895 13.5569 0.0991801 17.9657C0.101072 17.9893 0.11337 18.0121 0.130398 18.0275C2.18321 19.5333 4.17171 20.4337 6.12328 21.0258C6.15451 21.0353 6.18761 21.0244 6.20748 20.9979C6.66913 20.3435 7.08064 19.6566 7.43348 18.9379C7.4543 18.8943 7.43442 18.8431 7.39186 18.8262C6.73913 18.583 6.1176 18.2872 5.51973 17.9533C5.47244 17.9256 5.46865 17.8559 5.51216 17.8236C5.63797 17.7283 5.76382 17.6285 5.88396 17.5275C5.90569 17.5091 5.93598 17.5056 5.96153 17.5172C9.88928 19.3332 14.1415 19.3332 18.023 17.5172C18.0486 17.5046 18.0789 17.5082 18.1015 17.5265C18.2216 17.6285 18.3475 17.7283 18.4742 17.8236C18.5177 17.8559 18.5148 17.9256 18.4675 17.9533C17.8696 18.2937 17.2481 18.583 16.5945 18.8252C16.5519 18.8422 16.533 18.8943 16.5538 18.9379C16.9138 19.6556 17.3253 20.3425 17.7779 20.9969C17.7969 21.0244 17.83 21.0353 17.8612 21.0258C19.8223 20.4337 21.8108 19.5333 23.8636 18.0275C23.8816 18.0121 23.893 17.9903 23.8949 17.9667C24.3942 12.9242 23.0408 8.50358 20.3482 4.52066C20.3416 4.5075 20.3303 4.49827 20.317 4.4921ZM8.02002 15.2778C6.8375 15.2778 5.86313 14.1883 5.86313 12.8705C5.86313 11.5527 6.8186 10.4632 8.02002 10.4632C9.23087 10.4632 10.1958 11.5617 10.1769 12.8705C10.1769 14.1883 9.22141 15.2778 8.02002 15.2778ZM15.9947 15.2778C14.8123 15.2778 13.8379 14.1883 13.8379 12.8705C13.8379 11.5527 14.7933 10.4632 15.9947 10.4632C17.2056 10.4632 18.1705 11.5617 18.1516 12.8705C18.1516 14.1883 17.2056 15.2778 15.9947 15.2778Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com/NunflixShows" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nun.flix" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linktr.ee/nunflix?subscribe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.92 2h6.17c.5 0 .92.42.92.92v6.17c0 .5-.42.91-.92.91H8.92c-.5 0-.92-.41-.92-.91V2.92c0-.5.42-.92.92-.92zm0 12h6.17c.5 0 .92.42.92.92v6.17c0 .5-.42.91-.92.91H8.92c-.5 0-.92-.41-.92-.91v-6.17c0-.5.42-.92.92-.92zM19.5 2h2.5c.5 0 1 .42 1 .92v2.5c0 .5-.42.91-1 .91h-2.5c-.5 0-1-.41-1-.91V2.92c0-.5.42-.92 1-.92zm0 12h2.5c.5 0 1 .42 1 .92v2.5c0 .5-.42.91-1 .91h-2.5c-.5 0-1-.41-1-.91v-2.5c0-.5.42-.92 1-.92zM2 2h2.5c.5 0 1 .42 1 .92v2.5c0 .5-.42.91-1 .91H2c-.5 0-1-.41-1-.91V2.92c0-.5.42-.92 1-.92zm0 12h2.5c.5 0 1 .42 1 .92v2.5c0 .5-.42.91-1 .91H2c-.5 0-1-.41-1-.91v-2.5c0-.5.42-.92 1-.92z" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-full px-4 py-1 text-sm">
              Change Language
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>© 2025 Nunflix. All rights reserved.</p>
          <div className="flex justify-center items-center mt-2">
            <svg width="20" height="8" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 0H22L27 5.5L22 11H5.5L0 5.5L5.5 0Z" fill="#032541"/>
              <path d="M5.5 0H22L27 5.5L22 11H5.5L0 5.5L5.5 0Z" fill="#032541"/>
              <path d="M5.5 0H22L27 5.5L22 11H5.5L0 5.5L5.5 0Z" fill="#032541"/>
              <path d="M5.5 0.5H21.75L26.5 5.5L21.75 10.5H5.5L0.5 5.5L5.5 0.5Z" stroke="#9ACBEC"/>
              <path d="M11 8H14.5V4.5H18V3H14.5V2.5H19V1H11V8Z" fill="white"/>
              <path d="M19 8V6H20.75C20.75 6 21.0455 5.9595 21.25 6C21.522 6.056 21.562 6.3335 21.75 6.5C21.938 6.6665 23 8 23 8H25C25 8 23.688 6.312 23.5 6C23.312 5.688 23 5 23 5C23 5 24.5 4.9835 24.5 3.5C24.5 2.0165 23.12 1 21 1H19V8Z" fill="white"/>
            </svg>
            <span className="ml-2">DB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
