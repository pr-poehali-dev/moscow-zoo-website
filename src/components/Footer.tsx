import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О зоопарке */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-xl">🦁</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Московский зоопарк</h3>
                <p className="text-sm text-gray-400">С 1864 года</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Старейший зоопарк России, дом для более чем 1000 видов животных со
              всего мира.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Животные
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Билеты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  События
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Экскурсии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Образование
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Поддержать зоопарк
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О зоопарке
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  История
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Правила посещения
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Карта зоопарка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-green-600 mt-1 flex-shrink-0"
                />
                <div className="text-gray-400">
                  Большая Грузинская ул., 1,
                  <br />
                  Москва, 123242
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon
                  name="Phone"
                  size={16}
                  className="text-green-600 flex-shrink-0"
                />
                <a
                  href="tel:+74959221375"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +7 (495) 922-13-75
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon
                  name="Mail"
                  size={16}
                  className="text-green-600 flex-shrink-0"
                />
                <a
                  href="mailto:info@moscowzoo.ru"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@moscowzoo.ru
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon
                  name="Clock"
                  size={16}
                  className="text-green-600 flex-shrink-0"
                />
                <div className="text-gray-400">
                  Ежедневно 10:00-20:00
                  <br />
                  (кроме понедельника)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Московский зоопарк. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
