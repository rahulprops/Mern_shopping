import express from 'express'
import { productCreate } from '../controller/product.contoller.js';
import { admin, authUser } from '../middleware/auth.middleware.js';
const productRouter=express.Router()

productRouter.post("/create",authUser,admin,productCreate)

export default productRouter;