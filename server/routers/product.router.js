import express from 'express'
import { productCreate } from '../controller/product.contoller.js';
import { authUser } from '../middleware/auth.middleware.js';
const productRouter=express.Router()

productRouter.post("/create",authUser,productCreate)

export default productRouter;