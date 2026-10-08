import logo from "../assets/logo.png";

export default function Hero() {
    return (
      <div className="flex flex-col relative pt-32 min-h-screen text-center">
        <div className="relative inline-block">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24">
             <div className="w-30 h-30 ml-9 mt-8 bg-indigo-400/30 rounded-full blur-2xl pointer-events-none glow-once">
              </div>
               </div>
             <img src= {logo} alt="khenishere's logo" className="mx-auto w-35 h-35 object-contain"></img>
        </div>  
        <p className="text-2xl text-white font-mono mt-4">hey it's khen!</p>
      </div>
    )}