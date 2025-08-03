"use client";

import Image from "next/image";

interface WelcomePopupProps {
  showPopup: boolean;
  closePopup: () => void;
}

const highlights = [
  {
    color: "bg-orange-400",
    text: "This site is currently under development.",
  },
  {
    color: "bg-blue-400",
    text: "A newer version will be available soon with online product ordering and service booking.",
  },
  {
    color: "bg-green-400",
    text: "We can provide all the essential products needed for our services.",
  },
];

export default function WelcomePopup({
  showPopup,
  closePopup,
}: WelcomePopupProps) {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full translate-y-12 -translate-x-12" />

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative p-8 text-center">
          {/* Logo */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6 shadow-md">
            <Image
              src="/logo.png"
              alt="TechVibe Global Logo"
              width={64}
              height={64}
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to TechVibe Global! 🚀
          </h3>

          {/* Highlights */}
          <div className="space-y-3 text-gray-600 mb-6 text-left">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start">
                <span
                  className={`mt-1 w-2 h-2 ${item.color} rounded-full mr-3 flex-shrink-0`}
                />
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <button
              onClick={closePopup}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Continue Browsing
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              This message appears only on your first visit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
