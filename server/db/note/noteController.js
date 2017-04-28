/* other files */
const Note = require('./noteModel.js');

const controller = {
  create: function(req, res, next) {
    console.log("server side");
 	  const name = req.body.name;
        console.log("SERVER SIDE IN CREATE NOTE: ", name);

    Note.findOne({ name: name })
	  .exec(function(err, note) {
    	if(err) {
    		console.log("error");
    	}
    	if (!note) {
      	let newNote = new Note({
          	name: name,
          	discription: ''
      	});
        console.log(newNote);
      	newNote.save(function(err, note) {
      		if (err) {
      		  	res.status(500).send(err);
      		}else {
            return res.json({
              success: true,
             });   
          }        	
   	    });
      } else {
        return res.json({
          success: false,
          error: "This note name already exists"
        })
      }
    });

  } 
};
module.exports = controller;
