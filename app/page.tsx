"use client"

import { useState } from "react"
import ChoiceScreen from "../components/choice-screen"
import SignUpForm from "../components/signup-form"
import VehicleDetailsForm from "../components/vehicle-details-form"
import RouteDetailsForm from "../components/route-details-form"
import Header from "../components/header"
import Hero from "../components/hero"
import GamesSection from "../components/games-section"
import Footer from "../components/footer"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"choice" | "signup" | "vehicle" | "route" | "home">("home")
  const [userType, setUserType] = useState<"driver" | "parent" | null>(null)

  const handleRoleSelection = (role: "driver" | "parent") => {
    setUserType(role)
    setCurrentScreen("signup")
  }

  const handleSignUpComplete = () => {
    if (userType === "driver") {
      setCurrentScreen("vehicle")
    }
    // For parents, you might navigate to a different screen
  }

  const handleVehicleDetailsComplete = () => {
    setCurrentScreen("route")
  }

  const handleRouteDetailsComplete = () => {
    console.log("Registration complete!")
    // Navigate to dashboard or success screen
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {currentScreen === "home" && <HomePage />}
      {currentScreen === "choice" && <ChoiceScreen onRoleSelect={handleRoleSelection} />}
      {currentScreen === "signup" && (
        <SignUpForm userType={userType!} onComplete={handleSignUpComplete} onBack={() => setCurrentScreen("choice")} />
      )}
      {currentScreen === "vehicle" && (
        <VehicleDetailsForm onComplete={handleVehicleDetailsComplete} onBack={() => setCurrentScreen("signup")} />
      )}
      {currentScreen === "route" && (
        <RouteDetailsForm onComplete={handleRouteDetailsComplete} onBack={() => setCurrentScreen("vehicle")} />
      )}
    </div>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GamesSection />
      <Footer />
    </div>
  )
}
