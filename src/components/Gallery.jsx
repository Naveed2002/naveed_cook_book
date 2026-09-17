import React, { useEffect, useRef, useState, memo } from 'react';
import frame142 from '../assets/Frame 142.png';
import frame143 from '../assets/Frame 141.png';
import frame144 from '../assets/Frame 143.png';
import frame145 from '../assets/Group 289261.png';
import frame146 from '../assets/Group 289262.png';
import frame147 from '../assets/wakememain 1.png';
import frame148 from '../assets/registerwakeme 1.png';

const GalleryItem = memo(({ src, alt }) => (
  <div className="inline-block mx-2">
    <div className="w-[280px] sm:w-[350px] h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-md bg-gray-100">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transform-gpu transition-opacity duration-500"
        onLoad={(e) => e.target.style.opacity = 1}
        style={{ opacity: 0 }}
      />
    </div>
  </div>
));

const Gallery = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.01,
        rootMargin: '200px' // Start loading/animating slightly before it enters
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const images = [
    { id: 1, src: frame142, alt: 'Project 1' },
    { id: 2, src: frame143, alt: 'Project 2' },
    { id: 3, src: frame144, alt: 'Project 3' },
    { id: 4, src: frame145, alt: 'Project 4' },
    { id: 5, src: frame146, alt: 'Project 5' },
    { id: 6, src: frame147, alt: 'Project 6' },
    { id: 7, src: frame148, alt: 'Project 7' },
  ];

  return (
    <div
      ref={containerRef}
      className="py-12 bg-white"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '0 800px'
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-center mb-12 text-black leading-none">
          <div>PROJECT</div>
          <div>GALLERY</div>
        </h2>

        <div className="overflow-hidden">
          <div className={`flex whitespace-nowrap will-change-transform ${isInView ? 'animate-scroll' : ''}`}>
            {images.map((image) => (
              <GalleryItem key={image.id} src={image.src} alt={image.alt} />
            ))}
            {/* Duplicate images for seamless loop */}
            {images.map((image) => (
              <GalleryItem key={`dup-${image.id}`} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;