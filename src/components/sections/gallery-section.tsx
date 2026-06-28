import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { SectionContainer, SectionContent } from '@/components/layout/section-container'
import { athleteProfile } from '@/data'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof athleteProfile.gallery[0] | null>(null)

  // Group images by category
  const categories = Array.from(new Set(athleteProfile.gallery.map(img => img.category)))

  return (
    <SectionContainer id="gallery" className="bg-neutral-50">
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
            Gallery
          </h2>
          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
            Moments from the field and beyond
          </p>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {athleteProfile.gallery.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-neutral-200"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs text-white/80 capitalize">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
            {categories.map(category => (
              <div key={category} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-400" />
                <span className="capitalize">{category}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </SectionContent>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{selectedImage.alt}</p>
            <p className="text-sm text-white/80 capitalize">{selectedImage.category}</p>
          </div>
        </motion.div>
      )}
    </SectionContainer>
  )
}
