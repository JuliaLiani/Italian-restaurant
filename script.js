gsap.to(".one", {
  delay: 1,
  duration: 2,
  x: -400,
  ease: "power2.inOut",
  opacity: 0,
})
gsap.from(".two", {
  delay: 1.2,
  duration: 2,
  x: -400,
  ease: "power2.inOut",
  opacity: 0,
})
gsap.from(".header", { duration: 2, delay: 2.5, y: 100, opacity: 0 })
gsap.from(".btn", { opacity: 0, delay: 4, duration: 1, rotation: 720 })
