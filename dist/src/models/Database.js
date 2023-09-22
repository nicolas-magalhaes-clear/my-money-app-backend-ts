"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function mongooseConnection() {
    try {
        console.log('Connecting to database');
        mongoose_1.default.connect('mongodb://localhost/mymoney');
        console.log('Database connected');
    }
    catch (error) {
        console.log('Erro na conexão:', error);
    }
}
exports.default = mongooseConnection;
