import 'package:flutter/material.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  switch (settings.name) {
    default:
      return MaterialPageRoute(
        builder: (_) => const Scaffold(
          body: Center(child: Text('Page not found')),
        ),
      );
  }
}