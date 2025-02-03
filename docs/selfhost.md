---
sidebar_position: 3
slug: /selfhost
---

# Self host

Backmesh is open source and is hosted Cloudflare's Workers and [KV](https://developers.cloudflare.com/kv/) which both have a generous free tier. This tutorial will get Backmesh deployed to your own account. Check out the pricing and usage limits for the different [Cloudflare worker plans](https://developers.cloudflare.com/workers/platform/limits/) and the [KV datstore](https://developers.cloudflare.com/kv/platform/pricing/). Go ahead and create a Cloudflare account [first](https://dash.cloudflare.com) if you don't have one. Make sure you have npm and yarn installed as well.

1. Clone the backmesh repo and install its dependencies

```bash
git clone git@github.com:backmesh/backmesh.git
cd backmesh
yarn install
```

2. Connect the local [wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) to your Cloudflare account.

```bash
npx wrangler login
```

3. Create a KV Namespace. Replace `BACKMESH_KV` with the desired name for your namespace.

```bash
npx wrangler kv:namespace create "BACKMESH_KV"
```

After running the above command, you’ll see an output like this:

```bash
✨ Success!
Add the following to your configuration file in your kv_namespaces array:

{ binding = "BACKMESH_KV", id = "xxxxxxxxxxxxxxxxxxxx" }
```

4. Replace the copied KV binding ID with the `placeholder` one in the `wrangler.toml` within the cloned backmesh repo. This will bind the KV created in the CLI with the Cloudlflare worker we are about to deploy.

5. Deploy Backmesh!

```bash
yarn deploy
```

6. Now you can follow [this](https://developers.cloudflare.com/workers/configuration/routing/) Cloudflare tutorial to setup a route for your worker so that it can start receiving inbound HTTP requests from your web or mobile app.

7. Navigate to your worker settings and add the `BACKMESH_FIREBASE_KEY` variable along with a secret `PASSWORD`.

8. You can now use your own Backmesh proxy. To make a request, you will need a `BACKMESH_UID`, which can be extracted from the JWT associated with your `BACKMESH_FIREBASE_KEY`. The following cURL command demonstrates how to create a new proxy using Firebase and OpenAI:

```bash
curl --request POST \
  --url <YOUR_BACKMESH_PROXY_URL>/v1/crud/<BACKMESH_UID> \
  --header 'authorization: Bearer <JWT>' \
  --header 'content-type: application/json' \
  --data '{
    "id": null,
    "proxyUrl": null,
    "authType": "Firebase",
    "authAppId": "<FIREBASE_APP_ID>",
    "authPublicKey": "<FIREBASE_API_KEY>",
    "apiUrl": "https://api.openai.com",
    "apiReqHeader": "Authorization",
    "apiPrivateKey": "<OPENAI_API_KEY>",
    "rateLimit": 10,
    "rateLimitUnit": "minute"
}'
```
