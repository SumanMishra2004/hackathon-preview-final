import IconCloud from '@/components/magicui/icon-cloud'
import SparklesText from '@/components/magicui/sparkle-text'
import React from 'react'

const HomeUpperWrittenArea = () => {
  return (
   <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
 
  <div className="max-w-3xl text-center mx-auto">
    <h1 className=" font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
      Lets Build something new
      <SparklesText text='Notepod' className=''/>
    </h1>
  </div>
  {/* End Title */}
  <div className="mt-5 max-w-3xl text-center mx-auto">
    <p className="text-lg text-gray-600 dark:text-neutral-400">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
  </div>
  {/* Buttons */}
  <div className="mt-8 gap-3 flex justify-center">
    <button className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800">
      Get started
      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    </button>
    <button type="button" className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
       npm i preline
      <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
        <svg className="flex-shrink-0 size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width={8} height={4} x={8} y={2} rx={1} ry={1} /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
      </span>
    </button>
  </div>
 
</div>

  )
}

export default HomeUpperWrittenArea