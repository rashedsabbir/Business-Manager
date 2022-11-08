import React from 'react';
import visitor from '../../../Images/Vector/visitor_art.jpg'
import admin from '../../../Images/Vector/admin_art.jpg'

const Home = () => {
    return (
        <div className='lg:mx-36 mx-6 py-24'>
            <div className='grid lg:grid-cols-2 grid-rows-2 gap-12'>
            <a href="" class="group relative block h-96">
              
              <span class="absolute inset-0 border-2 border-dashed border-black"></span>
            
              <div
                class="relative flex  h-full transform items-end border-2 border-black bg-white transition-transform  group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                
                <div
                  class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0"
                >
                  <img
                alt="visitor"
                src={visitor}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
            
                  <h2 class="mt-4 text-2xl font-medium">Go around the world</h2>
                </div>
            
                <div
                  class="absolute p-8 opacity-0  transition-opacity group-hover:relative group-hover:opacity-100"
                >
                  <h3 class="mt-4 text-2xl font-medium">Go around the world</h3>
            
                  <p class="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                    praesentium voluptatem omnis atque culpa repellendus.
                  </p>
            
                  <p class="mt-8 font-bold">Read more</p>
                </div>
              </div>
            </a>
            <a href="" class="group relative block h-96">
              
  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    class="relative flex  h-full transform items-end border-2 border-black bg-white transition-transform  group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    
    <div
      class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0"
    >
      <img
    alt="admin"
    src={admin}
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 class="mt-4 text-2xl font-medium">Go around the world</h2>
    </div>

    <div
      class="absolute p-8 opacity-0  transition-opacity group-hover:relative group-hover:opacity-100"
    >
      <h3 class="mt-4 text-2xl font-medium">Go around the world</h3>

      <p class="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        praesentium voluptatem omnis atque culpa repellendus.
      </p>

      <p class="mt-8 font-bold">Read more</p>
    </div>
  </div>
</a>
            </div>

        </div>
    );
};

export default Home;