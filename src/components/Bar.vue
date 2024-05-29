<template>
  <aside class="sidebar">
    <h1>Notes</h1>

    <button class="create-note" @click="createNote"> Create</button>

    <div class="notes-list">
      <Createnote
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @selectNote="selectNote"
      />
    </div>
    
  </aside>
</template>

<script>
import Createnote from './Createnote.vue';

export default {
  components: {
    Createnote
  },
  // Déclaration des props reçues par ce composant
  props: {
    // La prop 'notes' est un tableau qui est requis
    notes: {
      type: Array,
      required: true
    }
  },

  // emit est un event
  methods: {
    createNote() {
      this.$emit('createNote');
    },
    selectNote(note) {
      this.$emit('selectNote', note);
    }
  }
}
</script>

<style scoped>

.sidebar {
  width: 300px;
  background-color: #191919; 
  padding: 20px;
  border-right: 1px solid #444; 
  overflow-y: auto;
}


h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #9147ff; 
}


.create-note {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #9147ff; 
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease; 
}

.create-note:hover {
  background-color: #5f2aff; 
}
</style>


