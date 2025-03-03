---
slug: llmcomp
title: Quickly compare cost and results of different LLMs on the same prompt
date: 2025-03-03
tags: [showcase]
authors: depombo
---

I often want a quick comparison of different LLMs to see the result+price+performance across different tasks or prompts.

So I put together [LLMcomp](https://llmcomp.backmesh.com)—a straightforward site to compare (some) popular LLMs on cost, latency, and other details in one place. It’s still a work in progress, so any suggestions or ideas are welcome. I can add more LLMs if there is interest. It currently has Claude Sonnet, Deep Seek and 4o which are the ones I compare and contrast the most.

I built it using a port of AgentOps' [tokencost](https://github.com/backmesh/tokencost) for the web to estimate LLM usage costs on the web and the code for the website is open source and roughly 400 LOC