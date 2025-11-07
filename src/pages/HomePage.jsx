export default function HomePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/9a/Dungeons_%26_Dragons_5th_Edition_logo.svg"
          alt="DND"
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mb-8 rounded-lg shadow-lg transition-transform hover:scale-105"
        />
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-600 font-semibold">
          Crée ton héros et pars à l’aventure !
        </p>
      </div>
    );
  }
  