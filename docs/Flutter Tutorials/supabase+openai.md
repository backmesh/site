---
slug: /supabase
---

# Supabase and OpenAI

This tutorial will guide you through how to call the OpenAI API from a Flutter app that uses Supabase Authentication without a backend or cloud function using Backmesh. This will entail creating an API proxy in the Backmesh Dashboard and then using it in your Flutter app.

The Backmesh dashboard won't have any API proxies so click `New API Proxy` to get started

![Step 0 Screenshot](/emptydash.png)

## Step 1: Set OpenAI API details and rate limit configuration

Grab your [OpenAI API key](https://platform.openai.com/api-keys) and enter it. This value will encrypted and no longer viewable once it is saved.

![Step 1 Screenshot](/supabase+openai/step1.png)

OpenAI API uses the standard `Authorization` header to receive the private API key.
Then set the request limit you consider safe. This is set globally per user for a configurable time window.

:::note
Once this rate limit is exceeded by a user, Backmesh will return 429 HTTP responses automatically until the time window passes. Make sure to handle this gracefully in your Flutter app. You can change this limit at any time in the Backmesh dashboard.
:::

## Step 2: Set the Supabase project used for Authentication

Go to the Supabase dashboard to grab the project ID and public project key

![Supabase Screenshot](/supabase+openai/supabase.png)

And put them into the Backmesh API Proxy configuration

![Step 2 Screenshot](/supabase+openai/step2.png)

## Step 3: Safely use the Backmesh API proxy in your Flutter app using the Supabase Auth JWT

Grab the Backmesh API proxy URL provided:

![Step 3 Screenshot](/supabase+openai/step3.png)

Now you are ready to make API calls in Flutter through the Backmesh proxy URL by passing in the user’s JWT token from your app’s authentication provider instead of the API private key to the API client.

```dart title="openai.dart"
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:dart_openai/dart_openai.dart';

final jwt = ;
OpenAI.baseUrl =
    "https://edge.backmesh.com/v1/proxy/gbBbHCDBxqb8zwMk6dCio63jhOP2/wjlwRswvSXp4FBXwYLZ1";
OpenAI.apiKey = await Supabase.instance.client.accessToken;
```

Backmesh proxy will take over from here and relay the API with the encrypted private token.
