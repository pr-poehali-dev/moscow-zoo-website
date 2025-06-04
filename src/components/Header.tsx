import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">🦁</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Московский зоопарк
              </h1>
              <p className="text-sm text-gray-600">С 1864 года</p>
            </div>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#animals"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Животные
            </a>
            <a
              href="#tickets"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Билеты
            </a>
            <a
              href="#events"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              События
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              О зоопарке
            </a>
            <Button className="bg-green-600 hover:bg-green-700">
              Купить билет
            </Button>
          </nav>

          {/* Мобильное меню */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#animals"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
              >
                Животные
              </a>
              <a
                href="#tickets"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
              >
                Билеты
              </a>
              <a
                href="#events"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
              >
                События
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
              >
                О зоопарке
              </a>
              <Button className="bg-green-600 hover:bg-green-700 mt-3">
                Купить билет
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
