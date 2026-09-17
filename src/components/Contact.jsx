import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const headlineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-20 px-4 bg-white overflow-hidden">
      <div
        ref={headlineRef}
        className={`max-w-6xl w-full flex flex-col items-center transition-all duration-1000 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-black text-6xl sm:text-8xl md:text-9xl font-bold text-center leading-none mb-12">
          <div>GET IN</div>
          <div>TOUCH</div>
        </h2>

        <p className="text-gray-500 mb-16 text-center max-w-lg text-lg sm:text-xl font-medium">
          Have a project in mind or want to say hi? Let's build something exceptional together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-16">
          <div className="flex flex-col items-center p-6 border border-gray-100 rounded-xl hover:border-black transition-colors duration-300 group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
              <svg className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span className="text-gray-900 font-bold text-lg mb-1">Email</span>
            <span className="text-gray-500 text-sm break-all">nawaznaveed8279@gmail.com</span>
          </div>

          <div className="flex flex-col items-center p-6 border border-gray-100 rounded-xl hover:border-black transition-colors duration-300 group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
              <svg className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <span className="text-gray-900 font-bold text-lg mb-1">Phone</span>
            <span className="text-gray-500 text-sm">+74 006 75 07</span>
          </div>

          <div className="flex flex-col items-center p-6 border border-gray-100 rounded-xl hover:border-black transition-colors duration-300 group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors duration-300">
              <svg className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              </svg>
            </div>
            <span className="text-gray-900 font-bold text-lg mb-1">Location</span>
            <span className="text-gray-500 text-sm">Colombo, Dehiwala</span>
          </div>
        </div>

        <div>
          <button className="text-black text-lg sm:text-xl font-bold uppercase tracking-widest bg-white border-2 border-black rounded-xl px-12 py-5 transition-all duration-300 hover:bg-black hover:text-white transform hover:-translate-y-1 active:translate-y-0">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;