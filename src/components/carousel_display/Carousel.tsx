"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const images = ["Software Engineer", "Photographer", "Basketball Lover", "Foodie"]

export default function Carousel(){
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        rtl: true,
        renderMode: "precision",
        slides: {
          origin: "center",
          perView: 1,
          spacing: 10,
        },
        vertical: true,
      },
      [
        (slider) => {
          let timeout: ReturnType<typeof setTimeout>
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.prev()
            }, 4000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
    return (
        <div ref={ref} className="keen-slider" style={{ height: 60 }}>
            <div className="keen-slider__slide number-slide1">Software Engineer</div>
            <div className="keen-slider__slide number-slide2">Gamer</div>
            <div className="keen-slider__slide number-slide3">Basketball Enthusiast</div>
            <div className="keen-slider__slide number-slide4">Foodie</div>
            <div className="keen-slider__slide number-slide5">Something</div>
            <div className="keen-slider__slide number-slide6">Something</div>
        </div>
    )
}
