<template>
  <div class="note-item" @click="selectNote(note)">
    <div class="nmeta">{{ formatDate(note.created) }}</div>
    <div class="ntitle">{{ note.title || 'New note' }}</div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectNote() {
      this.$emit('selectNote', this.note);
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
.note-item {
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s;
}

.note-item:hover {
  background-color: #f5f5f5;
}

.ntitle {
  color: black;
}

.nmeta {
  font-size: 0.8em;
  color: #777;
}
</style>
