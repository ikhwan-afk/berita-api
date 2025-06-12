const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const articles = [
  {
    id: 1,
    title: "Kenali Gejala Alergi Makanan Sejak Dini",
    content: "Alergi makanan dapat menyebabkan gejala seperti ruam, gatal, atau bahkan sesak napas. Penting untuk mengenali gejalanya lebih awal.",
    image_url: "https://cdn.hellosehat.com/wp-content/uploads/2022/04/fa400c2d-shutterstock_1696192372.jpg?w=1080&q=100",
    date: "2025-06-12"
  },
  {
    id: 2,
    title: "Alergi Kacang: Tips Aman untuk Anak-anak",
    content: "Kacang adalah salah satu pemicu alergi paling umum. Hindari produk olahan yang tidak memiliki label bahan yang jelas.",
    image_url: "https://cdn.hellosehat.com/wp-content/uploads/2022/04/fa400c2d-shutterstock_1696192372.jpg?w=1080&q=100",
    date: "2025-06-10"
  },
  {
    id: 3,
    title: "Label Makanan: Bagaimana Membacanya untuk Penderita Alergi",
    content: "Label makanan kadang menyembunyikan istilah alergen. Pelajari istilah seperti 'protein susu', 'albumin', atau 'gluten'.",
    image_url: "https://cdn.hellosehat.com/wp-content/uploads/2022/04/fa400c2d-shutterstock_1696192372.jpg?w=1080&q=100",
    date: "2025-06-08"
  }
];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
