import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { InteractiveMap } from "@/components/interactive-map"

export const metadata: Metadata = {
  title: "Contact Us | GKP Furniture",
  description: "Get in touch with GKP Furniture. Visit our showroom or contact us via phone or email.",
}

export default function ContactPage() {
  // GKP Furniture location coordinates (Gorakhpur, Uttar Pradesh)
  const storeLocation = {
    address: "Q9VC+986, near ocean 11 resort, Nakaha no 1, Ramjanki Nagar, Gorakhpur, Uttar Pradesh 273004, India",
    latitude: 26.7605,
    longitude: 83.3731,
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+91 9876543210</p>
                <p className="text-muted-foreground">+91 9876543211</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@gkpfurniture.com</p>
                <p className="text-muted-foreground">support@gkpfurniture.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p className="text-muted-foreground">Sunday: 11:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">{storeLocation.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full p-2 border rounded-md" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-2 border rounded-md"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
          <p className="mb-4">Visit our showroom to experience our furniture collections in person:</p>

          <InteractiveMap
            address={storeLocation.address}
            latitude={storeLocation.latitude}
            longitude={storeLocation.longitude}
            height="500px"
            className="mb-4"
          />

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">How to reach us:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Located near Ocean 11 Resort in Ramjanki Nagar</li>
              <li>10 minutes from Gorakhpur Railway Station</li>
              <li>15 minutes from Gorakhpur Airport</li>
              <li>Ample parking space available</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
