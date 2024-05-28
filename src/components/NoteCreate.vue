<template>
    <div class="container">
      <h1>Notes</h1>
      <button @click="createNote">Créer une nouvelle note</button>
      <div v-for="note in notes" :key="note.id" class="note-item">
        <p>{{ new Date(note.created).toLocaleDateString() }}</p>
        <router-link :to="'/note/' + note.id">{{ note.title }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notes: []
      }
    },
    created() {
      this.loadNotes()
    },
    methods: {
      loadNotes() {
        const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]')
        this.notes = savedNotes
      },
      saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes))
      },
      createNote() {
        const newNote = {
          id: Date.now(),
          title: 'Untitled note',
          content: '',
          created: new Date().toISOString(),
          updated: new Date().toISOString()
        }
        this.notes.push(newNote)
        this.saveNotes()
        this.$router.push('/note/' + newNote.id) // Redirect to the new note
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .note-item {
    margin-bottom: 10px;
  }
  </style>
  