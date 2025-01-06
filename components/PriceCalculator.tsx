'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

export function PriceCalculator() {
  const [weight, setWeight] = useState('')
  const [distance, setDistance] = useState('')
  const [transportType, setTransportType] = useState('road')
  const [price, setPrice] = useState<number | null>(null)

  const calculatePrice = () => {
    const basePrice = 1000 // Базовая стоимость в рублях
    const weightFactor = parseFloat(weight) * 10
    const distanceFactor = parseFloat(distance) * 0.5
    let transportFactor = 1

    switch (transportType) {
      case 'road':
        transportFactor = 1
        break
      case 'sea':
        transportFactor = 0.8
        break
      case 'air':
        transportFactor = 2
        break
    }

    const calculatedPrice = (basePrice + weightFactor + distanceFactor) * transportFactor
    setPrice(Math.round(calculatedPrice))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Рассчитать стоимость доставки</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="weight">Вес груза (кг)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Введите вес груза"
          />
        </div>
        <div>
          <Label htmlFor="distance">Расстояние (км)</Label>
          <Input
            id="distance"
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Введите расстояние"
          />
        </div>
        <div>
          <Label htmlFor="transportType">Тип транспорта</Label>
          <Select
            id="transportType"
            value={transportType}
            onValueChange={setTransportType}
          >
            <option value="road">Автомобильный</option>
            <option value="sea">Морской</option>
            <option value="air">Воздушный</option>
          </Select>
        </div>
        <Button onClick={calculatePrice} className="w-full">Рассчитать</Button>
      </div>
      {price !== null && (
        <div className="mt-4 text-center">
          <p className="text-lg">Примерная стоимость доставки:</p>
          <p className="text-2xl font-bold text-blue-600">{price} руб.</p>
        </div>
      )}
    </div>
  )
}

