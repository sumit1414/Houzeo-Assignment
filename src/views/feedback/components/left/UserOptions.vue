<template>
  <div>
    <div class="px-3">
      <img src="@/assets/image/logo.png" alt="logo" />
    </div>
    <div class="flex items-center justify-between mt-6 px-3 cursor-pointer">
      <div class="flex items-center">
        <img
          src="@/assets/image/avatar1.png"
          alt="user-icon"
          class="w-10 h-10"
        />
        <p class="text-white fsize16 family-lato ml-2">Lori Hofstadter</p>
      </div>
      <chevron-down-icon
        size="1.5x"
        class="text-white opacity-50"
      ></chevron-down-icon>
    </div>
    <ul class="mt-1">
      <li
        class="flex items-center px-4 py-2 mb-2 cursor-pointer"
        v-for="(item, index) in lists"
        :key="'item-' + index"
        :class="{
          'bg-white text': item.text === 'Tell us your feedback',
          'text-033363': item.text === 'Tell us your feedback',
        }"
      >
        <img :src="item.img" alt="shopcart" />
        <p
          :class="{ 'text-033363': item.text === 'Tell us your feedback' }"
          class="text-white fsize16 family-lato ml-4"
        >
          {{ item.text }}
        </p>
      </li>
    </ul>

    <div class="px-3 mt-6">
      <div>
        <div class="relative">
          <img
            src="@/assets/image/Group.png"
            alt="image"
            class="mx-auto w-full"
          />
          <div class="absolute topright-in">
            <p
              class="fsize12 font-bold bg-818181 family-lato text-white left-chips mb-1"
            >
              0 Offers Received
            </p>
            <p
              class="fsize12 font-bold w-auto family-lato bg-F05D29 text-white left-chips"
            >
              0 Offers Received
            </p>
          </div>
          <p
            class="fsize14 absolute family-lato text-white text-lefttop font-semibold"
          >
            5201 S Quincy St<br />
            Tampa, FL 33611
          </p>
        </div>
        <div
          class="flex items-center bg-white p-3 rounded-b-3px justify-between"
        >
          <div>
            <p class="famliy-lato fsize14">Listing Status:</p>
            <p class="fsize16 font-semibold family-lato">Sale Pending</p>
          </div>
          <img
            src="@/assets/image/attach-interface-clip-symbol.png"
            alt="attach-icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ChevronDownIcon } from "vue-feather-icons";
export default {
  data() {
    return {
      lists: [
        {
          img: require("@/assets/image/home.png"),
          text: "All Property",
          route: "",
        },
        {
          img: require("@/assets/image/star.png"),
          text: "Tell us your feedback",
        },
        {
          img: require("@/assets/image/offer.png"),
          text: "Submitted Offers",
        },
      ],
    };
  },
  components: {
    ChevronDownIcon,
  },
};
</script>
