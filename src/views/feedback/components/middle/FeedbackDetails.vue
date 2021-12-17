<template>
  <div>
    <div class="flex py-4 bg-border-box">
      <div class="w-2/12 border-r">
        <h2 class="text-D70909 family-lato fsize22 font-bold">8</h2>
        <p class="text-black family-lato fsize14 font-semibold">Task Pending</p>
        <p class="text-black family-lato fsize12 font-normal opacity-50">
          18 Total Task
        </p>
      </div>
      <div class="w-2/12 border-r">
        <h2 class="text-black family-lato fsize22 font-bold">$1,400</h2>

        <p class="text-black family-lato fsize12 font-normal px-3 opacity-80">
          Your Potential Savings Via Houzeo
        </p>
      </div>
      <div class="w-2/12 border-r">
        <h2 class="text-black family-lato fsize22 font-bold">2</h2>
        <p class="text-black family-lato fsize14 font-semibold">
          Days on Market
        </p>
        <p class="text-black family-lato fsize12 font-normal opacity-70">
          Nov 16, 2021
        </p>
      </div>
      <div class="w-2/12 border-r">
        <h2 class="text-black family-lato fsize22 font-bold">13</h2>
        <p class="text-black family-lato fsize14 font-semibold">
          Days to Closing
        </p>

        <div class="flex justify-center items-center">
          <img src="@/assets/image/edit.png" alt="edit" class="mr-1" />
          <p class="text-black family-lato fsize12 font-normal opacity-70">
            Nov 25, 2021
          </p>
        </div>
      </div>

      <div class="w-1/3">
        <p class="text-black family-lato fsize14 font-semibold">Your Team</p>
        <div class="flex justify-center mt-2">
          <div>
            <img
              src="@/assets/image/avatar1.png"
              alt="avatar"
              class="rounded-full bg-gray-100 ring-2 ring-white"
              loading="lazy"
            />
          </div>

          <div class="neg-ml">
            <img
              src="@/assets/image/avatar1.png"
              alt="avatar"
              class="rounded-full bg-gray-100 ring-2 ring-white"
              loading="lazy"
            />
          </div>
          <div class="neg-ml">
            <img
              src="@/assets/image/avatar1.png"
              alt="avatar"
              class="rounded-full bg-gray-100 ring-2 ring-white"
              loading="lazy"
            />
          </div>
          <div class="neg-ml">
            <img
              src="@/assets/image/avatar1.png"
              alt="avatar"
              class="rounded-full bg-gray-100 ring-2 ring-white"
              loading="lazy"
            />
          </div>
          <div class="relative neg-ml">
            <img
              src="@/assets/image/Ellipse 44.png"
              alt="avatar"
              class="rounded-full w-40px h-40px bg-gray-100 ring-2 ring-white"
              loading="lazy"
            />
            <p
              class="fsize16 family-lato text-black absolute avatar-topleft opacity-30"
            >
              +10
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex p-4 mt-8 bg-border-box justify-between">
      <div class="flex items-center">
        <div class="bg-0B5AA5 flex items-center rounded-2px pd10px5">
          <p class="chips-tab fsize14 text-white font-medium family-lato">
            Tasks
          </p>
          <p class="bg-white text-0B5AA5 rounded-full w-4 h-4 fsize12 ml-2">
            8
          </p>
        </div>

        <p class="text-black opacity-70 fsize14 font-medium pl-4 family-lato">
          Offers (0)
        </p>
        <p class="text-black opacity-70 fsize14 font-medium pl-4 family-lato">
          Showings (0)
        </p>
      </div>

      <div>
        <button
          class="family-lato bg-0B5AA5 text-white flex items-center px-3 py-2 rounded-3px fsize14 font-medium"
        >
          <img
            src="@/assets/image/exchange.png"
            alt="exchange-icon"
            class="mr-2"
          />Change MLS Listing
        </button>
      </div>
    </div>

    <RequiredDetails />
  </div>
</template>
<script>
import RequiredDetails from "./RequiredDetails.vue";
export default {
  components: {
    RequiredDetails,
  },
};
</script>
