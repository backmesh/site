---
sidebar_position: 3
slug: /quickstart
---

# Quickstart

Let's set up a Backmesh proxy for the OpenAI API and call it directly from a Flutter app.

## Step 1

Create an `API Proxy` in the Backmesh Dashboard

1. Select the authentication provider used in your app.
2. Enter the public key of your authentication provider.
3. Enter your private API key, which will be encrypted.

You will then receive a Backmesh proxy URL. Route your API calls through the Backmesh proxy URL and use the user’s JWT token from your app’s authentication provider instead of the API private key.
