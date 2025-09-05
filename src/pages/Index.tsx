import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const games = [
    {
      title: "Genshin Impact",
      description: "Открой мир Тейвата и собери команду уникальных персонажей",
      image: "/img/26d49944-45be-4d92-9529-deeb1cc43f14.jpg",
      genre: "Action RPG",
      status: "Играет"
    },
    {
      title: "Honkai: Star Rail",
      description: "Космические приключения в научно-фантастическом мире",
      image: "/img/26d49944-45be-4d92-9529-deeb1cc43f14.jpg", 
      genre: "Turn-based RPG",
      status: "Любимая"
    },
    {
      title: "Roblox", 
      description: "Безграничные возможности для творчества и игры",
      image: "/img/26d49944-45be-4d92-9529-deeb1cc43f14.jpg",
      genre: "Sandbox",
      status: "Активно"
    },
    {
      title: "Love and Deepspace",
      description: "Романтические приключения с Ксавьером и другими персонажами",
      image: "/img/47ac1b6f-c9e7-42ce-a02e-96e1c45edca4.jpg",
      genre: "Otome",
      status: "Обожаю ❤️"
    }
  ];

  const animeList = [
    {
      title: "Твое имя",
      description: "Магическая история о связи через время и пространство",
      rating: "10/10",
      type: "Фильм"
    },
    {
      title: "Библиотекарь",
      description: "Приключенческий сериал о древних артефактах и магии",
      rating: "9/10", 
      type: "Сериал"
    },
    {
      title: "Человек-паук",
      description: "Все фильмы о дружелюбном соседском супергерое",
      rating: "8/10",
      type: "Фильмы"
    }
  ];

  const characters = [
    {
      name: "Ксавьер",
      origin: "Love and Deepspace", 
      description: "Идеальный романтический персонаж - загадочный, заботливый и невероятно привлекательный",
      image: "/img/e601f4ac-63cb-41c8-9711-6b3215e459f7.jpg",
      traits: ["Романтичный", "Загадочный", "Сильный"]
    },
    {
      name: "Эрика",
      origin: "Дериализация истины",
      description: "Брюнетка с голубыми глазами, талантливый маг из собственной книги Лины",
      image: "/img/e601f4ac-63cb-41c8-9711-6b3215e459f7.jpg",
      traits: ["Магия", "Сильная", "Умная"]
    },
    {
      name: "Маттео/Принц Энрике", 
      origin: "Дериализация истины",
      description: "Брюнет с волосами по плечи и зелеными глазами, попавший в магический мир",
      image: "/img/e601f4ac-63cb-41c8-9711-6b3215e459f7.jpg",
      traits: ["Таинственный", "Храбрый", "Романтичный"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Birthday Greeting */}
      <section className="relative py-24 px-6 text-center magic-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-magic-glow">
              С Днем Рождения, Лина! ✨
            </h1>
            <div className="text-2xl md:text-3xl text-white/90 mb-8 animate-scale-in">
              <span className="block mb-2">Поздравляем с 17-летием!</span>
              <span className="block text-xl opacity-80">Волшебного года, полного романтики и приключений 🎉</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-white/80">
              <span className="flex items-center gap-2">
                <Icon name="BookOpen" size={20} />
                Будущий автор
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Gamepad2" size={20} />
                Геймер
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Sparkles" size={20} />
                Мечтатель
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Heart" size={20} />
                Романтик
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 magic-text">
            Твои увлечения
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in hover:scale-105 transition-transform duration-300 border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-full magic-gradient flex items-center justify-center mb-4">
                  <Icon name="BookHeart" size={24} className="text-white" />
                </div>
                <CardTitle className="font-heading">Литература</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Романтические книжки, манга и мечта написать собственную книгу "Дериализация истины"
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Романтика</Badge>
                  <Badge variant="secondary">Фэнтези</Badge>
                  <Badge variant="secondary">Манга</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:scale-105 transition-transform duration-300 border-primary/20" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full magic-gradient flex items-center justify-center mb-4">
                  <Icon name="Pizza" size={24} className="text-white" />
                </div>
                <CardTitle className="font-heading">Любимые лакомства</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Пицца, окрошка и шоколад Милка с Орео (особенно белый!)
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Пицца 🍕</Badge>
                  <Badge variant="outline">Окрошка 🥣</Badge>
                  <Badge variant="outline">Милка Орео 🤍</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:scale-105 transition-transform duration-300 border-primary/20" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full magic-gradient flex items-center justify-center mb-4">
                  <Icon name="Gem" size={24} className="text-white" />
                </div>
                <CardTitle className="font-heading">Стиль</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Серебряные украшения и вера в серьезные отношения на всю жизнь
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Серебро ✨</Badge>
                  <Badge variant="outline">Романтика 💕</Badge>
                  <Badge variant="outline">Верность ♥️</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 magic-text">
            Игровой мир
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <Card key={game.title} className="animate-fade-in hover:scale-105 transition-transform duration-300 border-primary/20" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-accent text-accent-foreground">{game.genre}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold mb-2">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{game.description}</p>
                  <Badge variant="outline" className="text-xs">{game.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Anime & Movies Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 magic-text">
            Киномир и аниме
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {animeList.map((anime, index) => (
              <Card key={anime.title} className="animate-fade-in hover:scale-105 transition-transform duration-300 border-primary/20" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-heading text-lg">{anime.title}</CardTitle>
                    <Badge variant="secondary">{anime.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{anime.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-accent font-semibold">Рейтинг: {anime.rating}</span>
                    <Icon name="Star" size={16} className="text-accent fill-current" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 magic-text">
            Любимые персонажи
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <Card key={character.name} className="animate-fade-in hover:scale-105 transition-transform duration-300 border-primary/20" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{character.name}</h3>
                  <Badge variant="outline" className="mb-3 text-xs">{character.origin}</Badge>
                  <p className="text-muted-foreground text-sm mb-4">{character.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait, traitIndex) => (
                      <Badge key={traitIndex} variant="secondary" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Project Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-6 magic-text">
              "Дериализация истины"
            </h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
              <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                <img 
                  src="/img/47ac1b6f-c9e7-42ce-a02e-96e1c45edca4.jpg" 
                  alt="Магическая книга"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Твой будущий роман</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                История о магическом мире Эрики и загадочном Маттео, который попал в тело принца Энрике. 
                Романтика, магия и тайны - всё что ты любишь в одной истории!
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-primary">Эрика</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Eye" size={16} className="text-blue-400" />
                      Голубые глаза
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Sparkles" size={16} className="text-purple-400" />
                      Талантливый маг
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Crown" size={16} className="text-accent" />
                      Из магического мира
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-primary">Маттео/Энрике</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Eye" size={16} className="text-green-400" />
                      Зеленые глаза
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="User" size={16} className="text-gray-400" />
                      Из обычного мира
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Shield" size={16} className="text-accent" />
                      Тайна принца
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Button size="lg" className="magic-gradient text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Вдохновение для творчества
            </Button>
          </div>
        </div>
      </section>

      {/* Final Birthday Message */}
      <section className="py-20 px-6 magic-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-white mb-8">
              Пусть этот год будет полон волшебства! ✨
            </h2>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-white">
              <p className="text-xl leading-relaxed mb-6">
                Дорогая Ангелина, желаем тебе невероятного года впереди! 
                Пусть твоя книга станет бестселлером, игры приносят только радость, 
                а романтические истории сбываются в реальности.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <Icon name="Gamepad2" size={18} />
                  Побед в играх
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="BookHeart" size={18} />
                  Творческого вдохновения
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Heart" size={18} />
                  Настоящей любви
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Sparkles" size={18} />
                  Исполнения желаний
                </span>
              </div>
            </div>
            <div className="mt-8 text-2xl">
              С любовью, поздравляем с 17-летием! 🎂🎉✨
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}