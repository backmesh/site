---
sidebar_position: 2
slug: /considerations
---

# Security Considerations

Let's quickly go over authorization and the two different types of authentication:

1. Authentication verifies someone is who they say they are.

   a. User authentication means we can identify which user is making a request and whether the user in question is valid.
   b. Client app authentication means we can verify that the request is originating from a valid and untampered app client.

2. Authorization verifies that someone has access to something specific and grants access if applicable. Authorization requires authentication to happen first.

For example, Firebase provides user authentication, but only properly configured Firestore security rules provide authorization to your database. Furthermore, only adding Firebase AppCheck can provide client app authentication. More about that [here](https://firebase.google.com/docs/firestore/security/overview).

In the case of a public API proxy, Backmesh performs user authentication to ensure that requests to the proxy securing your private key API come from one of your users. This does not provide authorization about which specific users are allowed to make which requests to the proxy, or how many requests a specific user can make. However, Backmesh lets you set rate limits across all your users to reasonably protect your API resources e.g. no user should be calling a given API more than X times per hour. It is possible to integrate with Stripe to be able to set authorization access rules for users based on their payment plan. If you are interested in this email hello at backmesh dot com.
