const {
  addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteById, deleteNoteById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/note/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/note/{id}',
    handler: editNoteById,
  },
  {
    method: 'DELETE',
    path: '/note/{id}',
    handler: deleteNoteById,
  },
];

module.exports = routes;
