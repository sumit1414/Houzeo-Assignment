<template>
  <div class="mt-8">
    <div class="flex items-center mb-4">
      <p class="text-D70909 font-bold fsize18 family-lato">Required</p>
      <p class="text-white bg-D70909 rounded-full w-4 h-4 fsize12 mx-2">8</p>
      <img src="@/assets/image/Polygon 3.png" alt="arrow-icon" />
    </div>
    <vsa-list
      class="shadow-accordion border-none rounded-3px max-w-full w-full head-sp-full"
    >
      <!-- Here you can use v-for to loop through items  -->
      <vsa-item>
        <vsa-heading>
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center">
              <img src="@/assets/image/avatar1.png" alt="avatar-icon" />
              <div class="ml-4">
                <p class="family-lato font-medium fsize16 text-black">
                  Free - Optional Services Real Estate Forms, Contracts and
                  Seller Disclosure Packet
                  <span class="border-0B5AA5 fsize12 dolor-chip ml-2">$1 </span>
                </p>
                <div class="flex items-center mt-2">
                  <p
                    class="family-lato font-normal fsize12 text-black opacity-50 text-left border-r-mute pr-2"
                  >
                    Listing Upgrades
                  </p>
                  <img src="@/assets/image/info.png" alt="png" class="ml-2" />
                </div>
              </div>
            </div>

            <div class="flex items-center">
              <img
                src="@/assets/image/wall-clock.png"
                alt="clock-icon"
                class="family-lato fsize13 font-bold"
              />
              <p class="family-lato fsize13 font-bold opacity-50 ml-1">5m</p>
            </div>
          </div>
        </vsa-heading>

        <vsa-content> This is the content </vsa-content>
      </vsa-item>
    </vsa-list>

    <div class="mt-2">
      <vsa-list
        class="shadow-accordion border-none bg-FAFAFC rounded-3px max-w-full w-full head-sp-full"
        initActive
      >
        <!-- Here you can use v-for to loop through items  -->
        <vsa-item>
          <vsa-heading>
            <div class="flex justify-between items-center w-full">
              <div class="flex items-center">
                <img src="@/assets/image/avatar1.png" alt="avatar-icon" />
                <div class="ml-4">
                  <p class="family-lato font-medium fsize16 text-black">
                    Clone Testing Payment of $25 to Add 1 Change
                    <span class="bg-0B5AA5 text-white fsize12 dolor-chip ml-2"
                      >$0
                    </span>
                  </p>
                  <div class="flex items-center mt-2">
                    <p
                      class="family-lato font-normal fsize12 text-black opacity-50 text-left border-r-mute pr-2"
                    >
                      Listing Upgrades
                    </p>
                    <img src="@/assets/image/info.png" alt="png" class="ml-2" />
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <img
                  src="@/assets/image/wall-clock.png"
                  alt="clock-icon"
                  class="family-lato fsize13 font-bold"
                />
                <p class="family-lato fsize13 font-bold opacity-50 ml-1">5m</p>
              </div>
            </div>
          </vsa-heading>

          <vsa-content>
            <div>
              <div class="flex items-center">
                <span
                  class="w-2 h-2 opacity-30 bg-black flex rounded-full"
                ></span>
                <p class="family-lato font-medium fsize14 ml-2">
                  Test task for Sanity Purpose
                </p>
              </div>
              <div class="flex items-center">
                <span
                  class="w-2 h-2 opacity-30 bg-black flex rounded-full"
                ></span>
                <p class="family-lato font-medium fsize14 ml-2">
                  Test task for Sanity Purpose
                </p>
              </div>
            </div>

            <div class="flex items-center mt-2">
              <p class="fsize14 family-lato font-medium mr-4">
                Takes less than 5 mins to complete. Let's start
              </p>
              <button
                class="bg-0B5AA5 text-white family-lato flex items-center py-2 px-4 rounded-3px fsize14 font-medium"
              >
                <img
                  src="@/assets/image/326664_launch_icon.png"
                  alt="share-icon"
                  class="mr-2"
                />Launch Now
              </button>
            </div>

            <div class="mt-6">
              <p class="family-lato fsize14 font-medium text-left">
                Complete the document and upload it here to mark this task
                complete.
              </p>
              <div class="uploader-box py-4 mt-4 bg-white">
                <h2 class="family-lato fsize20 font-bold">
                  Upload your images
                </h2>
                <p class="family-lato fsize14 font-normal opacity-50">
                  JPG, PNG, GIF, DOC, PDF, TXT
                </p>
                <img
                  src="@/assets/image/cloud-computing.png"
                  alt="upload-icon"
                  class="mx-auto"
                />
                <p class="family-lato fsize16 font-medium opacity-50">
                  Drag and drop or browse to choose a file
                </p>
              </div>
              <div class="flex justify-end">
                <button
                  class="bg-21BA45 text-white family-lato flex mt-4 items-center py-2 px-4 rounded-3px fsize14 font-medium"
                >
                  <img
                    src="@/assets/image/check-mark (1).png"
                    alt="share-icon"
                    class="mr-2"
                  />Mark as Complete
                </button>
              </div>
            </div>
          </vsa-content>
        </vsa-item>
      </vsa-list>

      <div class="mt-2">
        <div class="flex items-center mb-4 border-b w-2/5 pb-2 mt-2">
          <p class="text-0B5AA5 font-bold fsize16 family-lato">Under Review</p>
          <p class="text-white bg-0B5AA5 rounded-full w-4 h-4 fsize12 mx-2">
            4
          </p>
          <img src="@/assets/image/Polygon 4.png" alt="arrow-icon" />
        </div>

        <div class="flex items-center mb-4 border-b w-2/5 pb-2 mt-2">
          <p class="text-CFAB00 font-bold fsize16 family-lato">Completed</p>
          <p class="text-white bg-CFAB00 rounded-full w-4 h-4 fsize12 mx-2">
            3
          </p>
          <img src="@/assets/image/Polygon 4.png" alt="arrow-icon" />
        </div>

        <div class="flex items-center mb-4 border-b w-2/5 pb-2 mt-2">
          <p class="text-E27700 font-bold fsize16 family-lato">
            Optional Items
          </p>
          <p class="text-white bg-E27700 rounded-full w-4 h-4 fsize12 mx-2">
            1
          </p>
          <img src="@/assets/image/Polygon 4.png" alt="arrow-icon" />
        </div>

        <div class="flex items-center mb-4 border-b w-2/5 pb-2 mt-2">
          <p class="text-48AC00 font-bold fsize16 family-lato">
            Optional but Important Marketing
          </p>
          <p class="text-white bg-48AC00 rounded-full w-4 h-4 fsize12 mx-2">
            3
          </p>
          <img src="@/assets/image/Polygon 4.png" alt="arrow-icon" />
        </div>

        <div class="flex items-center mb-4 border-b w-2/5 pb-2 mt-2">
          <p class="text-666666 font-bold fsize16 family-lato">
            Cancelled Tasks
          </p>
          <p class="text-white bg-666666 rounded-full w-4 h-4 fsize12 mx-2">
            3
          </p>
          <img src="@/assets/image/Polygon 4.png" alt="arrow-icon" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger__icon--is-default:before {
  background-color: #4d4d4d !important;
  opacity: 40%;
}
.vsa-item__trigger__icon--is-default:before {
  transform: rotate(45deg) translate3d(17px, 4px, 0) !important;
}
.vsa-item__trigger__icon--is-default:after {
  transform: rotate(-45deg) translate3d(-12px, 9px, 0) !important;
}
.vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger__icon--is-default:before {
  width: 15px !important;
}
.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  background-color: #f4f5f6 !important;
}
</style>
