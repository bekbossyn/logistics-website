import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Эффективные логистические решения для вашего бизнеса</h1>
        <p className="text-lg md:text-xl mb-8">Доставляем ваши грузы быстро и надежно по всему миру</p>
        <Button className="w-full md:w-auto btn-secondary">Рассчитать стоимость</Button>
      </div>
    </section>
  )
}

