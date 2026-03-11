"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const DEFAULT_HERO = {
  title: "Bienvenue sur Buy It Now",
  subtitle: "Votre destination shopping de confiance",
  text: "Découvrez des milliers de produits de qualité à des prix imbattables",
  video: null,
};

const Hero = ({ heroSection }) => {
  const hero = heroSection || DEFAULT_HERO;
  const hasVideo = !!hero.video?.public_id;

  const primaryText = hero.primaryButtonText || "Parcourir la boutique";
  const primaryLink = hero.primaryButtonLink || "/shop";
  const secondaryText = hero.secondaryButtonText || null;
  const secondaryLink = hero.secondaryButtonLink || "/";

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ minHeight: "90vh" }}
    >
      {/* ── Vidéo background ───────────────────────────────────────────── */}
      {hasVideo ? (
        <>
          {/* Wrapper qui force le player à couvrir toute la section */}
          <div className="absolute inset-0 w-full h-full [&_.cld-video-player]:!w-full [&_.cld-video-player]:!h-full [&_video]:!w-full [&_video]:!h-full [&_video]:!object-cover">
            <CldVideoPlayer
              id="hero-bg-video"
              src={hero.video.public_id}
              width="1920"
              height="1080"
              autoPlay="always"
              muted
              loop
              controls={false}
              logo={false}
              className="w-full h-full"
              colors={{
                accent: "transparent",
                base: "transparent",
                text: "transparent",
              }}
            />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-950 to-pink-950" />
      )}

      {/* ── Overlay sombre ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* ── Contenu centré ─────────────────────────────────────────────── */}
      <div
        className="relative z-[2] flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: "90vh" }}
      >
        <div className="max-w-3xl mx-auto">
          {hero.title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              {hero.title}
            </h1>
          )}
          {hero.subtitle && (
            <p className="text-xl md:text-2xl text-orange-300 font-semibold mb-3 drop-shadow">
              {hero.subtitle}
            </p>
          )}
          {hero.text && (
            <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
              {hero.text}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryLink}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              {primaryText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {secondaryText && (
              <Link
                href={secondaryLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:-translate-y-0.5"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── Wave separator ─────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
