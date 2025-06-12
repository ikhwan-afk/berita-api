import 'package:flutter/material.dart';
import 'screens/article_list_screen.dart';

void main() {
  runApp(const ArtikelAlergiApp());
}

class ArtikelAlergiApp extends StatelessWidget {
  const ArtikelAlergiApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Artikel Alergi',
      theme: ThemeData(primarySwatch: Colors.green),
      home: const ArticleListScreen(),
    );
  }
}
