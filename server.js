const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Artikel dengan dukungan 2 bahasa
const articles = [
  {
    id: 1,
    title: {
      id: "Kenali Gejala Alergi Makanan Sejak Dini",
      en: "Recognize Food Allergy Symptoms Early"
    },
    content: {
      id: "Alergi makanan dapat menyebabkan berbagai gejala, mulai dari ringan hingga berat. Gejala umum meliputi ruam kulit, gatal-gatal, pembengkakan di wajah atau bibir, mual, muntah, hingga diare. Dalam beberapa kasus, reaksi alergi dapat sangat parah dan mengancam jiwa, seperti anafilaksis yang menyebabkan sesak napas, penurunan tekanan darah drastis, dan hilangnya kesadaran. Oleh karena itu, penting bagi orang tua dan individu untuk mengenali tanda-tanda alergi makanan sejak dini dan segera berkonsultasi dengan tenaga medis jika mengalami gejala mencurigakan. Deteksi dini memungkinkan penanganan yang lebih cepat dan mencegah komplikasi lebih lanjut.",
      en: "Food allergies can cause a range of symptoms, from mild to severe. Common symptoms include skin rashes, itching, swelling of the face or lips, nausea, vomiting, and diarrhea. In some cases, allergic reactions can be life-threatening, such as anaphylaxis which may cause difficulty breathing, a sharp drop in blood pressure, and loss of consciousness. Therefore, it's crucial for parents and individuals to recognize food allergy symptoms early and seek medical advice if any suspicious signs appear. Early detection allows for quicker treatment and prevents further complications."
    },
    image_url: "https://cdn.hellosehat.com/wp-content/uploads/2022/04/fa400c2d-shutterstock_1696192372.jpg?w=1080&q=100",
    date: "2025-06-12"
  },
  {
    id: 2,
    title: {
      id: "Alergi Kacang: Tips Aman untuk Anak-anak",
      en: "Peanut Allergy: Safety Tips for Children"
    },
    content: {
      id: "Alergi kacang merupakan salah satu jenis alergi yang paling umum, terutama pada anak-anak. Reaksi alergi terhadap kacang bisa sangat serius dan muncul dalam hitungan menit setelah terpapar. Oleh karena itu, penting bagi orang tua untuk selalu membaca label makanan dengan cermat dan menghindari makanan yang tidak mencantumkan komposisi bahan secara jelas. Ajarkan anak untuk tidak menerima makanan dari orang lain tanpa memastikan keamanan bahan-bahannya. Selain itu, bawa selalu obat darurat seperti epinefrin autoinjector jika anak sudah terdiagnosis alergi kacang. Edukasi juga guru dan pengasuh agar siap menghadapi situasi darurat.",
      en: "Peanut allergy is one of the most common allergies, especially in children. Allergic reactions to peanuts can be severe and appear within minutes of exposure. Therefore, it's important for parents to carefully read food labels and avoid products without clear ingredient listings. Teach children not to accept food from others unless they are sure of its safety. Always carry emergency medication such as an epinephrine auto-injector if the child has been diagnosed with a peanut allergy. Also, educate teachers and caregivers so they are prepared to handle emergency situations."
    },
    image_url: "https://sumateraekspres.bacakoran.co/upload/1798da5765cd1f70d3f928a6675377b8.jpg",
    date: "2025-06-10"
  },
  {
    id: 3,
    title: {
      id: "Label Makanan: Bagaimana Membacanya untuk Penderita Alergi",
      en: "Food Labels: How to Read Them for Allergy Sufferers"
    },
    content: {
      id: "Membaca label makanan adalah langkah penting bagi penderita alergi makanan. Banyak produk mengandung alergen tersembunyi dengan nama yang tidak langsung, seperti 'kasein' untuk susu atau 'albumin' untuk telur. Penting untuk mengenali istilah-istilah ini agar dapat menghindari paparan yang berisiko. Selain itu, perhatikan label 'diproduksi di fasilitas yang juga mengolah...' karena ada kemungkinan kontaminasi silang. Biasakan membaca label setiap kali membeli, bahkan untuk produk yang biasa dikonsumsi, karena komposisi bisa berubah sewaktu-waktu. Jika ragu, lebih baik hindari produk tersebut atau hubungi produsen untuk kepastian.",
      en: "Reading food labels is a crucial step for those with food allergies. Many products contain hidden allergens under different names, such as 'casein' for milk or 'albumin' for eggs. It's important to learn these terms to avoid risky exposure. Also, pay attention to labels that mention 'manufactured in a facility that also processes...' due to the possibility of cross-contamination. Make it a habit to read labels every time you shop, even for familiar products, as ingredients may change without notice. If in doubt, it's better to avoid the product or contact the manufacturer for clarity."
    },
    image_url: "https://medicastore.com/images/penyakit/CF0UK_Alergi-Fisik.jpg",
    date: "2025-06-08"
  }
];

// Endpoint dengan query parameter ?lang=id / ?lang=en
app.get('/api/articles', (req, res) => {
  const lang = req.query.lang || 'id'; // default ke 'id'

  const localizedArticles = articles.map(article => ({
    id: article.id,
    title: article.title[lang] || article.title['id'],
    content: article.content[lang] || article.content['id'],
    image_url: article.image_url,
    date: article.date
  }));

  res.json(localizedArticles);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
