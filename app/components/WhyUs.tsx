import { CheckCircle } from 'lucide-react'

const reasons = [
  'Опыт работы более 10 лет',
  'Собственный автопарк',
  'Отслеживание груза в реальном времени',
  'Страхование всех перевозок',
  'Индивидуальный подход к каждому клиенту',
]

export default function WhyUs() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

