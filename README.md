Test multilate routes to the same template.

Target page /pages/testing.js
Index page /pages/index.js

Route config next.config.js

// { source: "URL that you want ", destination: "Page directory" }
module.exports = {
    async rewrites() {
        return [
            { source: "/testing", destination: "/testing" },
            { source: "/test2", destination: "/testing" },
            { source: "/test3", destination: "/testing" },
        ];
    }
};
