import React from 'react'


const ProfileCard = ({name,role,desc,imgage}) => {
  return (
    <section class="relative py-20 bg-white">
    <div class="items-center flex flex-wrap">
      <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div class="md:pr-12">
          <h3 class="text-2xl font-semibold text-black font-serif">{name}</h3>
          <span class="text-gray-400 text-sm font-serif">{role}</span>
          <p class="mt-4 text-base leading-relaxed text-muted font-serif">{desc}</p>
        </div>
      </div>
      <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
        <img alt="..." class="max-w-full rounded-lg shadow-sm" src={imgage} />
      </div>
    </div>
  </section>
  )
}

export default ProfileCard