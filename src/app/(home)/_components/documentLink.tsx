import IconCloud from '@/components/magicui/icon-cloud'
import React from 'react'

const DocumentLink = () => {
  return (
    <div className="h-auto mx-auto px-4 sm:px-6 lg:px-8 py-40">
  {/* Grid */}
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Visit your <span className="text-blue-600">WorkSpace</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consequatur et voluptatem ipsa dolorum culpa maxime quibusdam, porro exercitationem similique amet eligendi ab accusantium magnam odio eius dolore consectetur vero.</p>
      {/* Buttons */}
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" >
          Workspace
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
        
      </div>
    
    </div>
    {/* End Col */}
    <div className="relative ms-4">
    <IconCloud/>
    </div>
    {/* End Col */}
  </div>
  {/* End Grid */}
</div>

  )
}

export default DocumentLink