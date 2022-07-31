import React from "react"
import Button from "../Button"

function Hero() {
  return (
    <div className="bg-plant bg-cover">
      <div class="px-4 mx-auto py-20 max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <img class="px-16 " src="./hero.JPG" alt="img1" />
        </div>
        <div class="text-center md:text-right px-6 flex flex-col justify-center items-center">
          <h1 class="sans-serif text-3xl font-bold text-white uppercase">
            Welcome To
          </h1>
          <h1 class="serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-gold to-light-gold uppercase">
            Saint Tropez
          </h1>
          <h1 class="sans-serif text-xl font-bold text-white uppercase">
            The Ultimate Dinner Party
          </h1>
          <p class="sans-serif text-white text-center text-base pt-5">
            We are bringing to you a concept never-before-seen in Trinidad.
            Tantalize all your senses in the ultimate dinner experience.
            Delicious food.…Flowing drinks...dazzling entertainment! Exquisite
            Décor, Soft Rose petals, Aerial Silk Dancers, Acrobatic Dancers,
            Fire Breathers, and much more. No need to travel to Miami or France;
            we are bringing this world-class dining experience to you! After
            dinner, the party continues with the best DJs! Arrive in style on
            your yacht, or steer your vehicle into our secured parking. Enter
            into an unforgettable experience like no other in Trinidad and
            Tobago.
          </p>
          <div className="pt-5">
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
