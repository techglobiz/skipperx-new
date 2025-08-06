import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('creators-hub');

export default function CreatorsHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
