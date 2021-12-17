<template>
  <div class="py-6">
    <div class="flex justify-between items-center border-b pb-2 mb-4">
      <h2 class="fsize20 font-bold family-lato">Key Dates</h2>
      <p class="text-0053AB fsize14 font-medium family-lato">+Add a Key Date</p>
    </div>
    <vc-calendar title-position="left" />

    <div
      class="flex justify-between items-center border-box-l rounded-3px px-4 py-2 mb-2"
    >
      <div class="flex items-start">
        <div class="icon-border-all rounded-full p-2">
          <img src="@/assets/image/house.png" alt="home-icon" class="w-6 h-6" />
        </div>
        <div class="ml-4 text-left">
          <h2 class="family-lato fsize18 font-bold text-black">
            Home Inspection
          </h2>
          <p class="family-lato fsize14 font-medium text-0053AB">
            +Add Inspector Details
          </p>
          <p class="family-lato fsize12 font-normal text-D70909">Today</p>
        </div>
      </div>
      <p class="family-lato text-black fsize14 font-bold">Wed<br />17 Oct</p>
    </div>

    <div
      class="flex justify-between items-center border-box-l rounded-3px px-4 py-2 mb-2"
    >
      <div class="flex items-start">
        <div class="icon-border-all rounded-full p-2">
          <img
            src="@/assets/image/appraisal.png"
            alt="home-icon"
            class="w-6 h-6"
          />
        </div>
        <div class="ml-4 text-left">
          <h2 class="family-lato fsize18 font-bold text-black">Apprasial</h2>
          <p class="family-lato fsize14 font-medium text-black opacity-70">
            Bank of america
          </p>
          <p class="family-lato fsize12 font-normal text-D70909">
            Due in 3 Days
          </p>
        </div>
      </div>
      <p class="family-lato text-black fsize14 font-bold">Sat<br />20 Nov</p>
    </div>

    <div
      class="flex justify-between items-center border-box-l rounded-3px px-4 py-2 mb-2"
    >
      <div class="flex items-start">
        <div class="icon-border-all rounded-full p-2">
          <img
            src="@/assets/image/deadline.png"
            alt="home-icon"
            class="w-6 h-6"
          />
        </div>
        <div class="ml-4 text-left">
          <h2 class="family-lato fsize18 font-bold text-black">NHD Due</h2>
          <p class="family-lato fsize14 font-medium text-black opacity-70">
            New Venture Escrow
          </p>
          <p class="family-lato fsize12 font-normal text-black opacity-60">
            Due in 10 days
          </p>
        </div>
      </div>
      <p class="family-lato text-black fsize14 font-bold">Tue<br />30 Nov</p>
    </div>

    <p class="family-lato fsize16 font-medium text-right text-0053AB mt-3 mb-4">
      +2 Milestones
    </p>

    <div
      class="flex justify-between items-center border-box-l rounded-3px px-4 py-2 mb-2"
    >
      <div class="flex items-start">
        <div class="icon-border-all rounded-full p-2">
          <img src="@/assets/image/close.png" alt="home-icon" class="w-6 h-6" />
        </div>
        <div class="ml-4 text-left">
          <h2 class="family-lato fsize18 font-bold text-black">Closing</h2>
          <p class="family-lato fsize14 font-medium text-black opacity-70">
            New Venture Escrow
          </p>
          <p class="family-lato fsize10 font-normal text-black opacity-60">
            Due in 30 days
          </p>
        </div>
      </div>
      <p class="family-lato text-black fsize14 font-bold">Fri<br />15 Dec</p>
    </div>
  </div>
</template>
