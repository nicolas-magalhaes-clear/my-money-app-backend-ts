"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const Database_1 = __importDefault(require("./src/models/Database"));
(0, Database_1.default)();
const app = (0, express_1.default)();
const port = 3003;
app.use('/', routes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
