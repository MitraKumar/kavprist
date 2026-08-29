export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 bg-secondary">
        <div className="col-span-12 my-4 grid grid-cols-subgrid">
          <ul className="flex gap-4 col-start-6">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col-start-3 col-span-4 py-24">
          <h1 className="text-7xl">Transforming Ideas into digital Space</h1>
          <p className="text-xs py-4 tracking-wider">Development with QUALITY & INTELLIGENCE</p>

        </div>

        <div className="col-start-7 col-span-6 opacity-20">
          <img src={"/assets/header-bg-3.jpg"} className="w-full"/>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="grid grid-cols-12 py-24">
        <div className="col-start-3 col-span-8 mb-8">
          <h2 className="text-6xl">Who are we</h2>
        </div>

        <div className="col-start-3 col-span-8">
          <p className="text-xl mb-2 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est odit! modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae?</p>
          <p className="text-xl mb-2 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum,</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-12 py-24 bg-background">
        <div className="col-start-3 col-span-8 mb-8">
          <h2 className="text-6xl text-white">What we offer</h2>
        </div>

        <div className="col-start-3 col-span-4">
          <p className="text-xl mb-2 leading-relaxed text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut</p>
        </div>

        <div className="col-start-3 col-span-8 py-8 grid grid-cols-subgrid gap-4 text-white">

          <div className="col-span-2 row-span-2 p-4 shadow-md bg-green">
            <h3 className="text-3xl mb-4">Full Site Audit</h3>
            <p className="text-xl mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-3 p-4 shadow-md bg-green">
            <h3 className="text-3xl mb-4">Performance Optimization</h3>
            <p className="text-xl mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-2 p-4 shadow-md bg-green">
            <h3 className="text-3xl mb-4">Security Assesment</h3>
            <p className="text-xl mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-2 p-4 shadow-md bg-green">
            <h3 className="text-3xl mb-4">API Verification</h3>
            <p className="text-xl mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

          <div className="col-span-3 p-4 shadow-md bg-green">
            <h3 className="text-3xl mb-4">Accessibility Audit</h3>
            <p className="text-xl mb-2 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium recusandae consequuntur magnam eveniet, odit architecto culpa tempora voluptatem sint.</p>
          </div>

        </div>
      </div>
    </>
  );
}
