export default function Navbar() {
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20">
      <div className="justify-between md:items-center md:flex">
        <div className="flex items-center justify-between py-3">
          <div className="md:py-2 md:block">
            <a href="#">
              <h2 className="text-2xl font-bold">이라규의 개인 홈페이지</h2>
            </a>
          </div>
        </div>
        <div className="flex gap-12">
          <a
            href="https://github.com/kdc3246/port2023-next"
            target="blank"
            className="block lg:inline-block text-neutral-900 hover:text-neutral-500 justify-center md:space-x-6 cursor-pointer"
          >
            Capston Project
          </a>

          <a
            href="https://github.com/ragyu?tab=repositories"
            target="blank"
            className="block lg:inline-block text-neutral-900 hover:text-neutral-500 justify-center md:space-x-6 cursor-pointer"
          >
            My Repository
          </a>
        </div>
      </div>
    </header>
  );
}
