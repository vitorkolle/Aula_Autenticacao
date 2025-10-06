import { Router } from 'express'
import {register, login, forgotPassword, logout} from './controllers/authController.js'
import {profile, updateMe, deleteUser} from './controllers/userController.js'

const r = Router()

// * Rotas públicas
//cadastro de usuário
r.post('/auth/register', register)

//login de usuário
r.post('/auth/login', login)

//recuperação de senha do usuario
r.post('/auth/forgot-password', forgotPassword)

// * Rotas privadas
import authMiddleware from './middlewares/authMiddleware.js'

//logout de usuário
r.post('/auth/logout', authMiddleware, logout)

//get de perfil do usuário
r.get('/users/profile', authMiddleware, profile)

//update de perfil do usuário
r.put('/users/me', authMiddleware, updateMe)

//delete de usuário
r.delete('/users/:id', authMiddleware, deleteUser)

export default r