export function TopBar() {
  return (
    <div
      className="relative w-full animate-in fade-in duration-500"
      style={{ backgroundColor: '#142B49', borderBottom: '1px solid rgba(255,255,255, 0.15)' }}
    >
      <div className="py-2.5 sm:py-3">
        <div
          className="w-full max-w-6xl mx-auto flex items-center justify-center text-center"
          style={{ paddingInline: '12px', boxSizing: 'border-box' }}
        >
          <span
            className="text-xs sm:text-sm font-semibold tracking-wide"
            style={{ color: '#FFFFFF' }}
          >
            {'\uD83C\uDF81'} GUIA VISUAL DE GASOMETRIA ARTERIAL {'\u2022'} POR R$ 24,90
          </span>
        </div>
      </div>
    </div>
  );
}
