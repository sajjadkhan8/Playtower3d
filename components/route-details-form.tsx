"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, MapPin, Clock, GraduationCap, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface RouteDetailsFormProps {
  onComplete: () => void
  onBack: () => void
}

const popularSchools = [
  "Royal College",
  "Trinity College",
  "St. Thomas' College",
  "Ladies' College",
  "Bishop's College",
  "Ananda College",
  "Nalanda College",
  "Visakha Vidyalaya",
  "Methodist College",
  "St. Joseph's College",
]

export default function RouteDetailsForm({ onComplete, onBack }: RouteDetailsFormProps) {
  const [routeData, setRouteData] = useState({
    pickupLocation: "",
    dropLocation: "",
    pickupTime: "",
    dropTime: "",
    preferredSchools: [] as string[],
  })

  const handleInputChange = (field: string, value: string) => {
    setRouteData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSchoolToggle = (school: string, checked: boolean) => {
    setRouteData((prev) => ({
      ...prev,
      preferredSchools: checked
        ? [...prev.preferredSchools, school]
        : prev.preferredSchools.filter((s) => s !== school),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      routeData.pickupLocation.trim() &&
      routeData.dropLocation.trim() &&
      routeData.pickupTime &&
      routeData.dropTime &&
      routeData.preferredSchools.length > 0
    ) {
      onComplete()
    }
  }

  const isFormValid =
    routeData.pickupLocation.trim() &&
    routeData.dropLocation.trim() &&
    routeData.pickupTime &&
    routeData.dropTime &&
    routeData.preferredSchools.length > 0

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-blue-900">Route Details</CardTitle>
            <p className="text-blue-600">Set up your service route</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pickupLocation" className="text-blue-800 font-medium">
                  <Navigation className="w-4 h-4 inline mr-2" />
                  Pickup Location
                </Label>
                <Input
                  id="pickupLocation"
                  value={routeData.pickupLocation}
                  onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter pickup area/location"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dropLocation" className="text-blue-800 font-medium">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Drop Location
                </Label>
                <Input
                  id="dropLocation"
                  value={routeData.dropLocation}
                  onChange={(e) => handleInputChange("dropLocation", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter drop area/location"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pickupTime" className="text-blue-800 font-medium">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Pickup Time
                  </Label>
                  <Input
                    id="pickupTime"
                    type="time"
                    value={routeData.pickupTime}
                    onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dropTime" className="text-blue-800 font-medium">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Drop Time
                  </Label>
                  <Input
                    id="dropTime"
                    type="time"
                    value={routeData.dropTime}
                    onChange={(e) => handleInputChange("dropTime", e.target.value)}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-blue-800 font-medium">
                  <GraduationCap className="w-4 h-4 inline mr-2" />
                  Preferred Schools
                </Label>
                <p className="text-sm text-blue-600">Select schools you'd like to provide service to:</p>

                <div className="max-h-48 overflow-y-auto space-y-3 border border-blue-200 rounded-lg p-4 bg-blue-50/30">
                  {popularSchools.map((school) => (
                    <div key={school} className="flex items-center space-x-3">
                      <Checkbox
                        id={school}
                        checked={routeData.preferredSchools.includes(school)}
                        onCheckedChange={(checked) => handleSchoolToggle(school, checked as boolean)}
                        className="border-blue-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor={school} className="text-blue-800 font-medium cursor-pointer flex-1">
                        {school}
                      </Label>
                    </div>
                  ))}
                </div>

                {routeData.preferredSchools.length > 0 && (
                  <div className="text-sm text-blue-600">
                    Selected: {routeData.preferredSchools.length} school
                    {routeData.preferredSchools.length !== 1 ? "s" : ""}
                  </div>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Route Summary</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>
                    <strong>From:</strong> {routeData.pickupLocation || "Not set"}
                  </p>
                  <p>
                    <strong>To:</strong> {routeData.dropLocation || "Not set"}
                  </p>
                  <p>
                    <strong>Time:</strong> {routeData.pickupTime || "Not set"} - {routeData.dropTime || "Not set"}
                  </p>
                  <p>
                    <strong>Schools:</strong> {routeData.preferredSchools.length} selected
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg mt-6 disabled:opacity-50"
              >
                Complete Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
