import mongoose from 'mongoose'

const ClientSchema = mongoose.Schema({
 businessName: {
  type: String,
  required: true
 },
 website: {
  type: String,
  required: true,
  unique: true
 },
 country: {
  type: String,
  required: true
 },
 address: {
  type: String,
  required: true,
  unique: true
 },
 email: {
  type: String,
  required: true,
  unique: true
 },
 product: {
  type: String,
  required: true
 },
 contact_person: {
  name: {
   type: String,
   required: true
  },
  email: {
   type: String,
   required: true,
   unique: true
  },
  phone: {
   type: String,
   required: true,
   unique: true
  },
  language: {
   type: String,
   required: true
  }
 }
},
 {
  timestamps: true
 })


const Client = mongoose.model('Client', ClientSchema)

export default Client