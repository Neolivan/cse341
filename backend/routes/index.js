import { Router } from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { getData } from "../controllers/professional.js";

const routes = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


routes.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, '../../frontend', 'index.html');
    res.sendFile(htmlPath);
});
routes.get('/professional',getData);

export {routes}