<template>
  <div class="bg-mainContentBackground py-24 sm:py-32 rounded-3xl">
    <section class="text-center">
      <div class="flex flex-col lg:flex-row justify-between items-center mx-4 sm:mx-8 md:mx-12 lg:mx-32 space-y-8 lg:space-y-0">
        <!-- First Div: Text on the Left -->
        <div class="flex flex-col items-center space-y-6 lg:w-1/2">
          <h1 class="font-bold text-2xl sm:text-3xl text-center">
            <span class="text-gray-900">Angel Joy Gabero is a </span>
            <span class="text-custom-orange">Singer </span> <span class="text-gray-900">and</span>
            <br><span class="text-custom-orange">Teacher</span>
          </h1>
          <p class="text-gray-600 max-w-full sm:max-w-lg mx-auto text-center sm:text-left">
            As a Singer and a Teacher, I am a highly motivated individual with a passion for learning new skills and a commitment to excellence. I strive for continuous improvement and growth in all areas, particularly in my craft. My goal is to leverage my skills and dedication to contribute effectively to various projects and performances while enhancing my expertise in the ever-evolving music landscape.
          </p>
        </div>
        <!-- Second Div: Image and Name on the Right -->
        <div class="flex flex-col items-center lg:w-1/2">
          <img src="/src/assets/images/profile1.jpg" alt="Angel" class="rounded-full w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 object-cover border-2 border-headerBackground">
          <p class="mt-4 text-gray-900 bg-loginButtonBackground px-2 border-2 border-custom-orange rounded-lg">
           Angel Joy Gabero
          </p>
          <button class="bg-loginButtonBackground hover:loginButtonBackgroundHover text-loginButtonText py-2 px-4 rounded border-2 border-custom-orange 
            lg:ml-0 md:mx-auto sm:mx-auto transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105 mt-4" 
            aria-label="Contact me">
            Contact me !!
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
