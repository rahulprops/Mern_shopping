import express from 'express'
import { productCreate } from '../controller/product.contoller.js';
const productRouter=express.Router()

productRouter.post("/create",productCreate)

export default productRouter;