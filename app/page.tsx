// ─── Placeholders — reemplaza antes de lanzar ───────────────────────────────
const WHATSAPP_LINK  = 'https://wa.me/584127010996?text=Hola%20Lucero%2C%20vi%20la%20clase%20gratuita%20de%20ingl%C3%A9s%20para%20el%20trabajo%20y%20quiero%20reservar%20mi%20cupo.'
const YOUTUBE_ID     = 'VIDEO_ID'            // ID del video de YouTube
const PAGO_MOVIL_NUM = '0412-7010996'
const PAGO_MOVIL_BANCO = '[Banco]'
const PAGO_MOVIL_CI  = '[V-XXXXXXXX]'
const ZELLE_EMAIL    = '[correo@email.com]'
const ZELLE_NOMBRE   = 'Lucero Linares'
const BINANCE_ID     = '[Binance ID]'
const PROF_NOMBRE    = 'Lucero Linares'
const PROF_INICIALES = 'LL'
const FECHA_HORA     = '[FECHA Y HORA]'
// ─────────────────────────────────────────────────────────────────────────────

function WhatsAppButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={WHATSAPP_LINK}
      className={`
        inline-flex items-center justify-center gap-3 font-semibold rounded-full
        bg-gold hover:bg-gold-dark text-white transition-all duration-200
        hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0
        ${large ? 'px-10 py-5 text-xl' : 'px-8 py-4 text-base'}
      `}
    >
      <WhatsAppIcon />
      Únete al grupo de WhatsApp — cupo gratis
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const learningItems = [
  { n: '01', text: 'Frases reales para sonar seguro en reuniones en inglés' },
  { n: '02', text: 'Cómo escribir emails profesionales sin errores' },
  { n: '03', text: 'Los errores más comunes que te hacen ver inseguro' },
  { n: '04', text: 'El método para practicar inglés aunque tengas poco tiempo' },
]

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-28 text-center">

          {/* Badge */}
          <div className="anim-fade-up delay-1 inline-flex items-center gap-2 bg-forest-900 text-white text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Clase Gratuita en Vivo
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up delay-2 font-display text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-[1.08] mb-7">
            Deja de{' '}
            <span className="text-forest-900 italic">trabarte</span>
            <br />
            en inglés en el trabajo
          </h1>

          {/* Subtitle */}
          <p className="anim-fade-up delay-3 text-xl md:text-2xl text-[#555] max-w-2xl mx-auto mb-10 leading-relaxed">
            Aprende las frases y técnicas que usan los profesionales en
            reuniones, correos y calls internacionales
          </p>

          {/* Date badge */}
          <div className="anim-fade-up delay-4 inline-flex items-center gap-3 bg-white border border-[#ddd] px-6 py-3 rounded-2xl mb-10 shadow-sm">
            <CalendarIcon />
            <span className="font-bold text-[#1a1a1a]">{FECHA_HORA}</span>
            <span className="text-[#ccc]">·</span>
            <span className="text-[#888] text-sm">En vivo por YouTube · 100% gratis</span>
          </div>

          {/* CTA */}
          <div className="anim-fade-up delay-5">
            <WhatsAppButton large />
          </div>

          {/* Social proof */}
          <div className="anim-fade-up delay-6 flex items-center justify-center gap-3 mt-7">
            <div className="flex -space-x-2">
              {['A', 'M', 'C'].map((initial) => (
                <div
                  key={initial}
                  className="w-8 h-8 rounded-full bg-forest-500 border-2 border-cream flex items-center justify-center text-white text-xs font-bold"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-sm text-[#999]">47 profesionales ya reservaron su cupo</span>
          </div>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────────────────────── */}
      <section className="bg-forest-900 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-forest-100 text-sm font-semibold uppercase tracking-widest text-center mb-3">
            Antes de unirte
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Mira este video — te cuento todo
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="Presentación de la clase gratuita"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── QUÉ VAS A APRENDER ───────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forest-900 text-sm font-semibold uppercase tracking-widest">
              El contenido de la clase
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-3 leading-tight">
              Una hora que cambia cómo<br className="hidden md:block" /> te comunicas en inglés
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {learningItems.map(({ n, text }) => (
              <div
                key={n}
                className="relative bg-white rounded-2xl p-8 border border-cream-dark overflow-hidden group hover:border-forest-500 hover:shadow-md transition-all duration-200"
              >
                <span className="absolute top-3 right-5 font-display text-7xl font-bold text-forest-50 leading-none select-none pointer-events-none">
                  {n}
                </span>
                <div className="relative z-10">
                  <span className="text-forest-900 text-xs font-bold uppercase tracking-wider">{n}</span>
                  <p className="mt-2 text-[#1a1a1a] text-lg font-medium leading-snug">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* ── SOBRE LA PROFESORA ───────────────────────────────────────────── */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-forest-900 flex items-center justify-center shadow-2xl ring-4 ring-white">
                <span className="font-display text-6xl font-bold text-white/25 select-none">
                  {PROF_INICIALES}
                </span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="text-forest-900 text-sm font-semibold uppercase tracking-widest">
                Tu profesora
              </span>
              <h2 className="font-display text-4xl font-bold text-[#1a1a1a] mt-2 mb-5">
                {PROF_NOMBRE}
              </h2>
              <p className="text-[#555] text-lg leading-relaxed">
                Profesora de inglés corporativo en Caracas. Ayuda a profesionales
                a perder el miedo al idioma y a comunicarse con seguridad en
                reuniones, correos y llamadas internacionales.
              </p>
              <p className="text-[#555] text-lg leading-relaxed mt-3">
                Su método está pensado para personas que ya tienen un trabajo
                y necesitan el inglés como herramienta real, no para pasar un examen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section className="bg-forest-900 py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Reserva tu cupo para la<br /> clase gratuita
          </h2>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-sm px-5 py-2 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-gold" />
            Cupos limitados — 47 personas ya reservaron
          </div>
          <div className="flex justify-center">
            <WhatsAppButton large />
          </div>
          <p className="text-white/40 text-sm mt-6">
            {FECHA_HORA} · Acceso por YouTube · 100% gratis
          </p>
        </div>
      </section>

      {/* ── COBRO ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-[#1a1a1a]">
              ¿Listo para el curso completo?
            </h2>
            <p className="text-[#666] text-lg mt-3 max-w-xl mx-auto leading-relaxed">
              Después de la clase, si quieres continuar con el programa
              presencial en Caracas, estos son los métodos de pago.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {/* Pago Móvil */}
            <div className="border-2 border-cream-dark rounded-2xl p-7 text-center hover:border-forest-500 hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <PhoneIcon />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-lg mb-1">Pago Móvil</h3>
              <p className="text-[#888] text-sm mb-4">Transferencia instantánea en bolívares</p>
              <p className="font-mono font-bold text-forest-900 text-sm">{PAGO_MOVIL_NUM}</p>
              <p className="text-[#aaa] text-xs mt-1">{PAGO_MOVIL_BANCO} · {PAGO_MOVIL_CI}</p>
            </div>

            {/* Zelle */}
            <div className="border-2 border-gold rounded-2xl p-7 text-center relative hover:shadow-sm transition-all duration-200">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                Más usado
              </div>
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarIcon />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-lg mb-1">Zelle</h3>
              <p className="text-[#888] text-sm mb-4">Pago en dólares desde EE.UU.</p>
              <p className="font-mono font-bold text-gold text-sm">{ZELLE_EMAIL}</p>
              <p className="text-[#aaa] text-xs mt-1">A nombre de {ZELLE_NOMBRE}</p>
            </div>

            {/* Binance Pay */}
            <div className="border-2 border-cream-dark rounded-2xl p-7 text-center hover:border-forest-500 hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BoltIcon />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-lg mb-1">Binance Pay</h3>
              <p className="text-[#888] text-sm mb-4">Pago en USDT (criptomonedas)</p>
              <p className="font-mono font-bold text-forest-900 text-sm">{BINANCE_ID}</p>
              <p className="text-[#aaa] text-xs mt-1">USDT · BNB Chain</p>
            </div>
          </div>

          <div className="bg-cream rounded-2xl p-6 text-center border border-cream-dark">
            <p className="text-[#555] text-base">
              Después de pagar,{' '}
              <strong className="text-forest-900">envía tu comprobante por WhatsApp</strong>{' '}
              para confirmar tu cupo en el curso presencial.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="inline-block mt-4 text-forest-900 font-semibold underline underline-offset-4 hover:text-forest-700 transition-colors"
            >
              Enviar comprobante por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-forest-900 py-8 px-6 text-center">
        <p className="text-white/40 text-sm">
          Inglés Corporativo · Clase presencial en Caracas · Grupos reducidos
        </p>
      </footer>

    </main>
  )
}

// ── Inline SVG icons ──────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg className="w-5 h-5 text-forest-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6 text-forest-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}

function DollarIcon() {
  return (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg className="w-6 h-6 text-forest-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}
