const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests for /products'
  });
});

router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  res.status(201).json({
    message: 'Handling POST requests for /products',
    createdProduct: product
  });
});

router.get('/:productId', (req, res, next)  => {
  const id = req.params.productId;
  if(id === 'special'){
    res.status(200).json({
      message: 'You got it',
      id: id
    })
  }
  else{
    res.status(200).json({
      message: 'You passed an ID'
    })
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product'
  });
});
router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product'
  });
});

module.exports = router;