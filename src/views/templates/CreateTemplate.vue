<template>
  <ckeditor :editor="editor" v-model="editorData"></ckeditor>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import CKEditor from 'ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editor = defineRef<ClassicEditor>();
const editorData = defineRef<string>('');

defineComponent({
  components: { CKEditor },
  setup() {
    return {
      editor,
      editorData,
    };
  },
});
</script>
