---
sidebar_position: 1
slug: /
---

# Introduction

Backmesh lets your mobile or web app (e.g. Javascript, Native Mobile, Flutter, React, React Native, etc) call LLM private key APIs without a server or cloud function backend. Additionally, Backmesh is hosted on Cloudflare’s edge, providing lower response times compared to traditional servers and cloud functions.

## How Backmesh works

Backmesh provides secure LLM API access by using your authentication provider’s JWT to ensure only authorized users can make API calls. It adds additional protections like rate limiting (e.g., no more than 5 OpenAI API calls per hour per user). For more details, see the [security documentation](/docs/security).

**LLM Private Key APIs Supported:**

- [x] OpenAI
- [x] Gemini
- [x] Anthropic

**Authentication Providers Supported:**

- [x] Supabase
- [x] Firebase
- [ ] [Auth0](https://github.com/backmesh/backmesh/issues/3)

## LLM Analytics without SDKs

Backmesh will automatically instrument LLM requests to let you understand LLM API usage across your users e.g. error rates, costs, response times across models, etc. Please leave a comment in this [Github Issue](https://github.com/backmesh/backmesh/issues/4) or message us on Discord with more information about what LLM API endpoints you are using and what analytics you would like to see.

## Tutorials

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript web app using Supabase Authentication and OpenAI API](/docs/supabase)
