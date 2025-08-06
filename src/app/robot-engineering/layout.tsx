import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('robot-engineering');

export default function RobotEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
