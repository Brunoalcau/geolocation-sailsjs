/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	dummy: (req, res)=>{
		Message.create({
			name: 'Unidade 85',
			loc :[ -65.8716805, 48.1804069 ]
		},(err, message)=>{
			if(err) return res.negatiate(err);
			console.log('Message Create', message);
			res.ok()
		});
		Message.create({
			name: 'Unidade 15',
			loc : [ -73.5647636, 45.5158157 ]
		},(err, message)=>{
			if(err) return res.negatiate(err);
			console.log('Message Create', message);
			res.ok()
		});
	},
	search: (req, res)=>{
		var conditions  = {
			lng: parseFloat(req.param('lng')) || 0,
			lat: parseFloat(req.param('lat')) || 0,
			maxDistance: parseFloat(req.param('maxDistance')) || 1000,
			limit: parseInt(req.param('limit')) || 30,
		};
		
		Message.findNear(conditions, (err, result)=>{
			if(err) return res.negatiate(err);
			return res.json(result);
		});
	}
};

