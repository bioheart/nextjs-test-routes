module.exports = {
    async rewrites() {
        return [
            { source: "/testing", destination: "/testing" },
            { source: "/test2", destination: "/testing" },
            { source: "/test3", destination: "/testing" },
        ];
    }
};