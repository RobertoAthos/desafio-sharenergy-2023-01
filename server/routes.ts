import {Router} from 'express'
import { LoginUser, RegisterUser } from './Controller/AuthenticationController'
import { httpCat } from './Controller/HttpCat'
import { RandomDog } from './Controller/RandomDog'
import { RandomUsers } from './Controller/RandomUser'
import { createUser, deleteUser, getUser, updateUser,getUsers } from './Controller/UsersController'

const router = Router()


router.post('/signup', RegisterUser)
router.post('/signin', LoginUser)

//PRIVATE ROUTES
router.get('/randomUsers', RandomUsers)
router.get('/randomDogs', RandomDog)
router.get('/httpCat/:id', httpCat)
router.post('/registerUser', createUser)
router.get('/user/:id', getUser)
router.get('/users', getUsers)
router.patch('/:id/update', updateUser)
router.delete('/:id/delete', deleteUser)

export default router
