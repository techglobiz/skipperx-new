import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('startup-stack');

export default function StartupStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
