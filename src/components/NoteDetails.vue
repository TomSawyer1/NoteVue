<template>
  <div class="container">
    <a @click="goBack">Retour aux notes</a>
    <div v-if="note">
      <input v-model="note.title" @input="updateNote" class="note-title" />
      <textarea v-model="note.content" @input="updateNote" class="note-content"></textarea>
      <p>Word Count: {{ wordCount }}</p>
      <p>Created: {{ new Date(note.created).toLocaleDateString() }}</p>
      <p>Last Updated: {{ new Date(note.updated).toLocaleDateString() }}</p>
      <button @click="deleteNote">Supprime note</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: null
    }
  },
  created() {
    const noteId = this.$route.params.id
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]')
    this.note = savedNotes.find(note => note.id == noteId)
  },
  computed: {
    wordCount() {
      if (this.note && this.note.content) {
        return this.note.content.split(/\s+/).filter(word => word).length
      }
      return 0
    }
  },
  methods: {
    updateNote() {
      this.note.updated = new Date().toISOString()
      const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]')
      const index = savedNotes.findIndex(n => n.id == this.note.id)
      savedNotes[index] = this.note
      localStorage.setItem('notes', JSON.stringify(savedNotes))
    },
    deleteNote() {
      const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]')
      const newNotes = savedNotes.filter(n => n.id !== this.note.id)
      localStorage.setItem('notes', JSON.stringify(newNotes))
      this.$router.push('/')
    },
    goBack() {
      this.$router.push('/')
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

.note-title {
  width: 100%;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.note-content {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}
</style>
