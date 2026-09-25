import { useState, useEffect, useCallback } from 'react';

// Компонент летающих сердечек на фоне
function FloatingHearts() {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 20 + 10,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            animationIterationCount: 'infinite',
            opacity: heart.opacity,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
}

// Компонент звёзд/блёсток
function Sparkles() {
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// Конфетти при согласии
function Confetti() {
  const pieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: ['#ff6b9d', '#ffa8c5', '#ff4081', '#e91e63', '#f8bbd0', '#ffd700', '#ff69b4'][Math.floor(Math.random() * 7)],
    size: Math.random() * 10 + 5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Главная секция
function HeroSection({ onScrollDown }: { onScrollDown: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center animate-fade-in-up">
        <div className="text-6xl md:text-8xl mb-6 animate-pulse-heart">💝</div>
        <p className="text-2xl md:text-4xl text-pink-300/90 mb-4 font-light italic animate-fade-in delay-100">
          Дорогая, Маша
        </p>
        <h1 className="text-4xl md:text-7xl font-bold text-gradient mb-6 leading-tight">
          У меня есть<br />вопрос к тебе...
        </h1>
        <p className="text-xl md:text-2xl text-pink-200/80 mb-10 animate-fade-in delay-500 max-w-lg mx-auto">
          Но сначала позволь мне сказать кое-что важное
        </p>
        <button
          onClick={onScrollDown}
          className="animate-fade-in delay-1000 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 glow-pink hover:scale-105 transform"
        >
          Продолжить ↓
        </button>
      </div>
    </section>
  );
}

// Секция "Ты особенная"
function ReasonsSection({ onNext }: { onNext: () => void }) {
  const reasons = [
    { emoji: '✨', text: 'Твоя улыбка освещает мой день' },
    { emoji: '🌹', text: 'Ты делаешь мир красивее просто тем, что ты в нём есть' },
    { emoji: '💫', text: 'Рядом с тобой я становлюсь лучшей версией себя' },
    { emoji: '🦋', text: 'Моё сердце бьётся быстрее, когда ты рядом' },
    { emoji: '🌙', text: 'Ты — моя последняя мысль перед сном и первая при пробуждении' },
    { emoji: '🔥', text: 'С тобой даже обычные моменты становятся волшебными' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4 animate-fade-in-up text-center">
        Почему ты особенная
      </h2>
      <p className="text-pink-200/60 text-lg mb-12 animate-fade-in-up delay-200 text-center">
        (и это далеко не полный список)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-12">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className={`glass-card rounded-2xl p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300 glow-pink`}
            style={{ animationDelay: `${(i + 1) * 200}ms` }}
          >
            <span className="text-3xl mb-3 block">{reason.emoji}</span>
            <p className="text-pink-100 text-lg">{reason.text}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onNext}
        className="animate-fade-in delay-1500 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 glow-pink hover:scale-105 transform"
      >
        Далее →
      </button>
    </section>
  );
}

// Секция с приглашением
function InvitationSection({ onAccept }: { onAccept: () => void }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noMoved, setNoMoved] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  const moveNoButton = useCallback(() => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
    setNoMoved(true);
    setAttemptCount((prev) => prev + 1);
  }, []);

  const noMessages = [
    'Нет',
    'Ты уверена? 🥺',
    'Подумай ещё раз!',
    'Может передумаешь? 💕',
    'Ну пожалуйста! 🙏',
    'Моё сердце разобьётся 💔',
    'Дай мне шанс! 🌹',
    'Нажми ДА! 😍',
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        <div className="text-5xl md:text-7xl mb-8 animate-wiggle">💌</div>
        <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6 animate-fade-in-up">
          Так вот мой вопрос...
        </h2>
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-10 animate-fade-in-up delay-300 glow-pink">
          <p className="text-2xl md:text-3xl text-pink-100 leading-relaxed mb-4">
            Пойдёшь со мной на <span className="text-gradient font-bold">свидание</span>?
          </p>
          <p className="text-lg text-pink-200/70">
            Обещаю: красивое место, вкусная еда и компания, которая тебя обожает 💕
          </p>
        </div>

        {attemptCount > 3 && (
          <p className="text-pink-300/80 mb-6 animate-bounce-in text-lg">
            Подсказка: правильная кнопка — это "Да" 😉
          </p>
        )}

        <div className="flex items-center justify-center gap-8 relative min-h-[120px]">
          <button
            onClick={onAccept}
            className="px-12 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white rounded-full text-2xl font-bold hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 transition-all duration-300 glow-pink hover:scale-110 transform animate-bounce-in delay-500 shadow-2xl"
          >
            Да! 💕
          </button>
          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="px-8 py-4 bg-gray-700/50 text-gray-400 rounded-full text-lg transition-all duration-300 border border-gray-600/30"
            style={{
              transform: noMoved ? `translate(${noPos.x}px, ${noPos.y}px)` : 'translate(0, 0)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            {noMessages[Math.min(attemptCount, noMessages.length - 1)]}
          </button>
        </div>
      </div>
    </section>
  );
}

// Секция после согласия
function AcceptedSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        <div className="text-7xl md:text-9xl mb-8 animate-bounce-in">🎉</div>
        <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6 animate-fade-in-up delay-200">
          Урааа! 🥰
        </h2>
        <div className="glass-card rounded-3xl p-8 md:p-12 animate-fade-in-up delay-500 glow-pink">
          <p className="text-2xl md:text-3xl text-pink-100 leading-relaxed mb-6">
            Я так счастлив(а)! 💕
          </p>
          <p className="text-xl text-pink-200/80 mb-8">
            Обещаю, это будет незабываемый вечер ✨
          </p>
          
          <div className="glass-card rounded-2xl p-6 mb-8 border border-pink-400/20">
            <h3 className="text-2xl md:text-3xl text-gradient font-bold mb-6">
              Детали свидания 💌
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📅</span>
                <div>
                  <p className="text-pink-300/70 text-sm uppercase tracking-wide">Дата</p>
                  <p className="text-xl md:text-2xl text-pink-100 font-medium">4 октября 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="text-pink-300/70 text-sm uppercase tracking-wide">Время</p>
                  <p className="text-xl md:text-2xl text-pink-100 font-medium">14:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="text-pink-300/70 text-sm uppercase tracking-wide">Место</p>
                  <p className="text-xl md:text-2xl text-pink-100 font-medium">проспект Дзержинского 9/2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-5xl animate-pulse-heart mb-6">
            💑
          </div>
          <p className="text-lg text-pink-300/60 italic">
            "Лучшие истории начинаются с 'да'" 💫
          </p>
        </div>
        <div className="mt-10 animate-fade-in delay-1000">
          <p className="text-pink-200/50 text-lg">
            С нетерпением жду нашей встречи... 🌹
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const scrollToInvitation = () => {
    window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
  };

  useEffect(() => {
    if (accepted) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [accepted]);

  return (
    <div className="romantic-gradient min-h-screen text-white relative">
      <FloatingHearts />
      <Sparkles />
      {showConfetti && <Confetti />}

      <div className="relative z-10">
        <HeroSection onScrollDown={scrollToNext} />
        <ReasonsSection onNext={scrollToInvitation} />
        {!accepted ? (
          <InvitationSection onAccept={handleAccept} />
        ) : (
          <AcceptedSection />
        )}
      </div>

      {/* Футер */}
      <footer className="relative z-10 text-center py-8 text-pink-300/30 text-sm">
        <p>Сделано с 💖 специально для тебя</p>
      </footer>
    </div>
  );
}
