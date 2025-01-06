'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">LogiTech</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Услуги</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">О нас</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Контакты</Link></li>
            </ul>
          </nav>
          <Button className="hidden md:inline-flex btn-primary">Получить расчет</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Услуги</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">О нас</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Контакты</Link></li>
              <li><Button className="w-full btn-primary">Получить расчет</Button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

