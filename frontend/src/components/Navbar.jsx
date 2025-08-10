const Navbar = () => (
    <header className="bg-[#1e293b] px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold text-green-400">🌊 BeachGuard</h1>
      <nav className="space-x-6 text-sm">
        <a href="#features" className="hover:text-green-300">Features</a>
        <a href="#how" className="hover:text-green-300">How It Works</a>
        <a href="#cta" className="bg-green-500 px-4 py-2 rounded text-black hover:bg-green-600">Sign Up</a>
      </nav>
    </header>
  );
  
  export default Navbar;
  