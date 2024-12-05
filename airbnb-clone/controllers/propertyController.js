// controllers/propertyController.js
const Property = require('../models/Property');

// Add Property
const addProperty = async (req, res) => {
  const { title, description, price, location } = req.body;
  const property = new Property({
    title,
    description,
    price,
    location,
    owner: req.user.id, // Get from JWT
  });

  await property.save();
  res.status(201).json(property);
};

// Get All Properties
const getProperties = async (req, res) => {
  const properties = await Property.find().populate('owner');
  res.json(properties);
};

// Update Property
const updateProperty = async (req, res) => {
  const { propertyId } = req.params;
  const { title, description, price, location } = req.body;

  const property = await Property.findById(propertyId);

  if (!property || property.owner.toString() !== req.user.id) {
    return res.status(404).json({ message: 'Property not found or unauthorized' });
  }

  property.title = title;
  property.description = description;
  property.price = price;
  property.location = location;

  await property.save();
  res.json(property);
};

// Delete Property
const deleteProperty = async (req, res) => {
  const { propertyId } = req.params;

  const property = await Property.findById(propertyId);

  if (!property || property.owner.toString() !== req.user.id) {
    return res.status(404).json({ message: 'Property not found or unauthorized' });
  }

  await property.remove();
  res.json({ message: 'Property removed' });
};

module.exports = { addProperty, getProperties, updateProperty, deleteProperty };
