---
sidebar_position: 2
slug: /security
---

# Security Considerations

## Authentication vs Authorization

Let's quickly go over authorization and the two different types of authentication:

1. Authentication verifies someone is who they say they are.

   - User authentication means we can identify which user is making a request and whether the user in question is valid.
   - Client app authentication means we can verify that the request is originating from a valid and untampered app client.

2. Authorization verifies that someone has access to something specific and grants access if applicable. Authorization requires authentication to happen first.

For example, Firebase provides user authentication, but only properly configured Firestore security rules provide authorization to your database. Furthermore, only adding Firebase AppCheck can provide client app authentication. More about that [here](https://firebase.google.com/docs/firestore/security/overview).

## How does Backmesh protect your LLM API

Backmesh protects your LLM API in four different ways:

1. JWT user authentication to ensure that requests to the LLM API come from one of your users. However, this by itself does not provide authorization about which specific users are allowed to make which requests to the LLM API, or how many requests a specific user can make.

2. Backmesh lets you set rate limits for each of your users e.g. no user should be calling a given API more than X times per hour. A screenshot from the dashboard:

![ratelimit](/ratelimit.png)

3. Backmesh implements resource-level access control for sensitive API resources, such as [Files](https://platform.openai.com/docs/api-reference/files) and [Threads](https://platform.openai.com/docs/api-reference/threads). This ensures that only the users who create these types of resources can continue to access them.

4. Backmesh has a whitelist of endpoints that it will allow for each LLM API. For example, endpoints such as [`/administration`](https://platform.openai.com/docs/api-reference/administration) in OpenAI can modify your OpenAI account and are not included in the whitelist as your app shouldn't need access. If you find that you have a use case for an endpoint that is not whitelisted in an LLM API, or you would like to be able to configure this whitelist in the Backmesh dashboard please email us, message us on Discord so we can better understand your use case and build a feature that serves your needs.
