<header className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="text-blue-500">techno</span>IT
        </div>
        
        <nav className="space-x-6 text-white">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-500">Portfolio</Link>
          <Link href="/testimonials" className="hover:text-blue-500">Testimonials</Link>
          <Link href="/team" className="hover:text-blue-500">Team</Link>
          <Link href="/news" className="hover:text-blue-500">News</Link>
          
          <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
            Get Quotes
          </button>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-2"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}