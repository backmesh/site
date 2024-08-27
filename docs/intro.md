---
sidebar_position: 1
slug: /
---

# Introduction

Backmesh lets any mobile or web app (e.g. Javascript, Native Mobile, Flutter, React, React Native, etc) call LLM private key APIs (OpenAI, Anthropic and Google Gemini) without writing any backend code in a server or cloud function.

## How Backmesh works

The Backmesh proxy uses your authentication provider's JWT to make sure only your users can call the LLM API and enforces rate limits per user e.g. no user should be calling the openAI API more than 5 times per hour. Backmesh keeps your private API keys securely encrypted at all times and is hosted on Cloudflare's edge to offer lower response times than most servers and cloud functions.

**Authentication Providers Supported:**

- [x] Supabase
- [x] Firebase
- [ ] [Auth0](https://github.com/backmesh/backmesh/issues/3)

**LLM APIs Supported:**

- [x] OpenAI
- [x] Gemini
- [ ] [Anthropic](https://github.com/backmesh/backmesh/issues/2)

## LLM Analytics without packages or SDKs

Backmesh will automatically instrument LLM requests to let you understand LLM API invocations per user e.g. error rates, token usage, costs, response times across models, etc. This feature is in early beta access as we understand exactly what is most useful to surface. Please leave a comment in this [Github Issue ](https://github.com/backmesh/backmesh/issues/4) or message us on Discord with more information about what LLM API endpoints you are using and what analytics you would like to see.

## Tutorials

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript web app using Supabase Authentication and OpenAI API](/docs/supabase)
