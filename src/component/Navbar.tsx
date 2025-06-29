export default function Navbar() {
  return (
    <nav className="bg-purple-900 text-purple-100 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-heading text-xl">Suba .Jani. Surianarayanan's Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#intro" className="font-body hover:underline">About</a></li>
          <li><a href="#portfoliocards" className="font-body hover:underline">Projects</a></li>
          <li><a href="#skills" className="font-body hover:underline">Skills</a></li>
          <li><a href="#contact" className="font-body hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}