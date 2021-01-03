import express from 'express'
const router = express.Router()

import {
 getAllClients,
 registerClient,
 getClientProfile,
 updateClientProfile,
 deleteClientProfile
} from '../controllers/clientController.js'


router.route('/')
 .get(getAllClients)
router
 .route('/')
 .post(registerClient)
router
 .route('/profile/:id')
 .get(getClientProfile)
 .put(updateClientProfile)
 .delete(deleteClientProfile)


export default router