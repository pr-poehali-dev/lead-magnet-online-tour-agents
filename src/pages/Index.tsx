import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Спасибо! Чек-лист отправлен на вашу почту.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-blue via-white to-travel-turquoise">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Стань{" "}
                <span className="text-travel-orange">профессиональным</span>{" "}
                <span className="text-travel-turquoise">турагентом</span> за 30
                дней
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Изучи все системы бронирования, освой продажи туров и начни
                зарабатывать в туристической индустрии. Обучение от практикующих
                экспертов.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    className="text-travel-orange"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Все системы бронирования
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    className="text-travel-orange"
                    size={20}
                  />
                  <span className="text-gray-700">Техники продаж</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    className="text-travel-orange"
                    size={20}
                  />
                  <span className="text-gray-700">Работа с клиентами</span>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src="/img/07f2af98-5c8d-4ca5-9c89-069b4e7b7ac8.jpg"
                alt="Обучение турагентов"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Получи бесплатный чек-лист
            </h2>
            <p className="text-xl text-gray-600">
              "ТОП-10 систем бронирования для турагентов" + бонусные материалы
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Checklist Preview */}
            <Card className="border-2 border-travel-orange/20 shadow-lg animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-travel-orange to-travel-turquoise text-white">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={24} />
                  ТОП-10 систем бронирования
                </CardTitle>
                <CardDescription className="text-white/90">
                  Полный гид по профессиональным инструментам турагента
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {[
                    "Amadeus — глобальная система бронирования",
                    "Sabre — система для авиаперевозок",
                    "Galileo — европейская платформа",
                    "TravelLine — российская система",
                    "Booking.com for Business — отели",
                    "+ 5 дополнительных систем",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon
                        name="Plane"
                        className="text-travel-turquoise mt-1"
                        size={16}
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-travel-blue/10 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Бонусы:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Шаблоны договоров с клиентами</li>
                    <li>• Калькулятор комиссий турагента</li>
                    <li>• Чек-лист первого рабочего дня</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Lead Form */}
            <Card className="shadow-xl animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">
                  Скачать бесплатно
                </CardTitle>
                <CardDescription>
                  Заполните форму и получите материалы на почту
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (xxx) xxx-xx-xx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-travel-orange hover:bg-travel-orange/90 text-white font-semibold py-3 text-lg"
                  >
                    Получить чек-лист бесплатно
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-travel-turquoise/10 to-travel-blue/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Почему выбирают нашу школу
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-travel-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-travel-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Опытные преподаватели
                </h3>
                <p className="text-gray-600">
                  Практикующие турагенты с опытом работы более 10 лет
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-travel-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Monitor"
                    className="text-travel-turquoise"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Практические навыки
                </h3>
                <p className="text-gray-600">
                  Работа с реальными системами бронирования и клиентами
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-travel-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="text-travel-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Гарантия трудоустройства
                </h3>
                <p className="text-gray-600">
                  Помогаем найти работу в турагентствах-партнерах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Начни карьеру в туризме уже сегодня!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Скачай чек-лист и получи бонусные материалы для старта
          </p>
          <Button
            className="bg-travel-orange hover:bg-travel-orange/90 text-white font-semibold px-8 py-3 text-lg"
            onClick={() =>
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Получить материалы
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
