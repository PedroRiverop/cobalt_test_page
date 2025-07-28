"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import "./IntroSection.css"

const IntroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="intro-section"  id="intro-section">
      <div className="grid-pattern" />

      <div className="intro-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="line-divider" />

          <h1 className="intro-title">
              Excellence in Every <br />
            <span className="italic">Structure</span>
          </h1>

          <p className="intro-subtitle">
            Where architectural vision meets constructive precision
          </p>

          <div className="intro-button">
            <button className="btn-global">Request a Quote</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroSection
