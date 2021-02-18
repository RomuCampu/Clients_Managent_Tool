import mongoose from 'mongoose'

const ClientSchema = mongoose.Schema({
  clientDetails: {
    header: {
      type: String,
      default: ''
    },
    content: {
      type: [],
      default: ''
    },
  },
  businessName: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true,
    // unique: true
  },
  country: {
    type: String,
    required: true
  },
  address: {
    type: String,
    // unique: true
  },
  email: {
    type: String,
    required: true,
    // unique: true
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
    contact_email: {
      type: String,
      required: true,
      default: "no email provided"
    },
    phone: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true
    }
  }
},
  {
    timestamps: true
  }
)

const Client = mongoose.model('Client', ClientSchema)

export default Client