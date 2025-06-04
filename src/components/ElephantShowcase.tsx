import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ElephantShowcase = () => {
  const elephantFacts = [
    {
      icon: "Brain",
      title: "Умные гиганты",
      description:
        "Слоны обладают отличной памятью и могут узнавать друг друга через много лет",
    },
    {
      icon: "Heart",
      title: "Семейные ценности",
      description: "Живут большими семьями под руководством самой старой самки",
    },
    {
      icon: "Droplets",
      title: "Водные процедуры",
      description: "Ежедневно купаются и играют в воде до 2 часов",
    },
  ];

  const schedule = [
    { time: "10:00", activity: "Утреннее кормление", icon: "Apple" },
    { time: "14:00", activity: "Водные процедуры", icon: "Waves" },
    { time: "16:30", activity: "Образовательная программа", icon: "BookOpen" },
    { time: "18:00", activity: "Вечернее кормление", icon: "Carrot" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            🐘 Популярное
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Африканские слоны
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Самые крупные наземные млекопитающие планеты в их новом современном
            доме
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Африканские слоны"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <Card className="bg-white/95 backdrop-blur">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Семья слонов в Московском зоопарке
                  </h3>
                  <p className="text-gray-600 text-sm">
                    У нас живут 3 африканских слона: мама Пенни, папа Карл и их
                    малыш Тоша
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Удивительные факты
            </h3>
            {elephantFacts.map((fact, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon
                    name={fact.icon}
                    size={24}
                    className="text-orange-600"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {fact.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Расписание активностей
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schedule.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="bg-orange-50 p-3 rounded-full w-fit mx-auto mb-3">
                    <Icon
                      name={item.icon}
                      size={24}
                      className="text-orange-600"
                    />
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {item.time}
                  </div>
                  <div className="text-gray-900 font-medium text-sm">
                    {item.activity}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на экскурсию к слонам
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ElephantShowcase;
