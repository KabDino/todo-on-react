import firebase from '../firebase';
const db = firebase.firestore();

export const todoAPI = {
  getTodo() {
    return db.collection('todo').get();
  },

  addTodo(newTodo) {
    return db.collection('todo').doc(String(newTodo.id)).set(newTodo);
  },

  deleteTodo(id) {
    return db.collection('todo').doc(id).delete();
  },

  updateNameTodo(id, name) {
    return db.collection('todo').doc(id).update({ name });
  },

  changeCompleted(id, completed) {
    return db.collection('todo').doc(id).update({ completed: !completed });
  },
};
