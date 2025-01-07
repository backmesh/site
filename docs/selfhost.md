---
sidebar_position: 3
slug: /selfhost
---

# Self host

Backmesh is open source and is hosted Cloudflare's Workers and [KV](https://developers.cloudflare.com/kv/) which both have a generous free tier. This tutorial will get Backmesh deployed to your own account. Check out the pricing and usage limits for the different [Cloudflare worker plans](https://developers.cloudflare.com/workers/platform/limits/). Go ahead and create a Cloudflare account [first](https://dash.cloudflare.com) if you don't have one. Make sure you have npm and yarn installed as well.


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

3. Create a KV Namespace. Replace BACKMESH_KV with the desired name for your namespace.

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

6. Deploy Backmesh!

```bash
yarn deploy
```

7. Expose your Backmesh cloudflare worker. Now you can follow [this](https://developers.cloudflare.com/workers/configuration/routing/) Cloudflare tutorial to setup a route for your worker so that it can start receiving inbound HTTP requests from your web or mobile app.
