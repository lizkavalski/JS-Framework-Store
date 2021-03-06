'use strict';

const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  item: { type: String},
  category: { type: String},
  description:{ type:String},
  img:{type:String},
  inStock:{type:Number, require:true},
  price:{type:Number, require:true},
  taxType: { type: String, reqired:true, enum: ['basic', 'except', 'import'] },
});

const storeModel = mongoose.model('store', storeSchema);

module.exports = storeModel;