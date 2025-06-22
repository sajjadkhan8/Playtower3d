"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VerificationModalProps {
  isOpen: boolean
  onClose: () => void
  onVerified: () => void
  type: "phone" | "nic"
  value: string
}

export default function VerificationModal({ isOpen, onClose, onVerified, type, value }: VerificationModalProps) {
  const [code, setCode] = useState("")
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, timeLeft])

  const handleVerify = () => {
    if (code === "1234") {
      // Mock verification
      onVerified()
    }
  }

  const handleResend = () => {
    setTimeLeft(60)
    setCode("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-blue-900">Verify {type === "phone" ? "Phone Number" : "NIC"}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-blue-700">
            We've sent a verification code to {type === "phone" ? "your phone" : "verify your NIC"}:
            <span className="font-semibold"> {value}</span>
          </p>

          <div className="space-y-2">
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter verification code"
              className="text-center text-lg tracking-widest"
              maxLength={4}
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-600">{timeLeft > 0 ? `Resend in ${timeLeft}s` : ""}</span>
            {timeLeft === 0 && (
              <Button variant="ghost" onClick={handleResend} className="text-blue-600">
                Resend Code
              </Button>
            )}
          </div>

          <Button onClick={handleVerify} disabled={code.length !== 4} className="w-full bg-blue-600 hover:bg-blue-700">
            Verify
          </Button>

          <p className="text-xs text-blue-500 text-center">For demo purposes, use code: 1234</p>
        </CardContent>
      </Card>
    </div>
  )
}
