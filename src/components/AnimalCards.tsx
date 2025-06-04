import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const animals = [
  {
    name: "Амурский тигр",
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    status: "Краснокнижный",
    description:
      "Самая крупная кошка в мире. В зоопарке живут 4 амурских тигра.",
    zone: "Хищники",
  },
  {
    name: "Большая панда",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    status: "Уязвимый вид",
    description:
      "Символ охраны природы. Любят бамбук и спят до 14 часов в день.",
    zone: "Азия",
  },
  {
    name: "Африканский слон",
    image:
      "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    status: "Краснокнижный",
    description:
      "Самое крупное наземное млекопитающее. Живут семьями до 70 лет.",
    zone: "Африка",
  },
  {
    name: "Полярный медведь",
    image:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    status: "Уязвимый вид",
    description:
      "Властелин Арктики. У нас есть современный бассейн для плавания.",
    zone: "Арктика",
  },
  {
    name: "Жираф",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    status: "Уязвимый вид",
    description: "Самое высокое животное планеты. Рост до 6 метров!",
    zone: "Африка",
  },
  {
    name: "Красная панда",
    image:
      "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    status: "Краснокнижный",
    description: "Малая панда — милейшее создание с пушистым хвостом.",
    zone: "Азия",
  },
];

const AnimalCards = () => {
  return (
    <section className="py-16 bg-white" id="animals">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши звёзды
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с самыми популярными обитателями зоопарка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={
                      animal.status === "Краснокнижный"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {animal.status}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-white/90">
                    {animal.zone}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {animal.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {animal.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 text-sm">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    {animal.zone}
                  </div>
                  <button className="text-green-600 hover:text-green-700 transition-colors">
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Посмотреть всех животных
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimalCards;
