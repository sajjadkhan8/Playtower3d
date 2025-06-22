"use client"

import { Car, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChoiceScreenProps {
  onRoleSelect: (role: "driver" | "parent") => void
}

export default function ChoiceScreen({ onRoleSelect }: ChoiceScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-blue-900">Welcome!</h1>
          <p className="text-blue-700">Choose your role to get started</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => onRoleSelect("driver")}
            className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            <Car className="w-6 h-6 mr-3" />I am a driver
          </Button>

          <Button
            onClick={() => onRoleSelect("parent")}
            className="w-full h-16 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
          >
            <Users className="w-6 h-6 mr-3" />I am a parent
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-blue-600">Select the option that best describes you</p>
        </div>
      </div>
    </div>
  )
}
