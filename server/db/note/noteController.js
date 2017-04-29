/* other files */
const Note = require('./noteModel.js');

const controller = {

  create: function(req, res, next) {

 	  const name = req.body.name;

    Note.findOne({ name: name })
	  .exec(function(err, note) {
    	if(err) {
    		console.log("error");
    	}
    	if(!note) {
      	let newNote = new Note({
          	name: name,
          	discription: ''
      	});
      	newNote.save(function(err, note) {
      		if (err) {
      		  	res.status(500).send(err);
      		}else {
            return res.json({
              success: true,
             });   
          }        	
   	    });
      }else {
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
          allNotes[note.name] = {
           name: note.name, 
           discription: note.discription, 
           id: note._id,
           tags: note.tags
         }
      });
      return res.json({notes: allNotes});  
    })
  },

  updateNote: function(req, res){

    Note.findById(req.body.id, function (err, note) {  
      if (err) {
        res.status(500).send(err);
      }else {
        note.discription = req.body.discription 
        note.save(function (err, note) {
            if (err) {
              res.status(500).send(err)
            }
          return res.json({ success: true});
        });
      }
    });
  },

  updateTag: function(req, res) {

    Note.findById(req.body.id, function (err, note) {  
      if (err) {
        res.status(500).send(err);
      }else {
        note.tags.push(req.body.tag)  
        note.save(function (err, note) {
            if (err) {
              res.status(500).send(err)
            }
          return res.json({ success: true});
        });
      }
    });
  },

  deleteNote: function (req, res) {


    Note.findByIdAndRemove(req.query.id, function (err, note) {  
      if(err) {
        return res.json({error: err})
      }else {
        console.log("successfull deleted")
        const response = {
          message: "note successfully deleted",
          success: true
        };
        return res.json(response);
      }
    });
  }
  
};

module.exports = controller;


