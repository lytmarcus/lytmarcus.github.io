"use client";

import { useRef, useState } from "react";

type PortfolioImageProps = {
  src: string;
  alt: string;
};

const zoomLevels = [1, 1.5, 2, 3, 4];

export default function PortfolioImage({ src, alt }: PortfolioImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [zoomIndex, setZoomIndex] = useState(0);
  const zoom = zoomLevels[zoomIndex];

  const openLightbox = () => {
    setZoomIndex(0);
    dialogRef.current?.showModal();
  };

  const closeLightbox = () => {
    dialogRef.current?.close();
    setZoomIndex(0);
  };

  const zoomIn = () => {
    setZoomIndex((current) => Math.min(current + 1, zoomLevels.length - 1));
  };

  const zoomOut = () => {
    setZoomIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <>
      <button
        type="button"
        className="portfolio-image-trigger"
        aria-label={`Open enlarged portfolio image: ${alt}`}
        onClick={openLightbox}
        onContextMenu={(event) => event.preventDefault()}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          onDragStart={(event) => event.preventDefault()}
        />
        <span className="portfolio-zoom-hint" aria-hidden="true">View detail</span>
      </button>

      <dialog
        ref={dialogRef}
        className="portfolio-lightbox"
        aria-label={`Enlarged portfolio image: ${alt}`}
        onCancel={() => setZoomIndex(0)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}
      >
        <div
          className="portfolio-lightbox-panel"
          onContextMenu={(event) => event.preventDefault()}
        >
          <div className="portfolio-lightbox-toolbar">
            <p>Portfolio detail</p>
            <div className="portfolio-lightbox-controls">
              <button type="button" onClick={zoomOut} disabled={zoomIndex === 0} aria-label="Zoom out">
                −
              </button>
              <output aria-live="polite">{Math.round(zoom * 100)}%</output>
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoomIndex === zoomLevels.length - 1}
                aria-label="Zoom in"
              >
                +
              </button>
              <button type="button" className="portfolio-lightbox-close" onClick={closeLightbox}>
                Close
              </button>
            </div>
          </div>

          <div className="portfolio-lightbox-viewport">
            <img
              className="portfolio-lightbox-image"
              src={src}
              alt={alt}
              draggable={false}
              style={{ width: `${zoom * 100}%` }}
              onClick={zoomIn}
              onContextMenu={(event) => {
                event.preventDefault();
                zoomOut();
              }}
              onDragStart={(event) => event.preventDefault()}
            />
          </div>

          <p className="portfolio-lightbox-instructions">
            Left click to zoom in · Right click to zoom out · Scroll to explore
          </p>
        </div>
      </dialog>
    </>
  );
}
