---
sidebar_position: 4
slug: /debugging
---

# Debugging

You have created a Backmesh LLM API Gatekeeper and are ready to use it use one of the LLM APIs. But when you start sending requests you get an error. What do you do?

## 1. Make sure your LLM API key is properly configured

Call the API directly to make sure your private LLM key is properly configured using `curl` or a tool like Postman or Bruno. For the latter we have a predefined collection of requests defined for OpenAI, Anthropic and Gemini in our [GitHub repo](https://github.com/backmesh/backmesh/tree/main/collections).

![bruno llm api call](/debugging/bruno_llm_api.png)

## 2. Make sure your JWT is valid and properly generated

Create a test user with your authentication provider using email and password authentication. Then use the test user credentials to generate a fresh JWT using our generator tool for [Supabase](/supabase-jwt) or [Firebase](/firebase-jwt). Now try to call the LLM API via the JWT proxy using the generated token instead of the private LLM key, and the JWT proxy URL instead of the LLM API URL.

![bruno backmesh proxy call](/debugging/bruno_proxy.png)

## 3. Make sure your LLM SDK of choice is properly configured

Backmesh LLM API Gatekeepers are compatible with any LLM SDKs and app frameworks. Make sure your LLM SDK is properly configured to let you override the base URL of the LLM API with that of the Backmesh Gatekeeper. Check out our tutorials for examples on how to do this for different frameworks:

- [Flutter app using Firebase Authentication and Google Gemini API](/docs/firebase)
- [Javascript web app using Supabase Authentication and OpenAI API](/docs/supabase)
