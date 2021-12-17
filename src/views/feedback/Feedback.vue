<template>
  <div class="flex h-full">
    <div class="w-1/6 py-3 h-full bg-033363 fixed left-0">
      <UserOptions />
    </div>

    <div class="w-7/12 bg-red pl-8 fixed left-16-h h-full custom-scrollbar">
      <FeedbackDetails />
    </div>
    <div class="w-1/4 bg-yellow px-8 fixed right-0 custom-scrollbar h-full">
      <DateView />
    </div>
  </div>
</template>
<script>
import UserOptions from "./components/left/UserOptions.vue";
import FeedbackDetails from "./components/middle/FeedbackDetails.vue";
import DateView from "./components/right/DateView.vue";
import "@/assets/css/index.css";
export default {
  data() {
    return {};
  },
  components: {
    UserOptions,
    FeedbackDetails,
    DateView,
  },
};
</script>
