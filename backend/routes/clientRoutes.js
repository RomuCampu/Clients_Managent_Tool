import express from 'express'
import {
  getAllClients,
  registerClient,
  getClientProfile,
  updateClientProfile,
  deleteClientProfile
} from '../controllers/clientController.js'

const router = express.Router()

router.route('/')
  .get(getAllClients);

router.route('/register')
  .post(registerClient);

router.route('/profile/:id')
  .get(getClientProfile)
  .put(updateClientProfile)
  .delete(deleteClientProfile);


export default router