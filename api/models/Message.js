/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	loc: {
      type: 'json'
    }
  },
  findNear: (conditions, callback)=>{
  	Message.native((err, collections)=>{
  		if(err) return callback(err);
  		collections.geoNear({
  			type: 'Point',
  			coordinates: [conditions.lng, conditions.lat]
  		},{
  			limit: conditions.limit || 30,
  			maxDistance: conditions.maxDistance * 1000,
  			distanceMultiplier: 0.001,
  			spherical : true
  		},(err, message)=>{
  			if(err)return callback(err);
  			return callback(null, message.results);
  		})
  	});
  }
};

