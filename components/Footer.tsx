import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">LogiTech</h3>
            <p className="text-sm">Ваш надежный партнер в логистике</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <p className="text-sm">Email: info@logitech.com</p>
            <p className="text-sm">Телефон: +7 (999) 123-45-67</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400">Услуги</Link></li>
              <li><Link href="#" className="hover:text-blue-400">О нас</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Контакты</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 LogiTech. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

