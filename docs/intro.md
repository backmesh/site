---
sidebar_position: 1
---

# Backmesh Intro

Backmesh is a minimal SaaS that lets Flutter developers safely call private key APIs such as OpenAI, Stripe and Twilio amongst others without writing any backend code in a server or cloud function.

### Motivation

### How Backmesh Proxy works?

Create an account in the [dashboard](https://app.backmesh.com)

1.  Select the authentication provider used in your app
    [logos]
2.  Enter the auth provider public key
3.  Enter private api key (encrypted at all times)
4.  Get a Backmesh proxy url

Route API calls through your url `https://proxy.backmesh.com/yourbackmeshid` and use the user’s jwt token from your app’s authentication provider instead of the API private key.

```dart
// Auth Provider: Firebase
// App Type: Flutter Dart
// Private Key API: OpenAI

import 'package:firebase_auth/firebase_auth.dart';
import 'package:dart_openai/dart_openai.dart';


OpenAI.baseUrl =
    "https://proxy.backmesh.com/yourbackmeshid/"; // "https://api.openai.com/v1" is the default one.
// set api secret key to jwt
OpenAI.apiKey = await FirebaseAuth.instance.currentUser.getIdToken();
await OpenAI.instance.chat(...)
```
