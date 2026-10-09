import logo from "../assets/logo.png";
import {useState} from "react";

const GREETINGS = [
  "sup, it's khen!",
  "wassup, khen here!",
  "don't fret, khen is here!",
  "どうも, けんーさん です!",
  "khen IS here (o・∀・)b",
  "(˶ᵔᗜᵔ˶)ﾉﾞ  hey, it's khen!",
]

export default function Hero() {

const [greeting] = useState(() =>{
  const randomGreeting = Math.floor(Math.random() * GREETINGS.length);
  return GREETINGS[randomGreeting];
});

    return (
      <div className="flex flex-col relative pt-32 min-h-screen text-center">
        <div className="relative inline-block">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24">
             <div className="w-30 h-30 ml-9 mt-11 bg-indigo-400/30 rounded-full blur-2xl pointer-events-none glow-once">
              </div>
               </div>
             <img src= {logo} alt="khenishere's logo" className="mx-auto w-35 h-35 object-contain"></img>
        </div>  
        <p className="text-2xl text-white font-mono mt-4 fadeIn-anim">{greeting}</p>
        <p className="text-1xl text-white font-mono mt-1 fadeIn-anim">khenishere</p>
        <p className="text-1xl text-white font-mono mt-1 fadeIn-anim">//VIDEO EDITOR & DEVELOPER</p>

        <div className="flex flex-row justify-center gap-4 mt-15 fadeIn-anim z-20">

          <button className="px-6 py-2.5 font-mono text-sm text-white border-#16103c border-0.5 bg-indigo-500/50 transition-all duration-200 ease-out hover:-translate-y-0.5 inline-block cursor-pointer pointer-events-auto
          hover:shadow-[inset_0_0_25px_#16103c] hover:text-slate hover:border-#16103c active:translate-y-0">
          [VIEW REELS]
          </button>
          <button className="px-6 py-2.5 font-mono text-sm text-white border-#16103c border-0.5 bg-indigo-500/50 transition-all duration-200 ease-out hover:-translate-y-0.5 inline-block cursor-pointer pointer-events-auto
          hover:shadow-[inset_0_0_25px_#16103c] hover:text-slate hover:border-#16103c active:translate-y-0">
          [CONTACT ME]
          </button>

        </div>


      </div>
    )}