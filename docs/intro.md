---
sidebar_position: 1
slug: /
---

# Introduction

Backmesh lets any mobile or web app (Javascript, Native Mobile, Flutter, React, React Native, etc) call LLM private key APIs (OpenAI, Anthropic and Google Gemini) without writing any backend code in a server or cloud function.

## How Backmesh works

The Backmesh proxy uses your authentication provider's JWT to make sure only your users can call the LLM API and enforces rate limits per user e.g. no user should be calling the openAI API more than 5 times per hour. Backmesh keeps your private API keys securely encrypted at all times and is hosted on Cloudflare's edge to offer lower response times than most servers and cloud functions.

## Zero config LLM Analytics

Backmesh will automatically instrument LLM requests to let you understand LLM API invocations per user e.g. error rates, token usage, costs, response times across models, etc

## Tutorials

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript web app using Supabase Authentication and OpenAI API](/docs/supabase)
