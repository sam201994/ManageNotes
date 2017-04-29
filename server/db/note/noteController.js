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
  },
  updateNote: function(req, res){
    console.log("INSIDE CONTORLLER FOR UPDATE: ", req.body);
    Note.findById(req.body.id, function (err, note) {  
    // Handle any possible database errors
    if (err) {
      console.log("EROR: ", err);
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.

        note.discription = req.body.discription 
        // Save the updated document back to the database
        note.save(function (err, note) {
          console.log("INSIDE SAVE");
            if (err) {
              console.log("INSIDE SAVE ERROR", err);
                res.status(500).send(err)
            }
            return res.json({ success: true});
        });
    }
  });
  }
};
module.exports = controller;


