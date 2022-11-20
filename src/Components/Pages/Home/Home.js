import React from 'react';
import visitor from '../../../Images/Vector/visitor_art.jpg'
import admin from '../../../Images/Vector/admin_art.jpg'

const Home = () => {
    return (
        <div className='lg:mx-36 mx-6 py-24'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-rows-2 gap-12'>
            
            <a href="" class="group relative block h-96">
              
              <span class="absolute inset-0 border-2 border-dashed border-black"></span>
            
              <div
                class="relative flex  h-full transform  justify-center border-2 border-black bg-white transition-transform  group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                
                <div
                  class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0"
                >
                  <img
                alt="visitor"
                src={visitor}
                class=" object-scale-down h-72 w-96 "
              />
                  
                  <h2 class="mt-2 text-2xl font-medium">Visitor Only</h2>
                  
                </div>
            
                <div
                  class="absolute p-8 opacity-0  transition-opacity group-hover:relative group-hover:opacity-100"
                >
                  <h3 class="mt-4 text-3xl font-medium">Visitor Only</h3>
            
                  <p class="mt-4 text-xl">
                    For those of you who want to see how this website works. All of the functionality are available with Rest Api.
                  </p>
            
                  <p class="mt-8 font-bold">Click to visit now</p>
                </div>
              </div>
              
            </a>
            
            <a href="" class="group relative block h-96">
              
  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    class="relative flex  h-full transform justify-center border-2 border-black bg-white transition-transform  group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    
    <div
      class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0"
    >
      <img
    alt="admin"
    src={admin}
    class="object-scale-down h-72 w-96"
  />
      

      <h2 class="mt-4 text-2xl font-medium">For Personal Use</h2>
    </div>

    <div
      class="absolute p-8 opacity-0  transition-opacity group-hover:relative group-hover:opacity-100"
    >
      <h3 class="mt-4 text-3xl font-medium">For Personal Use</h3>

      <p class="mt-4 text-xl">
        Only available for TS Bustle admins. All the admin functionality are available in the visitor section also. If you are a visitor please select the Visitor only option.
      </p>

      <p class="mt-8 font-bold">Login</p>
    </div>
  </div>
</a>
            </div>

        </div>
    );
};

export default Home;