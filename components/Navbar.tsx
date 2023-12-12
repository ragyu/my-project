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
        <div style={{ display: 'flex', gap: '50px' }}>
          <a href="https://github.com/kdc3246/port2023-next" target="blank">
            Capston Project
          </a>

          <a href="https://github.com/ragyu?tab=repositories" target="blank">
            My Repository
          </a>
        </div>
      </div>
    </header>
  );
}
