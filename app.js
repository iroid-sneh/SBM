import dotenv from "dotenv";
dotenv.config();
import express from "express";
import passport from "passport";
import path from "path";
import fs from "fs";
import session from "express-session";
import flash from "connect-flash";
import cors from "cors";
import routes from "./routes/index";
import MongoStore from "connect-mongo";
import { mongoConnection } from "./models/connection";
import expressEjsLayouts from "express-ejs-layouts";
import "./seeder/index";
import flashMessages from "./src/common/middleware/flashMessages";
import errorHandler from "./src/common/middleware/errorHandler";

const app = express();
const port = process.env.PORT || 2002;
mongoConnection();

app.use(express.static(path.join(__dirname, "public")));

if (process.env.ENV === "local") {
    app.use(
        session({
            secret: "sbm9321",
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 30 * 60 * 1000 },
            store: MongoStore.create({
                mongoUrl: process.env.MONGO_DB_URL,
            }),
        })
    );
} else {
    app.use(
        session({
            secret: "sbm9321",
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 30 * 60 * 1000 },
        })
    );
}

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", false);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(flash());
app.use((req, res, next) => {
    res.locals.messages = {
        success: req.session.success ? [req.session.success] : [],
        error: req.session.error ? [req.session.error] : [],
    };
    delete req.session.success;
    delete req.session.error;
    next();
});

app.use("/", flashMessages, routes);
app.use(errorHandler);

const isSecure = process.env.IS_SECURE === "true";

if (isSecure) {
    let options;
    const environment = process.env.ENV || "local";

    if (environment == "production") {
        options = {
            key: fs.readFileSync(
                `${process.env.SSL_CERT_BASE_PATH}/private.key`
            ),
            cert: fs.readFileSync(`${process.env.SSL_CERT_BASE_PATH}/cert.crt`),
        };
    } else {
        options = {
            key: fs.readFileSync(
                `${process.env.SSL_CERT_BASE_PATH}/privkey.pem`
            ),
            cert: fs.readFileSync(`${process.env.SSL_CERT_BASE_PATH}/cert.pem`),
        };
    }
    var https = require("https").Server(options, app);
    https.listen(port, "0.0.0.0", () => {
        console.log(
            `Https server is running on  https://${process.env.LOCAL_IP_ADDRESS}:${process.env.PORT}`
        );
    });
} else {
    var http = require("http").Server(app);
    http.listen(port, "0.0.0.0", () => {
        console.log(
            `Listening on port: ${process.env.APP_URL}:${process.env.PORT}`
        );
    });
}
