import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('core-tech');

export default function CoreTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
