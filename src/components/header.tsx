import { MainNav } from "@/components/main-nav"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-secondary/10 shadow backdrop-blur-md border-b border-black/5 transition-all duration-300">
      <div className="grid grid-cols-1 @lg:grid-cols-12 py-4 px-6 @lg:px-0">
        <div className="col-span-1 @lg:col-start-3 @lg:col-span-8 flex justify-between items-center w-full">
          <a
            href="#"
            className="font-mono text-xl font-bold tracking-tight text-black border-b-2 border-black/60 pb-0.5 hover:border-black transition-colors"
          >
            &lt;/kavprist&gt;
          </a>
          <MainNav />
        </div>
      </div>
    </header>
  )
}
