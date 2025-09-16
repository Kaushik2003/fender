"use client"

import { ChevronRight, Clock, Code, Leaf, Database, FileText } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
// import { AuroraText } from "@/components/magicui/aurora-text"
import Link from "next/link"
import AnimatedListDemo from "@/components/Notification"
import { Bento1 } from "./bento1"
// import { Notification } from "@/components/Notification"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export default function BentoGrid() {
  // Animation variants
  const cardVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className={cn("relative text-white px-4 md:px-6 z-10 py-20", poppins.className)}>
      <div className="w-full max-w-[95vw] lg:max-w-[1800px] mx-auto relative">
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px] ">
          <motion.h1
            className={cn("text-3xl md:text-4xl lg:text-5xl font-thin text-center mb-32 col-span-12 ", poppins.className)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-5xl text-white/80 leading-tight">Why Choose Fender ?</span>
            <br />
            <span className="text-xl md:text-2xl font-light text-white/70 ">
              Fast, affordable, and secure token vesting—Built on Algorand.
            </span>
          </motion.h1>

          {/* Fast Transactions - Top Left (Large) */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={0}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
                
                  
                    <h2 className="text-2xl font-thin leading-tight text-white mb-6">
                      Security First
                    </h2>
                  
                  
                
                
                  <Bento1 />
               
              
              
            </motion.div>
          </Link>

          {/* Low-Cost Operations - Top Center */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={1}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-thin mb-2 text-white">Ultra-Low Fees</h3>
                  <p className="text-white/90 text-sm font-light">Affordable for everyone, always</p>
                </div>
                

              </div>
            </motion.div>
          </Link>

          {/* EVM Compatibility - Top Right */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-2 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={2}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-thin text-white">Why Algorand</h3>
                    <p className="text-white/90 text-sm font-light">Security, speed, and future-proofing</p>
                  </div>
                  
                </div>
                
              </div>
            </motion.div>
          </Link>

          {/* Data Transparency - Middle Right */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-1 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={3}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-thin text-white">Transparent & Trustless</h3>
                  <p className="text-lg font-thin text-white/90">No middlemen, no secrets</p>
                </div>
                <div className="w-10 h-10 bg-[#df500f]/20 rounded-xl flex items-center justify-center border border-white/10">
                  <Database className="w-5 h-5 text-[#df500f]" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Will Creation - Bottom Left */}
          <Link href="/" className="col-span-12 md:col-span-3 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={4}
            >
              <Bento1 />
            </motion.div>
          </Link>

          {/* Eco-Friendly Features - Bottom Center */}
          <Link href="/" className="col-span-12 md:col-span-5 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={5}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800080]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-thin mb-2 text-white">Eco-Friendly Legacy</h3>
                  <p className="text-white/90 text-sm font-light">Leave a mark, not a footprint</p>
                </div>
                
                
              </div>
            </motion.div>
          </Link>

          {/* Smart Contract Features - Bottom Right */}
          <Link href="/" className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
            <motion.div
              className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={6}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Smart Contract Cards */}
                <div className="mb-4 flex-1 flex flex-col justify-start">
                  {/* <AnimatedListDemo /> */}
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}
