import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TicketInfo = () => {
  const tickets = [
    {
      type: "Взрослый",
      price: "800",
      description: "Полный доступ ко всем зонам зоопарка",
      features: ["Все павильоны", "Детский зоопарк", "Экскурсии"],
    },
    {
      type: "Льготный",
      price: "400",
      description: "Для студентов, пенсионеров и школьников",
      features: ["Все павильоны", "Детский зоопарк", "Скидка 50%"],
      popular: true,
    },
    {
      type: "Детский",
      price: "0",
      description: "Бесплатно для детей до 17 лет",
      features: ["Все павильоны", "Детский зоопарк", "Бесплатно"],
    },
  ];

  return (
    <section className="py-16 bg-green-50" id="tickets">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Билеты и режим работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий билет и планируйте свой визит
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Билеты */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Стоимость билетов
            </h3>
            <div className="space-y-4">
              {tickets.map((ticket, index) => (
                <Card
                  key={index}
                  className={`relative ${ticket.popular ? "ring-2 ring-green-500" : ""}`}
                >
                  {ticket.popular && (
                    <div className="absolute -top-3 left-4">
                      <Badge className="bg-green-600">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{ticket.type}</CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {ticket.price === "0"
                            ? "Бесплатно"
                            : `${ticket.price} ₽`}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {ticket.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {ticket.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-600 mr-2 flex-shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      variant={ticket.popular ? "default" : "outline"}
                    >
                      {ticket.price === "0" ? "Получить билет" : "Купить билет"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Режим работы */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Режим работы
            </h3>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-green-600 mr-2"
                  />
                  Основная территория
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Вторник - Воскресенье</span>
                  <span className="font-semibold">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Понедельник</span>
                  <span className="font-semibold text-red-600">Выходной</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Касса закрывается</span>
                    <span className="font-semibold">19:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-green-600 mr-2"
                  />
                  Как добраться
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Train"
                    size={18}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold">Метро</div>
                    <div className="text-sm text-gray-600">
                      Краснопресненская, Баррикадная, Улица 1905 года
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Car"
                    size={18}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold">Парковка</div>
                    <div className="text-sm text-gray-600">
                      Платная парковка рядом с главным входом
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Bus"
                    size={18}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold">Автобус</div>
                    <div className="text-sm text-gray-600">
                      № 39, 64, 116, 850 до остановки "Зоопарк"
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketInfo;
