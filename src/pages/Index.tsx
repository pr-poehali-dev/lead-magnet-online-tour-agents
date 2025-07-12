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
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Информация о курсе отправлена на вашу почту.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-travel-orange" size={32} />
              <span className="text-2xl font-bold text-gray-900">
                TravelPro
              </span>
            </div>
            <Button
              variant="outline"
              className="border-travel-orange text-travel-orange"
            >
              +7 (800) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-travel-blue/5 to-travel-turquoise/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-travel-orange/10 text-travel-orange border-travel-orange/20">
                ⭐ Рейтинг курса 4.9/5
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Стань <span className="text-travel-orange">успешным</span>{" "}
                турагентом за 2 месяца
              </h1>

              <div className="text-xl text-gray-700 mb-8 space-y-2">
                <p className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    className="text-green-600"
                    size={20}
                  />
                  Изучи все системы бронирования от Amadeus до TravelLine
                </p>
                <p className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    className="text-green-600"
                    size={20}
                  />
                  Освой техники продаж и работу с возражениями
                </p>
                <p className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    className="text-green-600"
                    size={20}
                  />
                  Получи сертификат и помощь в трудоустройстве
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Clock" className="text-yellow-600" size={20} />
                  <span className="font-semibold text-yellow-800">
                    Ограниченное предложение!
                  </span>
                </div>
                <p className="text-yellow-700">
                  До повышения цены осталось:{" "}
                  <span className="font-bold">3 дня</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-travel-orange hover:bg-travel-orange/90 text-white font-semibold px-8 py-4 text-lg"
                  onClick={() =>
                    document
                      .querySelector("#lead-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Записаться на курс
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-travel-turquoise text-travel-turquoise hover:bg-travel-turquoise hover:text-white"
                >
                  Бесплатный урок
                </Button>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src="/img/07f2af98-5c8d-4ca5-9c89-069b4e7b7ac8.jpg"
                  alt="Обучение турагентов онлайн"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-travel-orange">
                      1247+
                    </div>
                    <div className="text-sm text-gray-600">выпускников</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Знакомая ситуация?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Многие сталкиваются с этими проблемами при входе в профессию
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-left border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <Icon name="X" className="text-red-500 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Нет структурных знаний
                </h3>
                <p className="text-gray-600">
                  Изучаете туризм хаотично, без системы и понимания с чего
                  начать
                </p>
              </CardContent>
            </Card>

            <Card className="text-left border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <Icon name="X" className="text-red-500 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Сложные системы бронирования
                </h3>
                <p className="text-gray-600">
                  Amadeus, Sabre, Galileo кажутся космически сложными
                </p>
              </CardContent>
            </Card>

            <Card className="text-left border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <Icon name="X" className="text-red-500 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Не умеете продавать
                </h3>
                <p className="text-gray-600">
                  Клиенты уходят к конкурентам, не знаете как работать с
                  возражениями
                </p>
              </CardContent>
            </Card>

            <Card className="text-left border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <Icon name="X" className="text-red-500 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Боитесь ответственности
                </h3>
                <p className="text-gray-600">
                  Страшно брать деньги клиентов и нести ответственность за их
                  отпуск
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Решение — системное обучение с практикой
            </h2>
            <p className="text-xl text-gray-600">
              За 8 недель превратим вас в уверенного профессионала
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-travel-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name="BookOpen"
                    className="text-travel-blue"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Теория + практика
                </h3>
                <p className="text-gray-600">
                  150+ часов обучения с реальными кейсами и симуляциями
                  бронирования
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-travel-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" className="text-travel-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Менторская поддержка
                </h3>
                <p className="text-gray-600">
                  Персональный ментор и куратор на всем пути обучения
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-travel-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name="Briefcase"
                    className="text-travel-turquoise"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Гарантия трудоустройства
                </h3>
                <p className="text-gray-600">
                  Помогаем найти работу в турагентствах-партнерах или возвращаем
                  деньги
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Программа курса
            </h2>
            <p className="text-xl text-gray-600">
              8 недель интенсивного обучения с практикой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                week: "Неделя 1-2",
                title: "Основы туризма",
                topics: [
                  "Виды туризма",
                  "Правовые основы",
                  "География туризма",
                  "Базовая терминология",
                ],
              },
              {
                week: "Неделя 3-4",
                title: "Системы бронирования",
                topics: [
                  "Amadeus GDS",
                  "Sabre",
                  "Galileo",
                  "TravelLine",
                  "Отельные системы",
                ],
              },
              {
                week: "Неделя 5-6",
                title: "Продажи и клиенты",
                topics: [
                  "Техники продаж",
                  "Работа с возражениями",
                  "Психология клиента",
                  "Cross-sell и Up-sell",
                ],
              },
              {
                week: "Неделя 7-8",
                title: "Практика и трудоустройство",
                topics: [
                  "Реальные кейсы",
                  "Составление резюме",
                  "Подготовка к собеседованию",
                  "Защита дипломов",
                ],
              },
            ].map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-travel-orange to-travel-turquoise text-white">
                  <CardTitle className="text-lg">{module.week}</CardTitle>
                  <CardDescription className="text-white/90">
                    {module.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Icon
                          name="Check"
                          className="text-green-600 mt-0.5"
                          size={16}
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Стоимость обучения
            </h2>
            <p className="text-xl text-gray-600">
              Инвестиция в ваше будущее окупится за первый месяц работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  49 990 ₽
                  <span className="text-lg font-normal text-gray-500 line-through ml-2">
                    89 990 ₽
                  </span>
                </div>
                <p className="text-travel-orange font-semibold">
                  Скидка до 31 декабря!
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "8 недель обучения",
                    "150+ часов материалов",
                    "Доступ к системам бронирования",
                    "Домашние задания с проверкой",
                    "Сертификат о прохождении",
                    "Доступ к материалам на 1 год",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">
                  Выбрать базовый
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-travel-orange shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-travel-orange text-white px-4 py-1">
                  ПОПУЛЯРНЫЙ
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mt-4">
                  79 990 ₽
                  <span className="text-lg font-normal text-gray-500 line-through ml-2">
                    149 990 ₽
                  </span>
                </div>
                <p className="text-travel-orange font-semibold">
                  Скидка до 31 декабря!
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-600 mb-4">
                  Всё из базового тарифа, плюс:
                </p>
                <ul className="space-y-3">
                  {[
                    "Персональный ментор",
                    "Еженедельные консультации 1-на-1",
                    "Помощь в составлении резюме",
                    "Подготовка к собеседованиям",
                    "Гарантия трудоустройства",
                    "Поддержка в первые 3 месяца работы",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-travel-orange hover:bg-travel-orange/90">
                  Выбрать премиум
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section
        id="lead-form"
        className="py-16 px-4 bg-gradient-to-r from-travel-turquoise/10 to-travel-blue/10"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Получите бесплатную консультацию
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Наш менеджер ответит на все вопросы и поможет выбрать подходящий
                тариф
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-travel-orange" size={20} />
                  <span>Консультация по телефону или в Zoom</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-travel-orange" size={20} />
                  <span>Длительность: 15-30 минут</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Gift" className="text-travel-orange" size={20} />
                  <span>Бонус: чек-лист "Первые шаги турагента"</span>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">
                  Записаться на консультацию
                </CardTitle>
                <CardDescription>
                  Заполните форму — перезвоним в течение 10 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Как к вам обращаться?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-travel-orange hover:bg-travel-orange/90 text-white font-semibold py-3 text-lg"
                  >
                    Получить консультацию
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="text-travel-orange hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы выпускников
            </h2>
            <p className="text-xl text-gray-600">
              Более 1200 человек уже работают турагентами после нашего курса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Смирнова",
                role: "Старший турагент в TUI",
                text: "За 2 месяца обучения получила все знания, которые раньше собирала по крупицам. Особенно помогла практика с системами бронирования.",
                rating: 5,
              },
              {
                name: "Михаил Петров",
                role: "Основатель турагентства 'Мечта'",
                text: "Курс дал мне уверенность открыть собственное агентство. Ментор помог избежать типичных ошибок новичков.",
                rating: 5,
              },
              {
                name: "Елена Козлова",
                role: "Корпоративный турагент",
                text: "Устроилась в крупную компанию сразу после курса. Работодатель отметил высокий уровень подготовки.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Нужно ли иметь опыт в туризме для поступления?",
                a: "Нет, курс рассчитан на новичков. Мы начинаем с основ и постепенно углубляемся в профессию.",
              },
              {
                q: "Сколько времени нужно уделять учебе в неделю?",
                a: "Рекомендуем 10-15 часов в неделю: просмотр лекций, выполнение заданий и практика.",
              },
              {
                q: "Действительно ли есть гарантия трудоустройства?",
                a: "Да, при выборе премиум-тарифа мы гарантируем трудоустройство в течение 3 месяцев или возвращаем деньги.",
              },
              {
                q: "Какой доход может быть у начинающего турагента?",
                a: "Зарплата начинающего турагента 40-80 тыс. рублей, опытного — от 100 тыс. рублей в месяц.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-travel-orange to-travel-turquoise text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Не откладывайте — начните новую карьеру сегодня!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Количество мест ограничено. До повышения цены осталось 3 дня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-travel-orange hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              onClick={() =>
                document
                  .querySelector("#lead-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Записаться на курс
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-travel-orange"
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" className="text-travel-orange" size={24} />
                <span className="text-xl font-bold">TravelPro</span>
              </div>
              <p className="text-gray-400">
                Онлайн-школа профессиональных турагентов
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 123-45-67</p>
                <p>info@travelpro.ru</p>
                <p>Пн-Пт: 9:00 - 21:00</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Базовый курс турагента</p>
                <p>Корпоративный туризм</p>
                <p>Международный туризм</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Политика конфиденциальности</p>
                <p>Договор оферты</p>
                <p>Лицензия на образование</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
