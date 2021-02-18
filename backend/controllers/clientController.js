import asyncHandler from "express-async-handler";
import Client from "../models/ClientModel.js";

// @description: CREATE a new client
// @route        POST /api/clients
// @access       PUBLIC
const registerClient = asyncHandler(async (req, res) => {
  const {
    clientDetails: {
      header,
      content
    },
    businessName,
    website,
    country,
    address,
    email,
    product,
    contact_person: {
      name,
      contact_email,
      phone,
      language
    },
  } = await req.body;

  const clientExists = await Client.findOne({ email });

  if (clientExists) {
    res.status(400);
    throw new Error("Client already exists.");
  }

  const client = await Client.create({
    clientDetails: {
      header,
      content
    },
    businessName,
    website,
    country,
    address,
    email,
    product,
    contact_person: {
      name,
      contact_email,
      phone,
      language
    },
  });

  if (client) {
    res.status(201).json({
      _id: client._id,
      clclientDetails: {
        header: client.clientDetails.header,
        content: client.clientDetails.content
      },
      businessName: client.businessName,
      website: client.website,
      country: client.country,
      address: client.address,
      email: client.email,
      product: client.product,
      contact_person: {
        name: client.contact_person.name,
        contact_email: client.contact_person.contact_email,
        phone: client.contact_person.phone,
        language: client.contact_person.language,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid client credentials.");
  }
});

// @description: READ all clients
// @route        GET /api/clients
// @access       PUBLIC
const getAllClients = asyncHandler(async (req, res) => {
  const clients = await Client.find({});

  if (clients) {
    res.json(clients);
  } else {
    throw new Error('There are no clients in the database')
  }
});

// @description: READ a client
// @route        GET /api/clients/:id
// @access       PUBLIC
const getClientProfile = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);

  if (client) {
    res.json({
      _id: client._id,
      clientDetails: {
        header: client.clientDetails.header,
        content: client.clientDetails.content
      },
      businessName: client.businessName,
      website: client.website,
      country: client.country,
      address: client.address,
      email: client.email,
      product: client.product,
      contact_person: {
        name: client.contact_person.name,
        contact_email: client.contact_person.contact_email,
        phone: client.contact_person.phone,
        language: client.contact_person.language,
      },
    });
  } else {
    res.status(404);
    throw new Error("Client not found");
  }
});

// @description: UPDATE a new client
// @route        PUT /api/client
// @access       PUBLIC
const updateClientProfile = asyncHandler(async (req, res) => {
  const clientToUpdate = await Client.findById(req.params.id)

  console.log(clientToUpdate);
  if (clientToUpdate) {
    clientToUpdate.clientDetails = {
      header: req.body.clientDetails.header || clientToUpdate.clientDetails.header,
      content: req.body.clientDetails.content || clientToUpdate.clientDetails.content
    }
    clientToUpdate.businessName = req.body.businessName || clientToUpdate.businessName
    clientToUpdate.website = req.body.website || clientToUpdate.website
    clientToUpdate.country = req.body.country || clientToUpdate.country
    clientToUpdate.address = req.body.address || clientToUpdate.address
    clientToUpdate.email = req.body.email || clientToUpdate.email
    clientToUpdate.product = req.body.product || clientToUpdate.product
    clientToUpdate.contact_person = {
      name: req.body.contact_person.name || clientToUpdate.contact_person.name,
      contact_email: req.body.contact_person.contact_email || clientToUpdate.contact_person.contact_email,
      phone: req.body.contact_person.phone || clientToUpdate.contact_person.phone,
      language: req.body.contact_person.language || clientToUpdate.contact_person.language
    }

    const updatedClient = await clientToUpdate.save();

    res.json(updatedClient);

  } else {
    res.status(404);
    throw new Error("Client not found.");
  }
});

// @description: DELETE a client
// @route        DELETE /api/client
// @access       PUBLIC
const deleteClientProfile = asyncHandler(async (req, res) => {
  const clientToDelete = await Client.findById(req.params.id)

  if (clientToDelete) {
    clientToDelete.delete()
    res.json({ message: 'Client successfully deleted' })
  } else {
    res.status(404);
    throw new Error('Client not found.')
  }
});

export {
  getAllClients,
  registerClient,
  getClientProfile,
  updateClientProfile,
  deleteClientProfile,
};
