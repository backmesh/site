---
sidebar_position: 1
slug: /
---

# Intro

Backmesh is a minimal SaaS for Flutter developers to safely call private key APIs, such as OpenAI in the example below, without writing any backend code in a server or cloud function.

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

### Motivation

As of August 2024, none of the major platforms for developing Flutter apps like Supabase, Cloudflare, Vercel, or Firebase support Dart cloud functions. Additionally, many Flutter packages can’t be utilized in Dart backends due to the absence of UI dependencies. As a result, Flutter developers often have to rewrite model and controller logic to handle database operations a second time in Dart, Javascript or Python. This leads to duplicated effort and a slower development process.

The primary use case for a Flutter app that requires a backend is being able to securely call an external, private key API. Backmesh allows Flutter apps to do this without a backend by storing the private API key and providing a JWT protected proxy with user-scoped access by leveraging the app's authentication provider.
