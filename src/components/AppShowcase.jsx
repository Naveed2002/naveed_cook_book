import React, { useEffect, useRef, useState } from 'react';
import videoPreview from '../assets/10_19_2025_18_17_21_contentcore.xyz.mp4';
import bkVideo from '../assets/bk_1.mp4';
import hotelui from '../assets/hotel_ui2.mp4';
import burgerui from '../assets/burgerui.mp4';

const VideoItem = ({ src, className }) => {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const videoNode = videoRef.current;
    if (!videoNode) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.05 }
    );

    observer.observe(videoNode);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return undefined;

    const startPlayback = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    video.addEventListener('canplay', startPlayback);
    startPlayback();

    return () => {
      video.removeEventListener('canplay', startPlayback);
      video.pause();
    };
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      className={className}
      loop
      muted
      playsInline
      preload="none"
      controls={false}
    />
  );
};

const AppShowcase = () => {
  // Sample data for apps - you can replace this with your actual apps
  const apps = [
    {
      id: 1,
      title: "Smart Door Lock App",
      category: "Utility",
      video: videoPreview,
    },
    {
      id: 2,
      title: "Baby Shop App",
      category: "E-Commerce",
      video: bkVideo,
    },
    {
      id: 3,
      title: "Fitness Tracker",
      category: "Health",
      video: hotelui,
    },
    {
      id: 4,
      title: "Recipe Finder",
      category: "Food",
      video: burgerui,
    }
  ];

  const headlineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, []);

  return (
    <div className="py-12 px-4 sm:px-[5px] bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={headlineRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-8 sm:mb-12 text-black opacity-0 transition-opacity duration-700 leading-none"
        >
          <div>FEATURED</div>
          <div>WORKS</div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="w-full h-[300px] sm:h-[445px] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Upper part - for app preview/image */}
              <div className="w-full h-[220px] sm:h-[345px] bg-white flex items-center justify-center overflow-hidden">
                {app.video ? (
                  <VideoItem
                    src={app.video}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                ) : (
                  <div className="text-gray-400 text-sm sm:text-base">App Preview/Image</div>
                )}
              </div>

              {/* Bottom part - for app name and category */}
              <div className="w-full h-[80px] sm:h-[100px] flex flex-col justify-center px-4 sm:px-6 bg-gray-50">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{app.title}</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">{app.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;