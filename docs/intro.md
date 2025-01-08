---
sidebar_position: 1
slug: /
---

# Introduction

With Backmesh, you can securely call LLM APIs directly from your mobile or web app using **any LLM SDK** without exposing private API keys. Replace the LLM API URL and private key in your SDK with the Backmesh URL and the authenticated user’s JWT respectively.

## How is the LLM API protected

	•	*Authentication:* Verifies requests using the supplied JWT so only your users have access to the LLM API.
	•	*Secure Proxying:* Uses your private LLM API key to forward calls to LLM APIs.
	•	*Rate Limiting:* Prevents abuse with configurable, per-user rate limits (e.g., max 5 OpenAI API calls per user/hour).
  • *Resource access control:* Sensitive API resources like [Files](https://platform.openai.com/docs/api-reference/files) and Threads are protected so only the users that create them can continue to access them.

For more details, see the [security documentation](https://backmesh.com/docs/security).

**LLM Private Key APIs Supported:**

- [x] OpenAI
- [x] Gemini
- [x] Anthropic

**Authentication Providers Supported:**

- [x] Supabase
- [x] Firebase

Leave a comment on Discord if your provider or API is not supported.

## Hosting

Backmesh is open source and can be [self hosted](/docs/selfhost) in your own Cloudflare account which includes a generous free tier. We also offer a hosted [SaaS](https://app.backmesh.com) with [pricing plans](https://backmesh.com/pricing/) starting at $8 per month. LLM API analytics are displayed in the SaaS dashboard only.

## LLM Analytics without SDKs

Backmesh will automatically instrument LLM requests to let you understand LLM API usage across your users e.g. error rates, costs, response times across models, etc. Please leave a comment on Discord with more information about what LLM API endpoints you are using and what analytics you would like to see.

## Tutorials

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript web app using Supabase Authentication and OpenAI API](/docs/supabase)
