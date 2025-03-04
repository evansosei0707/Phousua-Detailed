import React from "react"
import Link from "next/link"
import Image from "next/image"
import appointmentImage from "@/public/images/custom-made.webp"
import { Calendar, Clock, ChevronRight, CheckCircle } from "lucide-react"

const AppointmentCallToAction = () => {
  return (
    <section className=" py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content - Text and CTA */}
          <div className="flex-1 text-white space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/30">
                Book Your Appointment
              </span>
              <br />
              <span className="text-[#3B3B3B] dark:text-white">
                With Phosua Detailed Collections
              </span>
            </h2>

            <p className="dark:text-gray-300 text-[#3B3B3B] text-lg md:text-xl max-w-xl">
              Experience luxury nail care services tailored to your style. Our
              expert technicians are ready to pamper you with precision and
              care.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <p className="dark:text-gray-200 text-gray-700">
                  Easy online scheduling
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <p className="dark:text-gray-200 text-gray-700">
                  Flexible appointment times
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <p className="dark:text-gray-200 text-gray-700">
                  Instant confirmation
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link prefetch={true} href="/appointment">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gradient-to-r from-primary to-primary/30 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:scale-105">
                  <span className="mr-3">Book Now</span>
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right content - Image or illustration */}
          <div className="flex-1 relative max-w-full">
            <div className="relative z-10 bg-white p-6 md:p-8 rounded-xl shadow-2xl">
              <div className="absolute -top-6 -right-6 bg-primary rounded-full p-4 shadow-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Next Available Slots
                </h3>

                <div className="space-y-4">
                  {["Today", "Tomorrow", "Thursday"].map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-primary/30 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="font-medium text-gray-800">{day}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        3 slots available
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center pt-4">
                  <Link href="/appointment">
                    <button className="w-full text-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                      <span>View All Availability</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-r from-primary to-primary/50 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 -right-12 w-32 h-32 bg-primary rounded-full filter blur-xl opacity-30"></div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mt-20 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-black/20 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src={appointmentImage}
                  alt="Customer"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="dark:text-gray-300 text-black/90 italic">
                &quot;Booking with Phosua Detailed Collections was so easy! The
                interface is intuitive, and I got my appointment confirmation
                right away. The service was even better than I expected!&quot;
              </p>
              <p className="mt-4 font-medium text-primary">Jessica T.</p>
              <p className="text-sm text-gray-400">Satisfied Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentCallToAction
