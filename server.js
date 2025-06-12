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
      id: "Alergi makanan dapat menyebabkan gejala seperti ruam, gatal, atau bahkan sesak napas. Penting untuk mengenali gejalanya lebih awal.",
      en: "Food allergies can cause symptoms like rashes, itching, or even shortness of breath. It's important to recognize the symptoms early."
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
      id: "Kacang adalah salah satu pemicu alergi paling umum. Hindari produk olahan yang tidak memiliki label bahan yang jelas.",
      en: "Peanuts are one of the most common allergy triggers. Avoid processed foods without clear ingredient labels."
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
      id: "Label makanan kadang menyembunyikan istilah alergen. Pelajari istilah seperti 'protein susu', 'albumin', atau 'gluten'.",
      en: "Food labels can sometimes hide allergen terms. Learn terms like 'milk protein', 'albumin', or 'gluten'."
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
