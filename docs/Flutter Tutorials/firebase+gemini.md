---
slug: /firebase
---

# Google Gemini and Firebase Auth

This tutorial will guide you through how to call the Google Gemini API from a Flutter app that uses Firebase Authentication without a backend or cloud function using Backmesh. This will entail creating an API proxy in the Backmesh Dashboard and then using it in your Flutter app.

The Backmesh dashboard won't have any API proxies so click `New API Proxy` to get started

![Step 0 Screenshot](/emptydash.png)

## Step 1: Set Google Gemini API details and rate limit configuration

Grab your [Google Gemini API key](https://aistudio.google.com/app/apikey) and enter it. This value will encrypted and no longer viewable once it is saved.

![Step 1 Screenshot](/firebase+gemini/step1.png)

Many APIs use the `Authorization` header to receive the private API key, but Google Gemini API has a custom one called `x-goog-api-key`.
Then set the request limit you consider safe. This is set globally per user for a configurable time window.

:::note
Once this rate limit is exceeded by a user, Backmesh will return 429 HTTP responses automatically until the time window passes. Make sure to handle this gracefully in your Flutter app. You can change this limit at any time in the Backmesh dashboard.
:::

## Step 2: Set the Firebase project used for Authentication

Go to the Firebase dashboard to grab the project ID and public project key

![Firebase Screenshot](/firebase+gemini/firebase.png)

And put them into the Backmesh API Proxy configuration

![Step 2 Screenshot](/firebase+gemini/step2.png)

## Step 3: Safely use the Backmesh API proxy in your Flutter app using the Firebase Auth JWT

Grab the Backmesh API proxy URL provided:

![Step 3 Screenshot](/firebase+gemini/step3.png)

Now you are ready to make API calls in Flutter through the Backmesh proxy URL by passing in the user’s JWT token from your app’s authentication provider instead of the API private key to the API client.

```dart title="gemini.dart"
import 'dart:io';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:google_generative_ai/src/model.dart'
    show createModelWithBaseUri;

// https://github.com/google-gemini/generative-ai-dart/tree/main/pkgs/google_generative_ai
// https://pub.dev/documentation/google_generative_ai/latest/google_generative_ai/google_generative_ai-library.html

final API_VERSION = 'v1beta';
final BASE_URL =
    'https://edge.backmesh.com/v1/proxy/gbBbHCDBxqb8zwMk6dCio63jhOP2/MFKiANCW8gFcOxT3YYU';

Uri uri = Uri.parse('$BASE_URL/$API_VERSION');
String jwt = await FirebaseAuth.instance.currentUser.getIdToken()
client = createModelWithBaseUri(
    model: model,
    apiKey: jwt,
    baseUri: uri,
)
```

Backmesh proxy will take over from here and relay the API request with the encrypted private token.
