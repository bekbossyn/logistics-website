import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Эффективные логистические решения для вашего бизнеса</h1>
        <p className="text-xl mb-8">Доставляем ваши грузы быстро и надежно по всему миру</p>
        <Button variant="secondary" size="lg">Рассчитать стоимость</Button>
      </div>
    </section>
  )
}

