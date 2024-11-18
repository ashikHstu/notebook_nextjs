import { useState } from 'react';

const RightSidebar = ({ selectedOption, notes, addNote }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-3/4 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">{selectedOption}</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowModal(true)}
        >
          + Add Note
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Note</th>
            <th className="border border-gray-300 p-2">Tags</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id} className="text-center">
              <td className="border border-gray-300 p-2">{note.date}</td>
              <td className="border border-gray-300 p-2">{note.title}</td>
              <td className="border border-gray-300 p-2">{note.note}</td>
              <td className="border border-gray-300 p-2">
                {note.tags.join(', ')}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                  onClick={() => console.log('Mark as Completed', note.id)}
                >
                  Completed
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={() => console.log('Cancel', note.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-1/2">
            <h2 className="text-lg font-bold mb-4">Add New Note</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newNote = {
                id: Date.now(),
                date: formData.get('date'),
                title: formData.get('title'),
                note: formData.get('note'),
                tags: formData.get('tags').split(','),
              };
              addNote(newNote);
              setShowModal(false);
            }}>
              <input
                type="date"
                name="date"
                required
                className="block w-full p-2 border rounded-md mb-4"
              />
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="block w-full p-2 border rounded-md mb-4"
              />
              <textarea
                name="note"
                placeholder="Note"
                required
                className="block w-full p-2 border rounded-md mb-4"
              />
              <input
                type="text"
                name="tags"
                placeholder="Tags (comma-separated)"
                required
                className="block w-full p-2 border rounded-md mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
