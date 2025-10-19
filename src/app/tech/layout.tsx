import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tech & Skills',
  description: 'Technologies and tools I use to build modern web applications.',
};

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
