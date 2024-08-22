---
sidebar_position: 1
slug: /
---

# Introduction

Backmesh is a SaaS for any mobile or web app written in any framework (Javascript, Android, iOS, MacOS, Flutter, React, React Native, etc) to call generative AI private key APIs, such as OpenAI, Anthropic and Google Gemini with analytics and rate limits per user without writing any backend code in a server or cloud function. Backmesh supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) out of the box. SSE is used by [OpenAI](https://platform.openai.com/docs/api-reference/streaming) and other generative AI APIs to stream HTTP responses. Backmesh is also hosted on Cloudflare's edge to proxy requests with lower response times than most servers or cloud functions. This is what the code in a Flutter app using Backmesh and Firebase Authentication to call the OpenAI API would look like:

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

And this is what is what the code in a React app using Backmesh and Supabase Authentication to call the OpenAI API would look like:

```typescript
// Auth Provider: Supabase
// App Type: React
// Private Key API: OpenAI
```

### Generative AI Analytics

Backmesh lets you look at generative AI API invocations and errors across your entire app and per user:

![]
