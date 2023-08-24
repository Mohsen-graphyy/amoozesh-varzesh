<template>
  <div class="bg-white rounded-xl w-full flex flex-row md:flex-col items-center p-4">
    <div class="w-16 h-16 shadow-xl shadow-beta-green-100/20 bg-beta-green-100 rounded-full flex justify-center items-center border-8 border-gray-100">
      <base-icon :icon-path="iconPath" svg-class="w-4 stroke-white"/>
    </div>
    <p class="font-bold mr-4 text-gray-700 md:text-sm md:mt-4 md:mr-0">{{ title }}</p>
    <span class="hidden md:inline-block w-5 h-1 bg-gray-300 rounded mt-4"></span>
  </div>
</template>
<script>
export default{
props:{
  iconPath: {
    type: String,
    requierd: true
  },
  title:{
    type: String,
    requierd: true
  }
}
}
</script>

