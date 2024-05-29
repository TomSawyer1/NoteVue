<template>
  <div class="note-detail">

    <header class="note-header">
      <button @click="goBack" class="back-button">Back << </button>
    </header>


    <div v-if="note" class="note-content">
      <input v-model="note.title" class="note-title" placeholder="Title"/>

      <textarea v-model="note.content" class="note-body" placeholder="..."></textarea>

      
      <p class="note-meta">Created: {{ formatDate(note.created) }}</p>
      <p class="note-meta">Updated: {{ formatDate(note.updated) }}</p>
      <div class="buttons">

        <button @click="saveNote" class="save-note">Save</button>
        <button @click="deleteNote" class="delete-note">Del</button>

      </div>

    </div>

    <div v-else class="select-note">
        Take one note !!!
    </div>

  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: false
    }
  },
  methods: {
    goBack() {
      this.$emit('deselectNote');
    },
    saveNote() {
      this.$emit('saveNote');
    },
    deleteNote() {
      this.$emit('deleteNote');
    },
    formatDate(date) {
      const options = {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  }
}
</script>

<style scoped>


body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5; 
}


.note-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff; 
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-button {
  background-color: #9147ff; 
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #5f2aff; 
}

.note-content {
  margin-bottom: 20px;
}

.note-title {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.note-body {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.note-meta {
  margin-bottom: 10px;
  color: #666;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.save-note,
.delete-note {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-note {
  background-color: #9147ff; 
  color: #fff;
}

.save-note:hover {
  background-color: #5f2aff; 
}

.delete-note {
  background-color: #ff3b30; 
  color: #fff;
}

.delete-note:hover {
  background-color: #d63d33; 
}


.select-note {
  text-align: center;
  color: #888;
}
</style>


