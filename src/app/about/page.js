import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import About from './About.tsx';

// Generate metadata for this page
export async function generateMetadata() {
  return generatePageMetadata('about');
}

export default function AboutPage() {
  return <About />;
}
