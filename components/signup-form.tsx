"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, User, Phone, MapPin, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import VerificationModal from "./verification-modal"

interface SignUpFormProps {
  userType: "driver" | "parent"
  onComplete: () => void
  onBack: () => void
}

export default function SignUpForm({ userType, onComplete, onBack }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    nic: "",
  })

  const [showPhoneVerification, setShowPhoneVerification] = useState(false)
  const [showNicVerification, setShowNicVerification] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [nicVerified, setNicVerified] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePhoneVerification = () => {
    if (formData.phoneNumber) {
      setShowPhoneVerification(true)
    }
  }

  const handleNicVerification = () => {
    if (formData.nic) {
      setShowNicVerification(true)
    }
  }

  const handlePhoneVerified = () => {
    setPhoneVerified(true)
    setShowPhoneVerification(false)
  }

  const handleNicVerified = () => {
    setNicVerified(true)
    setShowNicVerification(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phoneVerified && nicVerified && Object.values(formData).every((field) => field.trim())) {
      onComplete()
    }
  }

  const isFormValid = phoneVerified && nicVerified && Object.values(formData).every((field) => field.trim())

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-blue-900">
              Sign Up as {userType === "driver" ? "Driver" : "Parent"}
            </CardTitle>
            <p className="text-blue-600">Please fill in your details</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-blue-800 font-medium">
                    <User className="w-4 h-4 inline mr-2" />
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-blue-800 font-medium">
                    <User className="w-4 h-4 inline mr-2" />
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-blue-800 font-medium">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="+94 77 123 4567"
                    required
                  />
                  <Button
                    type="button"
                    onClick={handlePhoneVerification}
                    disabled={!formData.phoneNumber || phoneVerified}
                    className={`px-4 ${phoneVerified ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
                  >
                    {phoneVerified ? <Check className="w-4 h-4" /> : "Verify"}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-blue-800 font-medium">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nic" className="text-blue-800 font-medium">
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  NIC Number
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="nic"
                    value={formData.nic}
                    onChange={(e) => handleInputChange("nic", e.target.value)}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="123456789V"
                    required
                  />
                  <Button
                    type="button"
                    onClick={handleNicVerification}
                    disabled={!formData.nic || nicVerified}
                    className={`px-4 ${nicVerified ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
                  >
                    {nicVerified ? <Check className="w-4 h-4" /> : "Verify"}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg mt-6 disabled:opacity-50"
              >
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <VerificationModal
        isOpen={showPhoneVerification}
        onClose={() => setShowPhoneVerification(false)}
        onVerified={handlePhoneVerified}
        type="phone"
        value={formData.phoneNumber}
      />

      <VerificationModal
        isOpen={showNicVerification}
        onClose={() => setShowNicVerification(false)}
        onVerified={handleNicVerified}
        type="nic"
        value={formData.nic}
      />
    </div>
  )
}
