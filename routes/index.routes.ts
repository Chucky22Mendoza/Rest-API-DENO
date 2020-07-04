import { Router, Response } from "https://deno.land/x/oak/mod.ts";
import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/index.controllers.ts";

const router = new Router();

router.get('/', ({ response }: { response: Response }) => {
    response.body = 'Welcomo to my API with DENO'
});

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;