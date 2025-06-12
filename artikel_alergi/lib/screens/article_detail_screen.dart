import 'package:flutter/material.dart';
import '../models/article.dart';

class ArticleDetailScreen extends StatelessWidget {
  final Article article;

  const ArticleDetailScreen({super.key, required this.article});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(article.title)),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network(article.imageUrl),
            const SizedBox(height: 16),
            Text(article.date, style: const TextStyle(color: Colors.grey)),
            const SizedBox(height: 8),
            Text(article.content, style: const TextStyle(fontSize: 16)),
          ],
        ),
      ),
    );
  }
}
