import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ArticleSectionProps {
  title: string;
  content: React.ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
}

const ArticleSection = ({ title, content, image, imageAlt, reverse = false }: ArticleSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8">{title}</h2>
      <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className={`space-y-4 text-gray-300 ${reverse ? 'md:order-2' : ''}`}>
          {content}
        </div>
        {image && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`${reverse ? 'md:order-1' : ''}`}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full rounded-xl shadow-2xl hover-scale"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Article = () => {
  const articleData = [
    {
      title: "Why Burgers?",
      content: (
        <>
          <p>
            <strong className="text-white">Let's take a Deep Dive into most Vegetarians thoughts</strong>
          </p>
          <p>
            Orang orang bilang kita perlu berhenti makan Daging untuk menyelamatkan bumi kita, karena sebagai contoh kecil. 
            Sapi adalah sumber populasi yang mencemari udara dengan sendawa mereka yang kaya akan Metana <strong className="text-burger-light">CH₄</strong>, 
            makanan dan minuman kita digunakan untuk pakan Mereka, serta lahan luas yang bisa digunakan untuk pertanian 
            dan perkebunan diambil untuk habitat Mereka.
          </p>
          <p>Dengan adanya pernyataan diatas membuat Sapi menjadi Makhluk yang jahat, tapi benarkah demikian?</p>
          <p className="text-burger-light font-semibold">Mari kita dalami lebih lanjut di topik berikutnya</p>
        </>
      ),
      image: "/assets/img/cows.jpg",
      imageAlt: "Cows in a field"
    },
    {
      title: "Do Cows Really Take All Our Foods?",
      content: (
        <>
          <p>
            Untuk memahami lebih lanjut, Mari kita asumsikan bahwa 10% populasi atau setara 33 juta jiwa dari United State 
            adalah Vegetarians kita mengambil nilai 10% karena jika 100% adalah nilai yang tidak rasional dan tidak realistis
          </p>
          <p>
            Dikutip dari Profesor Ilmu Hewan dan Spesialis Kualitas Udara di UC Davis - <strong className="text-burger-light">Dr. Frank Mitloehner</strong>
          </p>
          <blockquote className="border-l-4 border-burger-red pl-4 italic">
            "Seluruh jiwa di United State berkontribusi sebanyak 2.6% dari seluruh dunia, Maka nilai 10% akan menjadi 0.26%. 
            Nilai tersebut bahkan tak dapat dijadikan ukuran, kita berbicara tentang perubahan disini bahwa nilai 0.26% 
            tidak dapat diukur perubahannya dari pandangan Orang yang mengukur sesuatu."
          </blockquote>
          <p className="font-semibold text-white">Apakah Sapi benar benar mengonsumsi sebagian besar air?</p>
          <blockquote className="border-l-4 border-burger-red pl-4 italic">
            "Air yang dikonsumsi sapi adalah 94% Green Water dan Green Water adalah Air Hujan. 
            Air Hujan akan jatuh ke ladang dengan ternak dan tanpa ternak, Lalu air yang jatuh ke ladang dengan ternak 
            akan dikonsumsi oleh ternak itu sendiri tapi dalam bentuk Pangan."
          </blockquote>
        </>
      ),
      image: "/assets/img/united-states.jpg",
      imageAlt: "United States landscape",
      reverse: true
    },
    {
      title: "Do Cows Really Take Over Our Lands?",
      content: (
        <>
          <p>
            Jika kita menarik hewan ternak dari lahan yang mereka tempati, 2/3 dari seluruh lahan akan terbuang sia sia, 
            mengapa demikian? <strong className="text-burger-light">Here's Why</strong>
          </p>
          <blockquote className="border-l-4 border-burger-red pl-4 italic">
            "2/3 dari lahan agrikultur kita sebut dengan lahan Marginal - yang berarti anda tidak bisa menanam tumbuhan disana. 
            Alasan kenapa anda tidak bisa bertani disana bisa karena lahan penuh bebatuan, terlalu berbukit dan tanahnya 
            kurang bagus atau kekurangan sumber mata air. Satu satunya penghasil bahan makanan disana adalah Ternak Ruminant."
          </blockquote>
          <p>
            Sekarang kita tahu, bahwa Sapi tidak mengambil lahan kita melainkan membuat pemanfaatan sumber daya alam 
            semakin efisien
          </p>
        </>
      ),
      image: "/assets/img/land.jpg",
      imageAlt: "Agricultural land"
    },
    {
      title: "Something More Worth Talking About Than Meat",
      content: (
        <>
          <p>
            Setelah kita berdikusi panjang lebar mengenai Sapi dan Polusi emisi yang dihasilkannya, 
            Ada masalah yang lebih penting diselesaikan dibandingkan dengan topik Sapi tadi yaitu 
            <strong className="text-burger-light"> Sampah Makanan</strong>
          </p>
          <p>
            1/3 atau 33.33% dari seluruh makanan yang diproduksi di dunia berakhir menjadi Sampah atau Sisa Makanan
          </p>
          <blockquote className="border-l-4 border-burger-red pl-4 italic">
            "Jika Sampah Makanan kita samakan dengan sebuah Negara, maka itu akan menempati urutan ke tiga dari 
            Negara penghasil emisi terbesar di dunia"
          </blockquote>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <p className="font-semibold text-white mb-2">Food Waste Statistics:</p>
            <ul className="space-y-1">
              <li>• Buah dan Sayuran: 42%</li>
              <li>• Biji bijian termasuk Roti: 22%</li>
              <li>• Umbi umbian: 18%</li>
              <li>• Daging dan Susu: 14%</li>
            </ul>
          </div>
          <p className="font-bold text-white text-lg mt-4">
            Lalu bagaimana cara kita menghormati Makanan?, salah satu caranya adalah dengan Memakan 
            <span className="text-gradient text-2xl"> Burgers!</span>
          </p>
        </>
      ),
      image: "/assets/img/foodwaste.jpg",
      imageAlt: "Food waste",
      reverse: true
    }
  ];

  return (
    <section id="articles" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            The Truth About <span className="text-gradient">Burgers</span>
          </h1>
          <p className="text-gray-400 text-lg">Discover the facts behind our favorite food</p>
        </motion.div>

        <div className="glass-card p-8 md:p-12">
          {articleData.map((section, index) => (
            <ArticleSection key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;