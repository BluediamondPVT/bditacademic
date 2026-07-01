import PageBanner from '@/components/shared/PageBanner';
import { GallerySection } from '@/components/sections/GallerySection';

const page = () => {
  return (
     <div className="flex flex-col min-h-screen"> 
      <PageBanner 
        title="Media BDIT Academic" 
        description="Empowering learners through credible, flexible, and globally recognized higher education."
      />
      <GallerySection />
     </div>
  )
}

export default page