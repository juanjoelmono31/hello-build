import { Router } from 'express' 
import * as userController from '../controllers/user.controller'

const router = Router()

router.post('/', userController.postUser)
router.get('/', userController.getAllUser)
router.get('/:id', userController.getOneUser)
router.delete('/:id', userController.deletUSer)



export default router;