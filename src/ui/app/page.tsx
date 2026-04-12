"use client";

import { useState, useMemo, useCallback } from "react";
import iconsData from "./data/icons.json";
import configData from "../../sync-assets/config.json";

interface IconEntry {
  id: string;
  name: string;
  file: string;
}

const icons: IconEntry[] = iconsData as IconEntry[];

function BitsInByteLogo() {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="currentColor"
    >
      <path d="M138.163,465.29c0-34.841,0-68.653,0-103.866c-37.376,0-74.428,0-112.162,0c0-20.669,0-39.916,0-60.618 c37.03,0,73.717,0,111.453,0c0-32.677,0-64.258,0-97.304c-36.668,0-73.367,0-111.103,0c0-20.719,0-40.311,0-61.381 c37.04,0,73.719,0,111.812,0c0-32.319,0-63.565,0-95.535c3.225-0.356,5.387-0.702,7.57-0.702 c61.455,0,123.296-0.717,184.771,0.35c28.784,0.356,56.428,6.554,80.176,24.343c47.812,35.616,54.308,99.115,14.396,143.83 c-3.626,3.96-7.202,7.974-11.528,12.305c21.571,10.183,39.555,23.612,52.486,43.217c37.411,55.193,20.871,126.361-38.096,164.545 c-33.451,21.416-71.185,29.768-109.64,30.818c-58.237,1.836-116.142,0.726-174.395,0.726 C142.479,466.361,141.041,466.013,138.163,465.29L138.163,465.29z M217.265,275.006c0,41.423,0,81.738,0,120.563 c40.632,0,80.881,1.479,120.444-0.708c16.522-1.103,33.795-7.629,48.87-15.619c31.663-17.431,34.172-60.678,4.702-80.974 c-14.012-9.483-30.585-16.348-46.77-20.699C302.824,267.021,260.413,273.221,217.265,275.006L217.265,275.006z M216.929,224.163c24.433-1.789,47.417-2.141,70.096-5.049c17.229-2.171,34.855-6.2,51.03-12.708 c22.266-9.116,33.067-30.13,30.536-52.343c-2.113-19.946-16.883-36.631-39.155-42.079c-37.037-9.45-74.772-3.659-112.511-5.439 C216.929,146.094,216.929,184.27,216.929,224.163L216.929,224.163z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconCard({
  icon,
  view,
}: {
  icon: IconEntry;
  view: "grid" | "list";
}) {
  const [copied, setCopied] = useState(false);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = `/icons/${icon.file}`;
    link.download = icon.file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [icon.file]);

  const handleCopyUrl = useCallback(() => {
    const url = `https://azure-assets.bitesinbyte.com/icons/${icon.file}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [icon.file]);

  if (view === "list") {
    return (
      <div className="group flex items-center gap-4 px-4 py-3 rounded-lg border border-border/50 hover:border-border hover:bg-card transition-all duration-200">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-muted/50 p-1.5">
          <img
            src={`/icons/${icon.file}`}
            alt={icon.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{icon.name}</p>
          <p className="text-xs text-muted-foreground font-mono">{icon.file}</p>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleCopyUrl}
            className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            title="Copy URL"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
          <button
            onClick={handleDownload}
            className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            title="Download SVG"
          >
            <DownloadIcon />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-border hover:bg-card transition-all duration-200 hover:shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted/50 p-2 group-hover:bg-muted transition-colors">
        <img
          src={`/icons/${icon.file}`}
          alt={icon.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-xs text-center font-medium leading-tight line-clamp-2 w-full">
        {icon.name}
      </p>
      <div className="absolute top-2 right-2 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopyUrl}
          className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          title="Copy URL"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
        <button
          onClick={handleDownload}
          className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          title="Download SVG"
        >
          <DownloadIcon />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    if (!search.trim()) return icons;
    const terms = search.toLowerCase().split(/\s+/);
    return icons.filter((icon) => {
      const text = `${icon.name} ${icon.id}`.toLowerCase();
      return terms.every((term) => text.includes(term));
    });
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a
            href="https://bitesinbyte.com"
            className="flex items-center gap-2.5 text-foreground hover:text-foreground/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BitsInByteLogo />
            <span className="text-lg font-semibold tracking-tight">
              Bites In Byte
            </span>
          </a>
          <nav className="flex items-center gap-4">
            <a
              href="https://github.com/bitesinbyte/azure-draw-io-assets"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
              <ExternalLinkIcon />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Azure Draw.io Assets
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Browse {icons.length} Azure service icons for your architecture
              diagrams. Continuously synced from official Microsoft Azure icon
              sets.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                v{configData.currentVersion}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                <ClockIcon />
                Last synced{" "}
                {new Date(configData.lastSyncDateTime).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                <ClockIcon />
                Last checked{" "}
                {new Date(configData.lastCheckedDateTime).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/bitesinbyte/azure-draw-io-assets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Use in Draw.io
                <ExternalLinkIcon />
              </a>
              <a
                href="https://github.com/bitesinbyte/azure-draw-io-assets#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Controls */}
      <section className="w-full border-b border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search icons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {filtered.length}{" "}
                {filtered.length === 1 ? "icon" : "icons"}
              </span>
              <div className="flex items-center rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 transition-colors ${
                    view === "grid"
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Grid view"
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 transition-colors ${
                    view === "list"
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="List view"
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Grid / List */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <SearchIcon />
              </div>
              <p className="text-lg font-medium">No icons found</p>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your search terms
              </p>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
              {filtered.map((icon) => (
                <IconCard key={icon.file} icon={icon} view="grid" />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2 max-w-3xl">
              {filtered.map((icon) => (
                <IconCard key={icon.file} icon={icon} view="list" />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="https://bitesinbyte.com"
              className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BitsInByteLogo />
              <span className="text-sm font-semibold tracking-tight">
                Bites In Byte
              </span>
            </a>
            <p className="text-xs text-muted-foreground">
              Azure icons are trademarks of Microsoft Corporation. This project
              is not affiliated with Microsoft.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
