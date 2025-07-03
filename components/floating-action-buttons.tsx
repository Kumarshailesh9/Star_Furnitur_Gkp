"use client"

import { useState } from "react"
import { Phone, MessageCircle, X, MessagesSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "+919876543210" // Replace with actual phone number

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Call Button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              className="flex items-center bg-primary text-primary-foreground rounded-full px-4 py-3 shadow-lg hover:bg-primary/90 transition-colors"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">Call Us</span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${phoneNumber.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25D366] text-white rounded-full px-4 py-3 shadow-lg hover:bg-[#22c55e] transition-colors"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.1 } }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">WhatsApp</span>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-full w-14 h-14 shadow-lg transition-colors ${
          isOpen ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessagesSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}
