export default function Home() {
  return (
    <main className="w-full @container">
      {/* Hero Section */}
      <div className="relative grid grid-cols-1 @lg:grid-cols-12 bg-secondary">
        {/* Background Image Layer (Spans full height from nav to bottom) */}
        <div className="absolute inset-y-0 right-0 w-full @lg:w-1/2 opacity-20 pointer-events-none z-0">
          <img 
            src={"/assets/header-bg-3.jpg"} 
            alt="" 
            className="w-full h-full object-cover @lg:max-h-none"
          />
        </div>

        <div className="col-span-1 @lg:col-span-12 py-4 px-6 @lg:px-0 flex justify-center @lg:grid @lg:grid-cols-subgrid">
          <ul className="flex gap-4 @lg:col-start-6 justify-center @lg:justify-start">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Services</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>
        <div className="col-span-1 @lg:col-span-12 grid grid-cols-subgrid">
          <div className="col-span-1 px-6 py-12 @lg:col-start-3 @lg:col-span-4 @lg:py-24 @lg:px-0">
            <h1 className="text-5xl @sm:text-6xl @4xl:text-7xl leading-tight">Transforming Ideas into digital Space</h1>
            <p className="text-xs py-4 tracking-wider">Development with QUALITY & INTELLIGENCE</p>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="grid grid-cols-1 @lg:grid-cols-12 py-16 @lg:py-24 px-6 @lg:px-0">
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-6 @lg:mb-8">
          <h2 className="text-4xl @sm:text-5xl @lg:text-6xl">Who are we</h2>
        </div>

        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8">
          <p className="text-lg @lg:text-xl mb-4 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae?</p>
          <p className="text-lg @lg:text-xl mb-2 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum,</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 @lg:grid-cols-12 py-16 @lg:py-24 bg-background px-6 @lg:px-0">
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-6 @lg:mb-8">
          <h2 className="text-4xl @sm:text-5xl @lg:text-6xl text-white">What we offer</h2>
        </div>

        <div className="col-span-1 @lg:col-start-3 @lg:col-span-4">
          <p className="text-lg @lg:text-xl mb-2 leading-relaxed text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut</p>
        </div>

        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 @lg:grid @lg:grid-cols-subgrid py-8 grid grid-cols-1 gap-4 text-white">

          <div className="col-span-1 @lg:col-span-8 p-4 shadow-inner bg-green">
            <h3 className="text-2xl mb-4">Full Site Audit</h3>
            <p className="text-base mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-1 @lg:col-span-4 p-4 shadow-inner bg-green">
            <h3 className="text-2xl mb-4">Performance Optimization</h3>
            <p className="text-base mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-1 @lg:col-span-4 p-4 shadow-inner bg-green">
            <h3 className="text-2xl mb-4">Security Assesment</h3>
            <p className="text-base mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-1 @lg:col-span-4 p-4 shadow-inner bg-green">
            <h3 className="text-2xl mb-4">API Verification</h3>
            <p className="text-base mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-1 @lg:col-span-4 p-4 shadow-inner bg-green">
            <h3 className="text-2xl mb-4">Accessibility Audit</h3>
            <p className="text-base mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

        </div>
      </div>
    </main>
  );
}
