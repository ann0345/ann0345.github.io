<template>
  <div class="home">
    <DataTable />
  </div>
</template>

<script>
import DataTable from "@/components/organisms/DataTable";

export default {
  name: "TableView",
  components: {
    DataTable,
  },
};
</script>
