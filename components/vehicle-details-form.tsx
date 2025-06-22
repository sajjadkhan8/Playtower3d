"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Car, Hash, Thermometer, Palette, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface VehicleDetailsFormProps {
  onComplete: () => void
  onBack: () => void
}

export default function VehicleDetailsForm({ onComplete, onBack }: VehicleDetailsFormProps) {
  const [vehicleData, setVehicleData] = useState({
    type: "",
    number: "",
    hasAC: "",
    color: "",
    seats: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setVehicleData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.values(vehicleData).every((field) => field.trim())) {
      onComplete()
    }
  }

  const isFormValid = Object.values(vehicleData).every((field) => field.trim())

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-blue-900">Vehicle Details</CardTitle>
            <p className="text-blue-600">Tell us about your vehicle</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-blue-800 font-medium">
                  <Car className="w-4 h-4 inline mr-2" />
                  Vehicle Type
                </Label>
                <Select onValueChange={(value) => handleInputChange("type", value)}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="three-wheeler">Three Wheeler</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicleNumber" className="text-blue-800 font-medium">
                  <Hash className="w-4 h-4 inline mr-2" />
                  Vehicle Number
                </Label>
                <Input
                  id="vehicleNumber"
                  value={vehicleData.number}
                  onChange={(e) => handleInputChange("number", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ABC-1234"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label className="text-blue-800 font-medium">
                  <Thermometer className="w-4 h-4 inline mr-2" />
                  Air Conditioning
                </Label>
                <RadioGroup
                  value={vehicleData.hasAC}
                  onValueChange={(value) => handleInputChange("hasAC", value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ac" id="ac" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="ac" className="text-blue-700">
                      AC
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non-ac" id="non-ac" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="non-ac" className="text-blue-700">
                      Non-AC
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label className="text-blue-800 font-medium">
                  <Palette className="w-4 h-4 inline mr-2" />
                  Vehicle Color
                </Label>
                <Select onValueChange={(value) => handleInputChange("color", value)}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="silver">Silver</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="gray">Gray</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-blue-800 font-medium">
                  <Users className="w-4 h-4 inline mr-2" />
                  Number of Seats
                </Label>
                <Select onValueChange={(value) => handleInputChange("seats", value)}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select number of seats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 Seats</SelectItem>
                    <SelectItem value="4">4 Seats</SelectItem>
                    <SelectItem value="5">5 Seats</SelectItem>
                    <SelectItem value="7">7 Seats</SelectItem>
                    <SelectItem value="8">8 Seats</SelectItem>
                    <SelectItem value="12">12 Seats</SelectItem>
                    <SelectItem value="15">15+ Seats</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg mt-6 disabled:opacity-50"
              >
                Continue to Route Details
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
