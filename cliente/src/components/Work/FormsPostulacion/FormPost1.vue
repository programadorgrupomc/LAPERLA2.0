<template>
  <div>
    <!-- Use kebab-case for component names in templates -->
    <FormPost1Es class="hidden lg:block" />
    <FormPost1Mobile class="lg:hidden" />
  </div>
</template>

<script>
// Use PascalCase for component names in JavaScript
import FormPost1Es from './FormsF1/Formpost1Es.vue';
import FormPost1Mobile from './FormsF1/FormPost1Mobile.vue';

export default {
  components: {
    // Register components with kebab-case in the components section
    FormPost1Es,
    FormPost1Mobile,
  },
};
</script>
