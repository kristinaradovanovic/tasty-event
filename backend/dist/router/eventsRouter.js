"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("../data"));
const eventsRouter = express_1.default.Router();
eventsRouter.get('/', (req, res) => {
    res.json(data_1.default);
});
exports.default = eventsRouter;
