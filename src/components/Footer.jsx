const Footer = ({ language }) => {
  const translations = {
    ru: {
      copyright: '© 2024 Maxim Coffee. Все права защищены.',
      brand: 'Корейское качество в каждом стике',
      links: [
        { label: 'О нас', href: '#' },
        { label: 'Условия', href: '#' },
        { label: 'Политика', href: '#' },
      ],
    },
    uz: {
      copyright: '© 2024 Maxim Coffee. Barcha huquqlar himoyalangan.',
      brand: 'Har bir stikda koreys sifati',
      links: [
        { label: 'Biz haqida', href: '#' },
        { label: 'Shartlar', href: '#' },
        { label: 'Siyosat', href: '#' },
      ],
    },
  }

  const t = translations[language]

  return (
    <footer className="bg-maxim-dark text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-maxim-yellow mb-2">MAXIM</h3>
            <p className="text-gray-300 text-sm">{t.brand}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-maxim-yellow">
              {language === 'ru' ? 'Ссылки' : 'Havolalar'}
            </h4>
            <ul className="space-y-2">
              {t.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-maxim-yellow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-maxim-yellow">
              {language === 'ru' ? 'Мы в соцсетях' : 'Ijtimoiy tarmoqlarda'}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://t.me/maximcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-maxim-yellow rounded-full flex items-center justify-center text-maxim-dark font-bold hover:bg-maxim-brown transition-colors"
              >
                ✓
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-maxim-yellow rounded-full flex items-center justify-center text-maxim-dark font-bold hover:bg-maxim-brown transition-colors"
              >
                f
              </a>
              <a
                href="https://wa.me/998991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-maxim-yellow rounded-full flex items-center justify-center text-maxim-dark font-bold hover:bg-maxim-brown transition-colors"
              >
                ✓
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Info */}
          <div className="text-center text-gray-400 text-sm">
            <p>{t.copyright}</p>
            <p className="mt-2 text-xs">
              {language === 'ru'
                ? 'Сделано с ❤️ для любителей хорошего кофе'
                : 'Yaxshi qahva uchun ❤️ bilan yaratildi'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
