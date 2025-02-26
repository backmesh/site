---
sidebar_position: 1
slug: /
---

# Introduction

Backmesh is an open source Backend as a Service (BaaS) for AI apps. It lets you securely call LLM APIs directly from your mobile or web app using **any LLM SDK** without exposing private API keys. The only changes in your app are to replace:
1. The LLM API URL with the Backmesh Gatekeeper URL.
2. The LLM private key with the authenticated user's JWT.

```js title="openai.ts"
import OpenAI from "openai";
import supabase from "supabase-js";

const BACKMESH_URL =
 "https://edge.backmesh.com/v1/proxy/gbBbHCDBxqb8zwMk6dCio63jhOP2/wjlwRswvSXp4FBXwYLZ1/v1";

const jwt = supabase.auth.session().access_token;
const client = new OpenAI({
  httpAgent: new HttpsProxyAgent(BACKMESH_URL),
  dangerouslyAllowBrowser: true, // no longer dangerous
  apiKey: jwt,
});
```

## How is the LLM API protected

- *JWT Authentication:* Requests are verified with [JWTs](https://firebase.google.com/docs/auth/admin/verify-id-tokens) from the app's authentication provider so only your users have access to the LLM API via Backmesh Gatekeeper.
- *Rate limits per user:* Configurable per-user rate limits to prevent abuse (e.g. no more than 5 OpenAI API calls per user per hour).
- *Resource access control:* Sensitive API resources like [Files](https://platform.openai.com/docs/api-reference/files) and [Threads](https://platform.openai.com/docs/api-reference/threads) are protected so only the users that create them can continue to access them.

For more details, see the [security documentation](/docs/security).

**LLM Private Key APIs Supported:**

- [x] OpenAI
- [x] Gemini
- [x] Anthropic
- [x] Cloudflare Workers AI

**Authentication Providers Supported:**

- [x] Supabase
- [x] Firebase

Leave a comment on [Discord](https://discord.backmesh.com) if your provider or LLM API is not supported.

## LLM Analytics without SDKs

Backmesh will automatically instrument LLM requests to let you understand LLM API usage across your users e.g. error rates, costs, response times across models, etc. Please leave a comment on [Discord](https://discord.backmesh.com) with more information about what LLM API endpoints you are using and what analytics you would like to see.

## Hosting

Backmesh is open source and can be [self hosted](/docs/selfhost) in your own Cloudflare account which includes a generous free tier. We also offer a hosted [SaaS](https://app.backmesh.com) with different [pricing plans](/pricing). LLM API analytics are displayed in the SaaS dashboard only though.

## Tutorials

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript web app using Supabase Authentication and OpenAI API](/docs/supabase)
