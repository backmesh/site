---
sidebar_position: 1
slug: /
---

# Introduction

Backmesh is the Firebase for mobile and web apps (Javascript, Native Mobile, Flutter, React, React Native, etc) using generative AI private key APIs (OpenAI, Anthropic and Google Gemini). Backmesh tracks analytics and enforces rate limits per user without writing any backend code in a server or cloud function. Backmesh leverages your authentication provider's JWT to make sure only your users can use the AI proxy. The proxy supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) out of the box. SSE is used by [OpenAI](https://platform.openai.com/docs/api-reference/streaming) and other generative AI APIs to stream HTTP responses.

The Backmesh proxy is hosted on Cloudflare's edge to proxy requests to offer lower response times than most servers and cloud functions. Once it is set up, Backmesh lets you look at generative AI API invocations and errors per user and cumulatively. Check out the tutorials to see how to integrate Backmesh in your web or mobile app:

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript Web app using Supabase Authentication and OpenAI API](/docs/supabase)
