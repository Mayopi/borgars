import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, Heart, Loader2 } from 'lucide-react';

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string | null;
  likes: number;
  links: {
    download: string;
  };
}

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const AccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const searchImages = async () => {
    if (!searchTerm.trim()) return;
    
    if (!AccessKey) {
      setError('API key is not configured. Please check your environment variables.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${AccessKey}`
      );
      const data = await response.json();
      setImages(data.results || []);
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchImages();
    }
  };

  return (
    <section id="product" className="py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Choose Your <span className="text-gradient">Meat</span>
          </h1>
          <p className="text-gray-400 text-lg">Search for your favorite burger ingredients</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search for beef, chicken, bacon..."
              className="w-full px-6 py-4 pl-14 bg-gray-800/50 backdrop-blur-sm text-white rounded-full border border-gray-700 focus:border-burger-red focus:outline-none transition-all duration-300"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={searchImages}
              disabled={loading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 burger-gradient text-white px-6 py-2 rounded-full font-semibold disabled:opacity-50 transition-all duration-300"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                'Search'
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-red-500 mb-8"
          >
            {error}
          </motion.div>
        )}

        {/* Image Grid */}
        <AnimatePresence>
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.urls.small}
                      alt={image.alt_description || 'Food image'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-300 mb-3 line-clamp-2">
                      {image.alt_description || 'No description'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Heart size={18} />
                        <span>{image.likes}</span>
                      </div>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={image.links.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 burger-gradient text-white px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!loading && images.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              No images found for "{searchTerm}". Try another search term.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Product;