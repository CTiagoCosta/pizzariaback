import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListcategoryController } from "./controllers/category/ListcategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// -- Rotas User --
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/me', isAuthenticated, new DetailUserController().handle); 

//Rotas Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListcategoryController().handle)

//Rotas product
router.post('/product', isAuthenticated, new CreateProductController().handle)

export { router };