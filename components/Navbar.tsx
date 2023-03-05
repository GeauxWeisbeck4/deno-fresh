export default function Navbar() {
  return (
    <>
      <div>
        <nav>
          <a class="text-gray-900" href="/">GeauxWeisbeck4</a>
          <ul>
            <li>
              <a class="text-gray-900" href="/about">About</a>
            </li>
            <li>
              <a class="text-gray-900" href="/projects">Projects</a>
            </li>
            <li>
              <a class="text-gray-900" href="/resources">Resources</a>
            </li>
            <li>
              <a class="text-gray-900" href="/Blog">Blog</a>
            </li>
            <li>
              <a class="text-gray-900" href="/contact">Contact</a>
            </li>
          </ul>
          <a class="flex text-gray-300 bg-green-600 px-4 py-2" href="/shop">
            Shop Now!
          </a>
        </nav>
      </div>
    </>
  );
}
