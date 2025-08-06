import { Metadata } from 'next';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    url?: string;
    images?: string[];
  };
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "Next Learning - Innovative Technology Education Platform",
    description: "Discover cutting-edge technology education in AR/VR, Robotics, Drone Engineering, and Startup Development. Join thousands of learners building the future.",
    keywords: ["technology education", "programming", "next.js", "learning platform", "innovation"],
    openGraph: {
      title: "Next Learning - Innovative Technology Education Platform",
      description: "Discover cutting-edge technology education in AR/VR, Robotics, Drone Engineering, and Startup Development.",
    }
  },
  about: {
    title: "About SkipperX - Next Learning",
    description: "Learn about SkipperX's mission to spark curiosity, unlock potential, and shape tomorrow's innovators through cutting-edge technology education.",
    keywords: ["about", "SkipperX", "mission", "technology education", "innovation", "learning platform"],
    openGraph: {
      title: "About SkipperX - Next Learning",
      description: "Discover SkipperX's mission to build the future through innovative technology education and hands-on learning experiences.",
    }
  },
  'ar-vr': {
    title: "AR/VR Development Course - Next Learning",
    description: "Master Augmented and Virtual Reality development with hands-on projects. Learn Unity, ARKit, ARCore, and build immersive experiences.",
    keywords: ["AR", "VR", "augmented reality", "virtual reality", "Unity", "ARKit", "ARCore", "immersive technology"],
    openGraph: {
      title: "AR/VR Development Course - Next Learning",
      description: "Master Augmented and Virtual Reality development with hands-on projects and real-world applications.",
    }
  },
  'core-tech': {
    title: "Core Technology Fundamentals - Next Learning",
    description: "Build a strong foundation in core technologies including programming fundamentals, algorithms, data structures, and software engineering principles.",
    keywords: ["programming", "algorithms", "data structures", "software engineering", "computer science", "coding"],
    openGraph: {
      title: "Core Technology Fundamentals - Next Learning",
      description: "Build a strong foundation in core technologies and programming fundamentals.",
    }
  },
  'creators-hub': {
    title: "Creators Hub - Next Learning",
    description: "Join our vibrant community of creators and innovators. Access resources, collaborate on projects, and showcase your creations.",
    keywords: ["creators", "community", "innovation", "collaboration", "projects", "showcase"],
    openGraph: {
      title: "Creators Hub - Next Learning",
      description: "Join our vibrant community of creators and innovators building the future.",
    }
  },
  'drone-engineering': {
    title: "Drone Engineering Course - Next Learning",
    description: "Learn drone design, programming, and autonomous flight systems. Build and program your own drones with expert guidance.",
    keywords: ["drone", "UAV", "autonomous flight", "robotics", "engineering", "programming", "aviation"],
    openGraph: {
      title: "Drone Engineering Course - Next Learning",
      description: "Learn drone design, programming, and autonomous flight systems with hands-on experience.",
    }
  },
  'robot-engineering': {
    title: "Robot Engineering Program - Next Learning",
    description: "Master robotics engineering from basics to advanced autonomous systems. Build intelligent robots and understand AI integration.",
    keywords: ["robotics", "engineering", "AI", "autonomous systems", "programming", "sensors", "actuators"],
    openGraph: {
      title: "Robot Engineering Program - Next Learning",
      description: "Master robotics engineering and build intelligent autonomous systems.",
    }
  },
  'privacy-policy': {
    title: "Privacy Policy - SkipperX",
    description: "Learn about SkipperX's privacy policy, data collection practices, and how we protect your personal information while using our platform.",
    keywords: ["privacy policy", "data protection", "GDPR", "privacy", "data collection", "SkipperX"],
    openGraph: {
      title: "Privacy Policy - SkipperX",
      description: "Understand how SkipperX protects your privacy and handles your personal data.",
    }
  },
  'terms-and-conditions': {
    title: "Terms and Conditions - SkipperX",
    description: "Read our terms and conditions to understand the rules and regulations governing your use of SkipperX website and services.",
    keywords: ["terms and conditions", "user agreement", "website terms", "service terms", "SkipperX", "legal"],
    openGraph: {
      title: "Terms and Conditions - SkipperX",
      description: "Understand the terms and conditions for using SkipperX platform and services.",
    }
  },
  'refund-policy': {
    title: "Refund Policy - SkipperX",
    description: "Understand our refund policy and the conditions under which refunds are processed for SkipperX courses and services.",
    keywords: ["refund policy", "returns", "customer service", "payment", "transactions", "SkipperX", "money back"],
    openGraph: {
      title: "Refund Policy - SkipperX",
      description: "Learn about SkipperX's refund policy and how to request refunds for our courses and services.",
    }
  },
  'startup-stack': {
    title: "Startup Technology Stack - Next Learning",
    description: "Learn the complete technology stack for building scalable startups. From MVP development to production deployment.",
    keywords: ["startup", "technology stack", "MVP", "scalable applications", "web development", "mobile development"],
    openGraph: {
      title: "Startup Technology Stack - Next Learning",
      description: "Learn the complete technology stack for building scalable startup applications.",
    }
  }
};

export function generateMetadata(pageKey: string): Metadata {
  const metadata = pageMetadata[pageKey] || pageMetadata.home;
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph?.title || metadata.title,
      description: metadata.openGraph?.description || metadata.description,
      url: metadata.openGraph?.url,
      images: metadata.openGraph?.images || ['/og-image.jpg'],
      type: 'website',
      siteName: 'Next Learning',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
