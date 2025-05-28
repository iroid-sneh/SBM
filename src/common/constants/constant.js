module.exports = {
    baseUrl(path = null) {
        let url = `${process.env.APP_URL}:${process.env.PORT}`;
        if (process.env.ENV !== "production") {
            url = `${process.env.APP_URL}:${process.env.PORT}`;
        }
        return url + (path ? `/${path}` : "");
    },

    apiBaseUrl(path = null) {
        let url = `${process.env.APP_URL}:${process.env.PORT}/api/v1`;
        if (process.env.ENV !== "production") {
            url = `${process.env.APP_URL}:${process.env.PORT}/api/v1`;
        }
        return url + (path ? `/${path}` : "");
    },

    BCRYPT: {
        SALT_ROUND: 12,
    },

    JWT: {
        SECRET: "3921mbs",
        EXPIRES_IN: "1 YEAR",
    },

    PLATFORM: {
        ANDROID: "Android",
        IOS: "iOS",
    },
};
