import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('ar-vr');

export default function ARVRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
