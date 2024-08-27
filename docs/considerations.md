---
sidebar_position: 2
slug: /considerations
---

# Security Considerations

## Authentication vs Authorization

Let's quickly go over authorization and the two different types of authentication:

1. Authentication verifies someone is who they say they are.

   - User authentication means we can identify which user is making a request and whether the user in question is valid.
   - Client app authentication means we can verify that the request is originating from a valid and untampered app client.

2. Authorization verifies that someone has access to something specific and grants access if applicable. Authorization requires authentication to happen first.

For example, Firebase provides user authentication, but only properly configured Firestore security rules provide authorization to your database. Furthermore, only adding Firebase AppCheck can provide client app authentication. More about that [here](https://firebase.google.com/docs/firestore/security/overview).

## How does Backmesh protect your LLM API Proxy

Backmesh safeguards misuse of your LLM API proxy in four different ways:

1. Backmesh performs user authentication to ensure that requests to the proxy securing your private key API come from one of your users. This by itself does not provide authorization about which specific users are allowed to make which requests to the proxy, or how many requests a specific user can make.

2. Backmesh lets you set rate limits for each user to reasonably protect your API resources e.g. no user should be calling a given API more than X times per hour.

![ratelimit](/ratelimit.png)

3. Backmesh protects your LLM API proxy is by implementing resource-level access control for sensitive API resources, such as [Files](https://platform.openai.com/docs/api-reference/files) and [Threads](https://platform.openai.com/docs/api-reference/threads). This ensures that only the users who create these resources can continue to access them.

4. Backmesh has a whitelist of endpoints that it will allow from each LLM API. Endpoints such as [`/batch`](https://platform.openai.com/docs/api-reference/batch) and [`/administation`](https://platform.openai.com/docs/api-reference/administration) are not included for example. If you have a use case for an endpoint that is not whitelisted, or you would like to be able to configure this whitelist in the Backmesh dashboard please email us, message us on Discord or leave a comment in this [Github Issue](https://github.com/backmesh/backmesh/issues/1) so we can better understand and build for your use case.
