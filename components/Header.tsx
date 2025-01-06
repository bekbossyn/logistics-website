import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">LogiTech</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">Услуги</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">О нас</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600">Контакты</Link></li>
          </ul>
        </nav>
        <Button>Получить расчет</Button>
      </div>
    </header>
  )
}

