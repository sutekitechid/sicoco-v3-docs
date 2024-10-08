<template>
  <div >
    <SPagination
      v-model="currentPage"
      :totalPages="totalPages"
      :totalItems="totalItems"
      :use-per-page=false
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 10, 
      totalItems: 100,
    };
  },
};
</script>
