'use client';

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-white to-gray-50"
      aria-labelledby="products-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="products-heading"
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Our Products
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-10 rounded" />
        
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
          We can provide all the essential products needed for our services — including CCTV systems, computers, laptops, printers, projectors, accessories, fire safety equipment, and more.
        </p>
        
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Our online store is <span className="font-semibold text-purple-600">coming soon</span>. Meanwhile, feel free to <span className="font-semibold text-blue-600 underline cursor-pointer">call us</span> for your product needs or to book a service.
        </p>
        
        <a
          href="tel:+1234567890"
          className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
        >
          Call Us Now
        </a>
      </div>
    </section>
  );
}
