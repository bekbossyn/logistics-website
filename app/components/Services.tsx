import { Truck, Ship, Plane } from 'lucide-react'

const services = [
  { icon: Truck, title: 'Автомобильные перевозки', description: 'Быстрая и надежная доставка по всей стране' },
  { icon: Ship, title: 'Морские перевозки', description: 'Экономичная доставка крупных грузов' },
  { icon: Plane, title: 'Авиаперевозки', description: 'Срочная доставка в любую точку мира' },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

