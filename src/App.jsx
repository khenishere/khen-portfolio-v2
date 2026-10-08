import Hero from "./components/Hero";

export default function App() {
  return (
    <div className = "fixed inset-0 bg-linear-to-bl from-bg-light via-bg-mid to-bg-dark">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern bg-vignette-mask text-center">
              <Hero />
        </div>
      </div>
  ) 
}