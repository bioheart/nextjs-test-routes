# Test multiple routes to the same template.
## Target page
- /pages/testing.js

## Index page
- /pages/index.js

## Route config 
- next.config.js
example : { source: "URL that you want ", destination: "Page directory" }]
```sh
module.exports = {
    async rewrites() {
        return [
            { source: "/testing", destination: "/testing" },
            { source: "/test2", destination: "/testing" },
            { source: "/test3", destination: "/testing" },
        ];
    }
};
```

## How to run this project 
- npm install 
- npm run dev

```
running at => localhost:3000
```
