# README

## Sitemap:

### Core
```
/
/about
/privacy
/terms
/affiliate-disclosure
/dmca
```

### Blog
```
/blog
/blog/[slug]
/category/[slug]
```

### Tools
```
- /tools
- /tools/[slug]
```

These are to represent actual online browser-based tools that the website has, for downloading things, etc. as a long form page with the hero area at the top for the browser based tool.

Additionally, if we don't have a browser based tool, then we can use the same (or similar) landing page to represent a tool that we have for sale on our store (https://store.serp.co) and use the page as like a long for sales lander, with a CTA at the top of the page in place of where the browser based tool would be.

It would be good to have some kind of indicator/flag/config that the user could setup to determine which version of the page to show.

- ToolTemplate
- SalesToolTemplate

> To mark a tool as external/sales in the future, just update the tools.json config file and set type: "external" along with the externalUrl and price.

### 