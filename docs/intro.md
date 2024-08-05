---
sidebar_position: 1
slug: /
---

# Intro

Backmesh is a minimal SaaS that lets Flutter developers safely call private key APIs such as OpenAI or Twilio without writing any backend code in a server or cloud function.

### Motivation

Developing a Flutter app can become particularly challenging when it involves calling a private key API with backend code. As of August 2024, platforms like Supabase and Firebase do not support Dart cloud functions. Additionally, many Flutter packages can’t be utilized in Dart backends due to the absence of UI dependencies.

As a result, Flutter developers often have to switch to languages like JavaScript, TypeScript, or Python for their backend code, which means rewriting model and controller logic to handle database operations. This can increase complexity and lead to duplicated effort, making the development process less efficient.

### How it works?

First, visit the Backmesh dashboard and create an account using GitHub or Google authentication.

1. Select the authentication provider used in your app.
2. Enter the public key of your authentication provider.
3. Enter your private API key, which will be encrypted.

You will then receive a Backmesh proxy URL. Route your API calls through the Backmesh proxy URL and use the user’s JWT token from your app’s authentication provider instead of the API private key.

```dart
// Auth Provider: Firebase
// App Type: Flutter Dart
// Private Key API: OpenAI

import 'package:firebase_auth/firebase_auth.dart';
import 'package:dart_openai/dart_openai.dart';


OpenAI.baseUrl =
    "https://edge.backmesh.com/appid/proxyname"; // "https://api.openai.com/v1" is the default one.
// set api secret key to jwt
OpenAI.apiKey = await FirebaseAuth.instance.currentUser.getIdToken();
await OpenAI.instance.chat(...)
```
