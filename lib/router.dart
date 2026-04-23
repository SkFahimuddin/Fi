import 'package:flutter/material.dart';
import 'features/auth/screens/login_screen.dart';
import 'features/chat/screens/chat_list_screen.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  switch (settings.name) {
    case '/chat-list':
      return MaterialPageRoute(builder: (_) => const ChatListScreen());
    default:
      return MaterialPageRoute(builder: (_) => const LoginScreen());
  }
}