import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Добро пожаловать в
            <span className="text-green-600 block">Московский зоопарк</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Встретьтесь с удивительными животными со всего мира в старейшем
            зоопарке России. Более 1000 видов ждут вас!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
            >
              <Icon name="Ticket" size={20} className="mr-2" />
              Купить билеты онлайн
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-green-600 border-green-600 hover:bg-green-50 text-lg px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Виртуальный тур
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">1000+</div>
              <div className="text-gray-600 text-sm">видов животных</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">160</div>
              <div className="text-gray-600 text-sm">лет истории</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">21.5</div>
              <div className="text-gray-600 text-sm">гектара площади</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">3M+</div>
              <div className="text-gray-600 text-sm">посетителей в год</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
