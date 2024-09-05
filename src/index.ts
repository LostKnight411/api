import express from "express";
const app = express();

import healthcheck from "./endpoints/healthcheck.js";
app.use("/healthcheck", healthcheck);

import makers from "./endpoints/makers/makers.js";
app.use("/makers", makers);

import pagefind from "./endpoints/pagefind.js";
app.use("/pagefind", pagefind);

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
