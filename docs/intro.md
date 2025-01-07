---
sidebar_position: 1
slug: /
---

# Introduction

Backmesh lets you securely call LLM APIs from your mobile or web app with rate limits and analytics per user. No backend or SDK needed.

## How Backmesh works

Backmesh is throughly tested Typescript proxy backend hosted on Cloudflare Workers that lets you securely call LLM APIs from your mobile or web app using any LLM SDK. Supply the Backmesh URL and the authenticated user's JWT to the LLM SDK instead of the LLM API url and private key. Backmesh will authenticate the request and use your LLM private API key to proxy to the LLM APIs with configurable rate limits per user to prevent abuse (e.g. no more than 5 OpenAI API calls per hour per user). For more details, see the [security documentation](https://backmesh.com/docs/security).

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
