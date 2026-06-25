import { notFound } from 'next/navigation';
import degreesData from '@/data/degrees.json';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

// 1. Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const degree = degreesData.find((d) => d.slug === params.slug);
  
  if (!degree) return { title: 'Degree Not Found' };

  return {
    title: `${degree.title} | BDIT Academic`,
    description: degree.description,
    openGraph: {
      title: `${degree.title} | BDIT Academic`,
      description: degree.description,
    },
  };
}

// 2. Next.js ko pehle se batana ki kaun-kaun se pages banane hain (For Extreme Speed)
export async function generateStaticParams() {
  return degreesData.map((degree) => ({
    slug: degree.slug,
  }));
}

// 3. Actual Page Component
export default function DegreeDetailPage({ params }: Props) {
  const degree = degreesData.find((d) => d.slug === params.slug);

  if (!degree) {
    notFound(); // Agar galat slug ho toh 404 dikhadega
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{degree.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-6">{degree.description}</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p><strong>Duration:</strong> {degree.duration}</p>
            <p><strong>Eligibility:</strong> {degree.eligibility}</p>
          </div>
        </div>
      </div>
    </main>
  );
}