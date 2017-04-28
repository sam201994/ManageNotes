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
          	discription: 'hello dis'
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

  },

  getNotes: function(req, res) {
     Note.find({}, function(err, users){

      let allNotes = {}

      users.forEach(function(note) {
          allNotes[note.name] = {name: note.name, discription: note.discription, id: note._id}
      });
      return res.json({notes: allNotes});  

    })
  }
};
module.exports = controller;
