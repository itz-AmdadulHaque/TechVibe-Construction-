"use client";

const services = [
  {
    title: "Fire and Life Safety",
    gradientFrom: "from-red-500",
    gradientTo: "to-orange-500",
    icon: "🔥",
    description:
      "Over 8 years of experience in fire protection systems and safety protocols across commercial and industrial settings.",
    points: [
      "Fire Risk Assessment & Mitigation",
      "Design of Fire Suppression and Detection Systems",
      "Compliance with NFPA and OSHA Standards",
      "Emergency Response Planning",
      "Safety Audits and Inspections",
      "Project Management and Team Leadership",
    ],
  },
  {
    title: "Electrical Safety",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
    icon: "⚡",
    description:
      "Over 15 years of expertise in electrical system safety and compliance across industrial and commercial sectors.",
    points: [
      "Electrical Hazard Analysis",
      "Risk Assessment & Mitigation",
      "Regulatory Compliance (NFPA 70E, OSHA)",
      "Plan, Design and Implementation",
      "Lockout/Tagout Procedures",
      "Safety Audits and Inspections",
      "Incident Investigation",
      "Personal Protective Equipment (PPE) Implementation",
    ],
  },
  {
    title: "IT and Surveillance Solutions",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-500",
    icon: "💻",
    description:
      "Over 15 years of experience in scalable software applications and IT infrastructure solutions.",
    points: [
      "CCTV Systems - Installs and maintains surveillance systems to enhance security",
      "Access Control Implements biometric, fingerprint, and face recognition systems",
      "Hardware & Software Support - Troubleshooting and maintenance services",
      "Product Sales - Computers, laptops, printers, projectors, accessories",
    ],
  },
];

export default function ServicesSection() {
  return (
    <main>
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-white to-gray-50"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </div>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              OUR SERVICES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-${service.gradientFrom.slice(
                  5
                )} transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} mt-2`}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      {/* Tick inside square */}
                      <div
                        className={`flex items-center justify-center w-5 h-5 mr-3 rounded-sm bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-white flex-shrink-0`}
                      >
                        ✓
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
