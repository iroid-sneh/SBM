module.exports = {
    baseUrl(path = "") {
        const url = `${process.env.APP_URL}:${process.env.PORT}`;
        return `${url}${path.startsWith("/") ? path : "/" + path}`;
    },

    apiBaseUrl(path = "") {
        const url = `${process.env.APP_URL}:${process.env.PORT}/api/v1`;
        return `${url}${path.startsWith("/") ? path : "/" + path}`;
    },

    JWT: {
        SECRET: process.env.JWT_SECRET || "3921mbsyletaidemmi", // 1293sbmimmediately
        ACCESS_EXPIRES_IN: "15m", // Short-lived access token (15 minutes)
        REFRESH_EXPIRES_IN: "7d", // Long-lived refresh token (7 days)
    },

    TOKEN_EXPIRY_HOURS: {
        ACCESS: 1, // for DB TTL indexing (if storing access tokens)
        REFRESH: 168, // 7 days in hours
    },

    PLATFORM: {
        ANDROID: "Android",
        IOS: "iOS",
    },
};
