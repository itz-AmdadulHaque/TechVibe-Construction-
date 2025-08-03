export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechVibe Global",
    url: "https://www.techvibeglobal.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.techvibeglobal.com/logo.png",
      width: "400",
      height: "400",
    },
    description:
      "TechVibe Global provides innovative engineering solutions in Fire & Life Safety, Electrical Safety, and IT & Surveillance in Bangladesh.",
    foundingDate: "2017",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, House #07, Road #09, Sector #11",
        addressLocality: "Uttara",
        addressRegion: "Dhaka",
        addressCountry: "Bangladesh",
        name: "Dhaka Office",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, Wali Khan Bhaban, Chowmuhoni",
        addressLocality: "Chottogram",
        addressRegion: "Chittagong",
        addressCountry: "Bangladesh",
        name: "Chottogram Office",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-13205-04151",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
    },
    email: ["info@techvibeglobal.com", "techvibeglobal@gmail.com"],
    sameAs: ["https://www.techvibeglobal.com"],
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    serviceType: [
      "Fire and Life Safety Engineering",
      "Electrical Safety Engineering",
      "IT and Surveillance Solutions",
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "TechVibe Global",
    },
    serviceType: "Engineering Solutions",
    description:
      "Comprehensive engineering solutions including Fire & Life Safety, Electrical Safety, and IT & Surveillance services",
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fire and Life Safety",
            description:
              "Fire Risk Assessment, Fire Suppression Systems, NFPA Compliance, Emergency Response Planning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Safety",
            description:
              "Electrical Hazard Analysis, Risk Assessment, NFPA 70E Compliance, Safety Audits",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT and Surveillance",
            description:
              "CCTV Systems, Access Control, Hardware Support, Software Solutions",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechVibe Global",
    url: "https://www.techvibeglobal.com",
    description:
      "TechVibe Global - Innovative Engineering Solutions in Fire Safety, Electrical Safety & IT Surveillance",
    publisher: {
      "@type": "Organization",
      name: "TechVibe Global",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.techvibeglobal.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
