---
sidebar_position: 1
slug: /
---

# Introduction

With Backmesh, you can securely call LLM APIs directly from your mobile or web app using **any LLM SDK** without exposing private API keys. Replace the LLM API URL and private key in your SDK with the Backmesh URL and the authenticated user’s JWT respectively.

## How is the LLM API protected

- *Authenticated proxy:* Requests are verified with [JWTs](https://firebase.google.com/docs/auth/admin/verify-id-tokens) from the app's authentication provider so only your users have access to the LLM API via the Backmesh proxy.
- *Rate limits per user:* Configurable per-user rate limits to prevent abuse (e.g. no more than 5 OpenAI API calls per user per hour).
- *Resource access control:* Sensitive API resources like [Files](https://platform.openai.com/docs/api-reference/files) and [Threads](https://platform.openai.com/docs/api-reference/threads) are protected so only the users that create them can continue to access them.

For more details, see the [security documentation](/docs/security).

**LLM Private Key APIs Supported:**

- [x] OpenAI
- [x] Gemini
- [x] Anthropic

**Authentication Providers Supported:**

- [x] Supabase
- [x] Firebase

Leave a comment on Discord if your provider or API is not supported.

## LLM Analytics without SDKs

Backmesh will automatically instrument LLM requests to let you understand LLM API usage across your users e.g. error rates, costs, response times across models, etc. Please leave a comment on [Discord](https://discord.backmesh.com) with more information about what LLM API endpoints you are using and what analytics you would like to see.

## Hosting

Backmesh is open source and can be [self hosted](/docs/selfhost) in your own Cloudflare account which includes a generous free tier. We also offer a hosted [SaaS](https://app.backmesh.com) with [pricing plans](https://backmesh.com/pricing/) starting at $10 per month. LLM API analytics are displayed in the SaaS dashboard only.

## Tutorials

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript web app using Supabase Authentication and OpenAI API](/docs/supabase)
