import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('drone-engineering');

export default function DroneEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
