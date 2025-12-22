// Dynamic Warehouse Content Configuration
// Update this file to easily change all content across the site

export const warehouseConfig = {
  // Brand Information
  brand: {
    name: "NEWMARK",
    logo: "/warehouse/newmark.png", // Update path when logo is available
    website: "www.nmrk.com",
  },

  // Banner/Hero Section
  banner: {
    title: "BRAND-NEW CLASS A INDUSTRIAL FACILITY FOR LEASE",
    subtitle: "Prime location for logistics & last-mile operations",
    description: "Introducing one of the most attractive new industrial developments in Tlalnepantla—a Class A distribution facility strategically located in the highly demanded Barrientos submarket, the epicenter of logistics, e-commerce, transportation, and last-mile delivery for Mexico City and the entire Metro Area.",
    ctaText: "Book a Tour",
    ctaLink: "#contact",
    // Images will be imported from assets - use empty array to use fallback
    images: [], // Empty array will use fallback images from assets
    backgroundImage: null, // Will use fallback bg from assets
  },

  // Warehouse Features
  warehouseFeatures: {
    title: "Key Building Features",
    subtitle: "Class \"A\" Specifications",
    features: [
      {
        label: "Site Area",
        value: "9,791 m²",
        icon: "area",
      },
      {
        label: "Total Rentable Area",
        value: "7,390 m²",
        icon: "rentable",
      },
      {
        label: "Warehouse Area",
        value: "6,590 m²",
        icon: "warehouse",
      },
      {
        label: "Mezzanine",
        value: "800 m²",
        description: "Ideal for offices or operational growth",
        icon: "mezzanine",
      },
      {
        label: "Clear Height",
        value: "11.0 m",
        icon: "height",
      },
      {
        label: "Column Spacing",
        value: "12 × 24 m",
        description: "Optimal for racking and internal maneuvering",
        icon: "spacing",
      },
    ],
  },

  // Location Information
  locations: {
    title: "Prime Strategic Location",
    subtitle: "Direct, efficient access to key industrial zones",
    highlights: [
      "Mexico City",
      "México–Querétaro Highway (57)",
      "Vallejo Industrial Zone",
      "San Martín Obispo",
      "Circuito Exterior Mexiquense",
      "Cuautitlan-Tultitlan-Tepotzotlan industrial submarkets",
      "Key logistics and industrial hubs in the northern Metro region",
    ],
    description: "This area is one of the most consolidated and in-demand logistics zones in the country, with extremely low vacancy rates and a privileged urban distribution position.",
    addresses: [
      {
        name: "Tlalnepantla Warehouse",
        address: "Avenida Prolongación Hidalgo No.3, Col. Pueblo San Pedro Barrientos, Municipio Tlalnepantla De Baez, Edo. De México, C.P. 54010",
        mapLink: "https://maps.app.goo.gl/mgj6YRcikX8zeznC8",
        usps: [
          "Prime infill location with immediate access to Mexico City's strongest consumer and labor markets",
          "Perfect for last-mile operations thanks to unmatched proximity to MEXICO CITY",
          "Direct access to major highways including Gustavo Baz and Periférico Norte",
          "Ideal for e-commerce, retail supply chain, and urban logistics",
        ],
        idealFor: [
          "Metropolitan logistics & distribution",
          "Last-mile and e-commerce operations",
          "Courier, parcel & express delivery",
          "Cross-docking and consolidation centers",
          "Light manufacturing",
        ],
      },
     
    ],
  },

  // Specifications
  specifications: {
    title: "Warehouse Specifications",
    subtitle: "World-class construction features for exceptional operational efficiency",
    tabs: [
      {
        id: "building",
        label: "Building Features",
        items: [
          "Clear height: 11.0 m",
          "Column spacing: 12 × 24 m",
          "Walls: Reinforced concrete and Insulated metal panel wall",
          "Roof: KR-18 panel with thermo-acoustic insulation",
          "Natural lighting: 10%",
          "Artificial lighting: LED fixtures",
        ],
      },
      {
        id: "infrastructure",
        label: "Infrastructure",
        items: [
          "Parking facilities",
          "Truck docks",
          "Office space (800 m² mezzanine)",
          "Power supply",
          "Fire protection system",
          "Lightning protection system",
        ],
      },
      {
        id: "security",
        label: "Security & Safety",
        items: [
          "24/7 Security",
          "CCTV surveillance",
          "Controlled access guardhouse",
          "Fire protection: Hydrants, hoses and cabinets system",
        ],
      },
      {
        id: "operational",
        label: "Operational Features",
        items: [
          "24x7 access",
          "Automated systems",
          "High ceilings (11m clear height)",
          "Racking support",
          "Loading docks",
          "Cross-docking capabilities",
        ],
      },
    ],
  },

  // Target Industries
  targetIndustries: {
    title: "Ideal For",
    subtitle: "Perfect for various industrial and logistics operations",
    industries: [
      {
        name: "E-commerce",
        description: "Fulfillment centers and last-mile distribution",
      },
      {
        name: "Logistics & Distribution",
        description: "3PL, Courier and parcel services",
      },
      {
        name: "Retail Supply Chain",
        description: "Retailers and FMCG distribution",
      },
      {
        name: "Manufacturing",
        description: "Light manufacturing and assembly",
      },
      {
        name: "Pharmaceutical",
        description: "Pharma distribution and storage",
      },
      {
        name: "Automotive",
        description: "Automotive parts and components",
      },
    ],
  },

  // Availability & Pricing
  availability: {
    status: "IMMEDIATE",
    statusText: "Perfect timeline for operational planning and build-out",
    pricing: "Contact for pricing",
    pricingModel: "Per SQM plus VAT per month",
    leaseTerms: "36 months minimum contract",
  },

  // Contact Information
  contact: {
    phoneNumber: "+52 55 1234 5678", // Add actual phone number
    email: "info@newmark.com", // Add actual email
  },

  // Call to Actions
  ctas: {
    primary: {
      text: "Book a Tour",
      link: "#contact",
    },
    secondary: {
      text: "Schedule a Call",
      link: "#contact",
    },
    whatsapp: {
      text: "Contact via WhatsApp",
      link: "https://wa.me/525512345678", // Format: https://wa.me/[country code][phone number without + or spaces]
    },
    download: {
      text: "Download Brochure",
      link: "/brochure.pdf", // Update with actual PDF path when available
    },
  },

  // Lead Form Fields
  leadForm: {
    title: "Get in Touch",
    subtitle: "Fill out the form below and we'll get back to you",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "companyName", label: "Company Name", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "warehouseSize", label: "Warehouse Size Requirement", type: "text", required: false },
      { name: "preferredLocation", label: "Preferred Location", type: "select", options: ["Tlalnepantla", "Jilotepec", "Both"], required: false },
      { name: "budget", label: "Budget", type: "text", required: false },
      { name: "leaseDuration", label: "Lease Duration", type: "text", required: false },
      { name: "timeline", label: "Timeline to Move In", type: "text", required: false },
      { name: "additionalNotes", label: "Additional Notes", type: "textarea", required: false },
    ],
  },

  // Taglines (for ads/marketing)
  taglines: [
    "Discover industrial spaces engineered for efficiency and optimized for logistics performance.",
    "Accelerate your distribution network with premium warehouse options in Tlalnepantla / Jilotepec.",
    "Lease modern industrial facilities designed for fast access, operational flow, and long-term scalability.",
    "Enhance your operations with Class A warehouse solutions strategically located within key logistics corridors.",
  ],

  // Legal/Disclaimer
  disclaimer: "This information has been prepared by Newmark for general information only. Newmark makes no warranties nor representations of any kind, express or implied, with respect to the information, including, but not limited to, warranties of content, accuracy, and reliability. Any interested party should make their own inquiries about the accuracy of the information. Newmark unequivocally excludes all inferred or implied terms, conditions and warranties arising from this document and excludes all liability for loss and damage arising therefrom.",
  
  // Legal Pages
  legal: {
    privacyPolicyUrl: "/privacy-policy", // Update with actual URL
    termsConditionsUrl: "/terms-conditions", // Update with actual URL
  },
};

