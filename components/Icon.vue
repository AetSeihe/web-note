<template>
    <icomoon :iconSet="iconSet" v-bind="$props" />
</template>
  
<script>
import { Icomoon } from "vue-icomoon";
import iconSet from "@/assets/fonts/icons.json";

export default {
    name: "Icon",
    components: { Icomoon },
    setup() {
        return {
            iconSet,
        };
    },
};
</script>