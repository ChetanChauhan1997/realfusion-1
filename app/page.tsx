"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Mail, Phone, MapPin, BarChart3, Users, Brain, ChevronLeft, ChevronRight } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function RealFusionPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const carouselSlides = [
    {
      image: "/dubai-marina-luxury.png",
      title: "Dubai Marina",
      subtitle: "Luxury Waterfront Living",
      description: "Discover premium investment opportunities in Dubai's most prestigious marina district",
    },
    {
      image: "/dubai-skyline-luxury.png",
      title: "Downtown Dubai",
      subtitle: "Heart of the City",
      description: "Experience the pinnacle of urban sophistication with world-class amenities",
    },
    {
      image: "/palm-jumeirah-luxury-villas.png",
      title: "Palm Jumeirah",
      subtitle: "Iconic Island Paradise",
      description: "Exclusive villas on the world's most famous man-made island",
    },
    {
      image: "/dubai-business-bay-canal.png",
      title: "Business Bay",
      subtitle: "Commercial Excellence",
      description: "Strategic investments in Dubai's thriving business and financial hub",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "carousel", "about", "power-of-ai", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [carouselSlides.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <img src="/modern-real-estate-logo-rf.png" alt="RealFusion Logo" className="w-10 h-10" />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                RealFusion
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "carousel", label: "Discover Dubai's Finest" },
                { id: "about", label: "About Us" },
                { id: "power-of-ai", label: "The Power of AI" },
                { id: "contact", label: "Contact Us" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="/dubai-sunset-skyline.png" alt="Dubai Skyline" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-100/90" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              Best in Class Real Estate
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Investment Insights
            </span>
            <br />
            <span className="text-slate-600 text-4xl md:text-5xl">with a Human Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            RealFusion brings you AI-powered insights and expert local guidance to uncover Dubai's most lucrative real
            estate opportunities—helping high-net-worth investors make smarter, more confident decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </motion.button>

            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Smarter Investments.
              </div>
              <div className="text-lg text-slate-600">Humanly Delivered.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => scrollToSection("carousel")}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section id="carousel" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Discover Dubai's Finest
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore the most prestigious locations where luxury meets opportunity
            </p>
          </motion.div>

          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {carouselSlides.map((slide, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Animated text overlay */}
                <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 50,
                    }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white max-w-2xl"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        x: index === currentSlide ? 0 : -30,
                      }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-sm md:text-base font-medium text-cyan-300 mb-2 tracking-wide uppercase"
                    >
                      {slide.subtitle}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        x: index === currentSlide ? 0 : -30,
                      }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
                    >
                      {slide.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        x: index === currentSlide ? 0 : -30,
                      }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-lg md:text-xl text-slate-200 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-blue-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At RealFusion, we redefine real estate investing in Dubai through the perfect blend of advanced AI
                technology and trusted human expertise.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our proprietary machine learning models analyze hundreds of market variables—property performance,
                neighborhood trends, and future ROI potential to deliver unmatched investment insights and predictive
                analytics.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With our interactive tools, you can explore opportunities, compare properties, and make data-driven
                decisions with a level of clarity unavailable anywhere else in the market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/dubai-marina-luxury.png"
                  alt="Dubai Marina"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-8 rounded-b-2xl border border-slate-200">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">500+</div>
                      <div className="text-slate-500">Properties Analyzed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600">95%</div>
                      <div className="text-slate-500">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600">24/7</div>
                      <div className="text-slate-500">Market Monitoring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">100+</div>
                      <div className="text-slate-500">Happy Investors</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Dubai's Premier Real Estate Locations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="relative group overflow-hidden rounded-xl">
                <img
                  src="/dubai-marina-luxury.png"
                  alt="Dubai Marina"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold">Dubai Marina</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="relative group overflow-hidden rounded-xl">
                <img
                  src="/dubai-skyline-luxury.png"
                  alt="Downtown Dubai"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold">Downtown Dubai</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="relative group overflow-hidden rounded-xl">
                <img
                  src="/palm-jumeirah-luxury-villas.png"
                  alt="Palm Jumeirah"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold">Palm Jumeirah</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="relative group overflow-hidden rounded-xl">
                <img
                  src="/dubai-business-bay-canal.png"
                  alt="Business Bay"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold">Business Bay</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI Precision Meets Dubai Expertise
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              The Fusion of AI and Human Wisdom. Harness cutting-edge Machine Learning models and the expertise of
              Dubai's top real estate professionals—working together to deliver smarter investments and a personalized,
              high-touch experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Data-Driven Decisions",
                description:
                  "Our proprietary machine learning models analyze hundreds of market signals to accurately predict investment performance. This data-driven intelligence gives you the clarity to make confident, high-return property decisions.",
              },
              {
                icon: Brain,
                title: "Personalized Guidance",
                description:
                  "Explore Dubai's real estate market like never before with our intuitive, AI-powered platform. Compare properties, neighborhoods, and ROI potential through dynamic visualizations designed for sophisticated investors.",
              },
              {
                icon: Users,
                title: "Expert Human Guidance",
                description:
                  "Our network of leading agents and developers ensures every step of your investment journey is handled with precision and care. From viewings to negotiations, we provide the human expertise AI alone can't deliver.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Power of AI Section */}
      <section id="power-of-ai" className="py-20 relative">
        <div className="absolute inset-0">
          <img
            src="/dubai-downtown-aerial.png"
            alt="Dubai Downtown"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/95 via-indigo-50/90 to-slate-50/95" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                The Power of AI
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BarChart3,
                title: "Advanced Insights",
                description:
                  "Our proprietary machine learning models analyze hundreds of market signals to accurately predict investment performance. This data-driven intelligence gives you the clarity to make confident, high-return property decisions.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Brain,
                title: "Interactive Tools",
                description:
                  "Explore Dubai's real estate market like never before with our intuitive, AI-powered platform. Compare properties, neighborhoods, and ROI potential through dynamic visualizations designed for sophisticated investors.",
                gradient: "from-cyan-500 to-teal-500",
              },
              {
                icon: Users,
                title: "Expert Human Guidance",
                description:
                  "Our network of leading agents and developers ensures every step of your investment journey is handled with precision and care. From viewings to negotiations, we provide the human expertise AI alone can't deliver.",
                gradient: "from-teal-500 to-blue-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 group-hover:border-slate-300 group-hover:shadow-xl transition-all duration-300">
                  <div
                    className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
                  >
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl border border-slate-200 text-center shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Ready to Experience the Future of Real Estate Investment?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Join the revolution and discover how AI-powered insights combined with human expertise can transform your
              investment strategy in Dubai's dynamic real estate market.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to revolutionize your real estate investments in Dubai? Get in touch with our team of experts and
              discover how RealFusion can help you make smarter, more profitable investment decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">info@realfusion.ae</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-800">Phone</div>
                    <div className="text-slate-600">+971 4 XXX XXXX</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-800">Location</div>
                    <div className="text-slate-600">Dubai, UAE</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
              RealFusion
            </div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Revolutionizing real estate investment in Dubai through the perfect fusion of AI technology and human
              expertise.
            </p>
          </motion.div>

          <div className="text-slate-400 text-sm">© 2024 RealFusion. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
