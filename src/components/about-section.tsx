import { Meteors } from "./ui/meteors";

export function AboutSection() {
  return (
    <div id="about" className="relative overflow-hidden grid grid-cols-1 @lg:grid-cols-12 py-16 @lg:py-24 px-6 @lg:px-0 text-black">
      <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 mb-6 @lg:mb-8">
        <h2 className="text-4xl @sm:text-5xl @lg:text-6xl">
          Who are <span className="text-primary">we</span>
        </h2>
      </div>

      <div className="col-span-1 @lg:col-start-3 @lg:col-span-8">
        <p className="text-lg @lg:text-xl mb-4 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          tempore earum, fugit ab ut explicabo in ipsa, aliquid modi est odit!
          Distinctio voluptates, magnam in quo veniam eum optio repudiandae?
          fugit ab ut explicabo in ipsa, aliquid modi est odit! Distinctio
          voluptates, magnam in quo veniam eum optio repudiandae? fugit ab ut
          explicabo in ipsa, aliquid modi est odit! Distinctio voluptates,
          magnam in quo veniam eum optio repudiandae? fugit ab ut explicabo in
          ipsa, aliquid Error tempore earum, fugit ab ut explicabo in ipsa,
          aliquid modi est odit! Distinctio voluptates, magnam in quo veniam eum
          optio repudiandae? fugit ab ut explicabo in ipsa, aliquid modi est
          odit! modi est odit! Distinctio voluptates, magnam in quo veniam eum
          optio repudiandae?
        </p>
        <p className="text-lg @lg:text-xl mb-2 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          tempore earum,
        </p>
        <Meteors number={20} />
      </div>
    </div>
  )
}
