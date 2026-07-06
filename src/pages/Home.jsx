import React, { useEffect, useRef } from 'react'
import { Navbar, Footer } from '../components/Layout'
import { Link } from 'react-router-dom'

// Import logo
import logo from '/log.png?v=2'

// USE LOCAL PERFUME IMAGES FROM PUBLIC FOLDER
const perfumeMain = '/perfume-main.png'
const armani = '/armani.png'
const perfume2 = '/perfume2.png'
const perfume3 = '/perfume3.png'
const perfume4 = '/perfume4.png'   

const perfumeLeft = '/perfume-left.png'
const perfumeRight = '/perfume-right.png'
const sired = '/sired.png'
const siorange = '/siorange.png'

const Home = () => {
  const sectionRef = useRef(null)
  const stickyRef = useRef(null)
  const perfumeRef = useRef(null)
  const headerRef = useRef(null)
  const sideLeftRef = useRef(null)
  const sideRightRef = useRef(null)
  const deliveryTextRef = useRef(null)
  const deliveryPerfumeRef = useRef(null)
  const perfumeLeftRef = useRef(null)
  const perfumeRightRef = useRef(null)
  const glowRef = useRef(null)
  const doubleTextRef = useRef(null)
  const doubleLeftRef = useRef(null)
  const doubleRightRef = useRef(null)
  const underLeftRef = useRef(null)
  const underRightRef = useRef(null)

  // Refs for perfumes appearing from behind
  const perfumeStackRef = useRef(null)
  const perfumeStack2Ref = useRef(null)
  const perfumeStack3Ref = useRef(null)
  const perfumeStack4Ref = useRef(null)

  // Mobile refs for sequential animation
  const mobileArmaniRef = useRef(null)
  const mobilePerfume2Ref = useRef(null)
  const mobilePerfume3Ref = useRef(null)
  const mobilePerfume4Ref = useRef(null)

  useEffect(() => {
    let mm = null;
    let isMounted = true;

    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap')
        const ScrollTriggerModule = await import('gsap/ScrollTrigger')
        const gsap = gsapModule.default
        const ScrollTrigger = ScrollTriggerModule.default

        gsap.registerPlugin(ScrollTrigger)

        if (!isMounted) return;

        // ============================================
        // FIX: SET EXPLICIT INITIAL STATES
        // This prevents position issues on page refresh
        // ============================================
        const setInitialStates = () => {
          // Mobile perfumes - reset positions
          if (mobileArmaniRef.current) {
            gsap.set(mobileArmaniRef.current, { 
              opacity: 0, 
              x: '-80vw', 
              y: 0, 
              scale: 0.7 
            });
          }
          if (mobilePerfume2Ref.current) {
            gsap.set(mobilePerfume2Ref.current, { 
              opacity: 0, 
              x: '0vw', 
              y: '0vh', 
              scale: 0.7 
            });
          }
          if (mobilePerfume3Ref.current) {
            gsap.set(mobilePerfume3Ref.current, { 
              opacity: 0, 
              x: '0vw', 
              y: '0vh', 
              scale: 0.7 
            });
          }
          if (mobilePerfume4Ref.current) {
            gsap.set(mobilePerfume4Ref.current, { 
              opacity: 0, 
              x: '0vw', 
              y: '0vh', 
              scale: 0.7 
            });
          }
          
          // Desktop stacks
          if (perfumeStackRef.current) {
            gsap.set(perfumeStackRef.current, { 
              opacity: 0, 
              x: '-60vw', 
              y: 0, 
              scale: 0.5 
            });
          }
          if (perfumeStack2Ref.current) {
            gsap.set(perfumeStack2Ref.current, { 
              opacity: 0, 
              x: '60vw', 
              y: 0, 
              scale: 0.5 
            });
          }
          if (perfumeStack3Ref.current) {
            gsap.set(perfumeStack3Ref.current, { 
              opacity: 0, 
              x: '7vw', 
              y: 0, 
              scale: 0.9 
            });
          }
          if (perfumeStack4Ref.current) {
            gsap.set(perfumeStack4Ref.current, { 
              opacity: 0, 
              x: '7vw', 
              y: 0, 
              scale: 0.85 
            });
          }

          // Delivery elements
          if (deliveryTextRef.current) {
            gsap.set(deliveryTextRef.current, { 
              opacity: 0, 
              y: 60, 
              scale: 0.9 
            });
          }
          if (deliveryPerfumeRef.current) {
            gsap.set(deliveryPerfumeRef.current, { 
              opacity: 0, 
              y: 60, 
              scale: 0.8 
            });
          }

          // Slide-in perfumes
          if (perfumeLeftRef.current) {
            gsap.set(perfumeLeftRef.current, { 
              opacity: 0,
              x: '-150vw',
              y: 0,
              scale: 0.8
            });
          }
          if (perfumeRightRef.current) {
            gsap.set(perfumeRightRef.current, { 
              opacity: 0,
              x: '150vw',
              y: 0,
              scale: 0.8
            });
          }

          // Double text section
          if (doubleTextRef.current) {
            gsap.set(doubleTextRef.current, { opacity: 0 });
          }
          if (doubleLeftRef.current) {
            gsap.set(doubleLeftRef.current, { 
              opacity: 0, 
              scale: 0.5,
              y: 0,
              x: 0
            });
          }
          if (doubleRightRef.current) {
            gsap.set(doubleRightRef.current, { 
              opacity: 0, 
              scale: 0.5,
              y: 0,
              x: 0
            });
          }
          if (underLeftRef.current) {
            gsap.set(underLeftRef.current, { 
              opacity: 0, 
              xPercent: -150, 
              scale: 0.8,
              y: 0
            });
          }
          if (underRightRef.current) {
            gsap.set(underRightRef.current, { 
              opacity: 0, 
              xPercent: 150, 
              scale: 0.8,
              y: 0
            });
          }
        }

        // Apply initial states
        setInitialStates();

        // Force a refresh after setting states
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 50);

        // ============================================
        // 1️⃣ MOBILE: 0 - 768px
        // ============================================
        mm = gsap.matchMedia()

        mm.add("(max-width: 768px)", () => {
          // AUTO-SWINGING ANIMATION
          gsap.to(perfumeRef.current, {
            x: '3vw',
            rotation: 5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          gsap.to(sideRightRef.current, {
            x: '-3vw',
            rotation: -5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          gsap.to(sideLeftRef.current, {
            x: '3vw',
            rotation: 5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          // Main scroll timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 2,
              invalidateOnRefresh: true
            },
            defaults: { ease: 'power1.inOut' }
          })

          // MOBILE ANIMATIONS
          tl.to(perfumeRef.current, {
            marginTop: '1.5vh',
            duration: 1.0,
            ease: 'power2.inOut'
          }, 0)

          tl.to(headerRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(sideLeftRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(sideRightRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(perfumeRef.current, {
            scale: 4,
            duration: 1.8,
            ease: 'power2.inOut'
          }, 1.0)

          tl.to(perfumeRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
          }, 2.3)

          // MOBILE SEQUENTIAL ANIMATION
          tl.fromTo(mobileArmaniRef.current, {
            opacity: 0,
            scale: 0.7,
            x: '-80vw',
            y: 0
          }, {
            opacity: 1,
            scale: 1,
            x: '0vw',
            y: 0,
            duration: 1.5,
            ease: 'power3.out'
          }, 3)

          tl.to(mobileArmaniRef.current, {
            opacity: 0,
            y: '-30vh',
            scale: 0.8,
            duration: 1.2,
            ease: 'power2.inOut'
          }, 4.0)

          // ✅ FIXED: Removed x and y from fromTo - only opacity and scale
          tl.fromTo(mobilePerfume2Ref.current, {
            opacity: 0,
            scale: 0.7
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 4.5)

          tl.fromTo(mobilePerfume3Ref.current, {
            opacity: 0,
            scale: 0.7
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 4.5)

          tl.fromTo(mobilePerfume4Ref.current, {
            opacity: 0,
            scale: 0.7
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 4.5)

          tl.to(mobilePerfume2Ref.current, {
            opacity: 0,
            y: '-30vh',
            scale: 0.8,
            duration: 1.2,
            ease: 'power2.inOut'
          }, 6.5)

          tl.to(mobilePerfume3Ref.current, {
            opacity: 0,
            y: '-30vh',
            scale: 0.8,
            duration: 1.2,
            ease: 'power2.inOut'
          }, 6.5)

          tl.to(mobilePerfume4Ref.current, {
            opacity: 0,
            y: '-30vh',
            scale: 0.8,
            duration: 1.2,
            ease: 'power2.inOut'
          }, 6.5)

          tl.fromTo(deliveryTextRef.current, {
            opacity: 0,
            y: 60,
            scale: 0.9
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out'
          }, 7.0)

          tl.fromTo(deliveryPerfumeRef.current, {
            opacity: 0,
            y: 60,
            scale: 0.8
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out'
          }, 7.0)

          tl.to(perfumeLeftRef.current, {
            opacity: 0.85,
            x: '-9vw',
            scale: 0.97,
            duration: 1.2,
            ease: 'power3.out'
          }, 7.5)

          tl.to(perfumeRightRef.current, {
            opacity: 1,
            x: '9vw',
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 7.5)

          tl.to(deliveryTextRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 8.5)

          tl.to(deliveryPerfumeRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 8.5)

          tl.to(perfumeLeftRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 8.5)

          tl.to(perfumeRightRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 8.5)

          // FINAL DOUBLE PERFUME SECTION - MOBILE
          tl.to(doubleTextRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power1.out'
          }, 9.0)

          tl.fromTo(doubleLeftRef.current, {
            opacity: 0,
            scale: 0.5,
            y: 40
          }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out'
          }, 9.0)

          tl.fromTo(underLeftRef.current, {
            opacity: 0,
            xPercent: -150,
            scale: 0.7
          }, {
            opacity: 1,
            xPercent: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 9.5)

          tl.to(doubleLeftRef.current, {
            opacity: 0,
            y: -80,
            duration: 1.2,
            ease: 'power2.inOut'
          }, 10.5)

          tl.to(underLeftRef.current, {
            opacity: 0,
            y: -80,
            duration: 1.2,
            ease: 'power2.inOut'
          }, 10.5)

          tl.fromTo(doubleRightRef.current, {
            opacity: 0,
            scale: 0.5,
            y: 60
          }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out'
          }, 11.5)

          tl.fromTo(underRightRef.current, {
            opacity: 0,
            xPercent: 150,
            scale: 0.7
          }, {
            opacity: 1,
            xPercent: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 12.0)

          return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(st => st.kill())
          }
        })

        // ============================================
        // 2️⃣ TABLET: 769px - 1024px
        // ============================================
        mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
          // AUTO-SWINGING ANIMATION
          gsap.to(perfumeRef.current, {
            x: '3vw',
            rotation: 5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          gsap.to(sideRightRef.current, {
            x: '-3vw',
            rotation: -5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          gsap.to(sideLeftRef.current, {
            x: '3vw',
            rotation: 5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 2,
              invalidateOnRefresh: true
            },
            defaults: { ease: 'power1.inOut' }
          })

          // TABLET ANIMATIONS
          tl.to(perfumeRef.current, {
            marginTop: '1.5vh',
            duration: 1.0,
            ease: 'power2.inOut'
          }, 0)

          tl.to(headerRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(sideLeftRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(sideRightRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(perfumeRef.current, {
            scale: 4,
            duration: 1.8,
            ease: 'power2.inOut'
          }, 1.0)

          tl.to(perfumeRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
          }, 2.3)

          // ✅ FIXED: Removed x and y from fromTo
          tl.fromTo(perfumeStackRef.current, {
            opacity: 0,
            scale: 0.5
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 2.5)

          tl.fromTo(perfumeStack2Ref.current, {
            opacity: 0,
            scale: 0.5
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 2.5)

          tl.fromTo(perfumeStack3Ref.current, {
            opacity: 0,
            scale: 0.9
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 4.0)

          tl.fromTo(perfumeStack4Ref.current, {
            opacity: 0,
            scale: 0.85
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 4.8)

          tl.to(perfumeStackRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.to(perfumeStack2Ref.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.to(perfumeStack3Ref.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.to(perfumeStack4Ref.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.fromTo(deliveryTextRef.current, {
            opacity: 0,
            y: 60,
            scale: 0.9
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out'
          }, 6.0)

          tl.fromTo(deliveryPerfumeRef.current, {
            opacity: 0,
            y: 60,
            scale: 0.8
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out'
          }, 6.0)

          tl.to(perfumeLeftRef.current, {
            opacity: 0.85,
            x: '-6vw',
            scale: 0.97,
            duration: 1.2,
            ease: 'power3.out'
          }, 6.5)

          tl.to(perfumeRightRef.current, {
            opacity: 1,
            x: '6vw',
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 6.5)

          tl.to(glowRef.current, {
            scale: 2,
            opacity: 0.5,
            duration: 1.8,
            ease: 'power2.inOut'
          }, 1.0)

          tl.to(glowRef.current, {
            scale: 1,
            opacity: 0.2,
            duration: 1.0
          }, 2.5)

          tl.to(perfumeLeftRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          tl.to(perfumeRightRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          tl.to(deliveryTextRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          tl.to(deliveryPerfumeRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          // FINAL DOUBLE PERFUME SECTION - TABLET
          tl.to(doubleTextRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power1.out'
          }, 8.0)

          tl.fromTo(doubleLeftRef.current, {
            opacity: 0,
            scale: 0.5,
            y: 0,
            x: 0
          }, {
            opacity: 1,
            scale: 0.9,
            y: 0,
            x: 0,
            duration: 1.5,
            ease: 'power2.out'
          }, 8.5)

          tl.fromTo(doubleRightRef.current, {
            opacity: 0,
            scale: 0.5,
            y: 0,
            x: 0
          }, {
            opacity: 1,
            scale: 0.9,
            y: 0,
            x: 0,
            duration: 1.5,
            ease: 'power2.out'
          }, 8.5)

          tl.fromTo(underLeftRef.current, {
            opacity: 0,
            xPercent: -120,
            scale: 0.8
          }, {
            opacity: 1,
            xPercent: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 9.0)

          tl.fromTo(underRightRef.current, {
            opacity: 0,
            xPercent: 120,
            scale: 0.8
          }, {
            opacity: 1,
            xPercent: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 9.0)

          return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(st => st.kill())
          }
        })

        // ============================================
        // 3️⃣ DESKTOP: 1025px and above
        // ============================================
        mm.add("(min-width: 1025px)", () => {
          // AUTO-SWINGING ANIMATION
          gsap.to(perfumeRef.current, {
            x: '3vw',
            rotation: 5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          gsap.to(sideRightRef.current, {
            x: '-3vw',
            rotation: -5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          gsap.to(sideLeftRef.current, {
            x: '3vw',
            rotation: 5,
            duration: 3.0,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 2,
              invalidateOnRefresh: true
            },
            defaults: { ease: 'power1.inOut' }
          })

          // DESKTOP ANIMATIONS
          tl.to(perfumeRef.current, {
            marginTop: '1.5vh',
            duration: 1.0,
            ease: 'power2.inOut'
          }, 0)

          tl.to(headerRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(sideLeftRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(sideRightRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.3)

          tl.to(perfumeRef.current, {
            scale: 4,
            duration: 1.8,
            ease: 'power2.inOut'
          }, 1.0)

          tl.to(perfumeRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
          }, 2.3)

          // ✅ FIXED: Removed x and y from fromTo
          tl.fromTo(perfumeStackRef.current, {
            opacity: 0,
            scale: 0.5
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 2.5)

          tl.fromTo(perfumeStack2Ref.current, {
            opacity: 0,
            scale: 0.5
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 2.5)

          tl.fromTo(perfumeStack3Ref.current, {
            opacity: 0,
            scale: 0.9
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 4.0)

          tl.fromTo(perfumeStack4Ref.current, {
            opacity: 0,
            scale: 0.85
          }, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
          }, 4.8)

          tl.to(perfumeStackRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.to(perfumeStack2Ref.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.to(perfumeStack3Ref.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.to(perfumeStack4Ref.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 5.5)

          tl.fromTo(deliveryTextRef.current, {
            opacity: 0,
            y: 60,
            scale: 0.9
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out'
          }, 6.0)

          tl.fromTo(deliveryPerfumeRef.current, {
            opacity: 0,
            y: 60,
            scale: 0.8
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out'
          }, 6.0)

          tl.to(perfumeLeftRef.current, {
            opacity: 0.85,
            x: '-9vw',
            scale: 0.97,
            duration: 1.2,
            ease: 'power3.out'
          }, 6.5)

          tl.to(perfumeRightRef.current, {
            opacity: 1,
            x: '9vw',
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 6.5)

          tl.to(glowRef.current, {
            scale: 2,
            opacity: 0.5,
            duration: 1.8,
            ease: 'power2.inOut'
          }, 1.0)

          tl.to(glowRef.current, {
            scale: 1,
            opacity: 0.2,
            duration: 1.0
          }, 2.5)

          tl.to(perfumeLeftRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          tl.to(perfumeRightRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          tl.to(deliveryTextRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          tl.to(deliveryPerfumeRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 7.5)

          tl.to(doubleTextRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power1.out'
          }, 8.0)

          tl.fromTo(doubleLeftRef.current, {
            opacity: 0,
            scale: 0.5,
            y: 0,
            x: 0
          }, {
            opacity: 1,
            scale: 0.9,
            y: 0,
            x: 0,
            duration: 1.5,
            ease: 'power2.out'
          }, 8.5)

          tl.fromTo(doubleRightRef.current, {
            opacity: 0,
            scale: 0.5,
            y: 0,
            x: 0
          }, {
            opacity: 1,
            scale: 0.9,
            y: 0,
            x: 0,
            duration: 1.5,
            ease: 'power2.out'
          }, 8.5)

          tl.fromTo(underLeftRef.current, {
            opacity: 0,
            xPercent: -150,
            scale: 0.8
          }, {
            opacity: 1,
            xPercent: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 9.0)

          tl.fromTo(underRightRef.current, {
            opacity: 0,
            xPercent: 150,
            scale: 0.8
          }, {
            opacity: 1,
            xPercent: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out'
          }, 9.0)

          return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(st => st.kill())
          }
        })

        // Final refresh after everything is set
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);

      } catch (error) {
        console.error('GSAP loading error:', error)
      }
    }

    loadGSAP()

    return () => {
      isMounted = false
      if (mm) {
        mm.revert()
      }
      // Clean up all GSAP animations
      const gsap = window.gsap
      if (gsap) {
        gsap.killTweensOf('*')
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      
      {/* ===== STICKY SECTION ===== */}
      <section className="section" ref={sectionRef}>
        <div className="sticky-wrap" ref={stickyRef}>
          <div className="bg-glow" ref={glowRef}></div>

          {/* HEADER SECTION */}
          <div className="header-section" ref={headerRef}>
            <div className="subtitle">✨ Luxury Perfumes</div>
            <div className="main-title">FRAGRANCE HOUSE</div>
            <div className="tagline">Premium • Long-lasting • Elegant</div>
            <div className="header-buttons">
              <Link to="/menu?mode=dinein" className="btn-header btn-dine-header">Explore</Link>
              <Link to="/menu?mode=delivery" className="btn-header btn-delivery-header">Shop Now</Link>
            </div>
          </div>

          {/* SIDE PERFUMES */}
          <img 
            className="side-burger side-burger-left" 
            ref={sideLeftRef}
            src={sired} 
            alt="Perfume left"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=200' }}
          />
          <img 
            className="side-burger side-burger-right" 
            ref={sideRightRef}
            src={siorange} 
            alt="Perfume right"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=200' }}
          />

          {/* MAIN PERFUME */}
          <img 
            className="burger" 
            ref={perfumeRef}
            src={perfumeMain}
            alt="Luxury Perfume"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=256' }}
          />

          {/* ===== MOBILE SEQUENTIAL PERFUMES ===== */}
          
          {/* 1️⃣ ARMANI - Mobile only */}
          <div ref={mobileArmaniRef} className="mobile-armani">
            <img 
              src={armani} 
              alt="Giorgio Armani"
            />
          </div>

          {/* 2️⃣ PERFUME 2 - Mobile only */}
          <img 
            ref={mobilePerfume2Ref}
            className="mobile-perfume mobile-perfume-2"
            src={perfume2}
            alt="Perfume 2"
          />

          {/* 3️⃣ PERFUME 3 - Mobile only */}
          <img 
            ref={mobilePerfume3Ref}
            className="mobile-perfume mobile-perfume-3"
            src={perfume3}
            alt="Perfume 3"
          />

          {/* 4️⃣ PERFUME 4 - Mobile only */}
          <img 
            ref={mobilePerfume4Ref}
            className="mobile-perfume mobile-perfume-4"
            src={perfume4}
            alt="Perfume 4"
          />

          {/* ===== DESKTOP PERFUME STACKS ===== */}
          
          {/* GIORGIO ARMANI - Desktop only */}
          <div ref={perfumeStackRef} className="desktop-stack desktop-armani">
            <img 
              src={armani} 
              alt="Giorgio Armani"
            />
          </div>

          {/* PERFUME 2 - Desktop only */}
          <img 
            ref={perfumeStack2Ref}
            className="desktop-stack desktop-perfume-2"
            src={perfume2}
            alt="Perfume 2"
          />

          {/* PERFUME 3 - Desktop only */}
          <img 
            ref={perfumeStack3Ref}
            className="desktop-stack desktop-perfume-3"
            src={perfume3}
            alt="Perfume 3"
          />

          {/* PERFUME 4 - Desktop only */}
          <img 
            ref={perfumeStack4Ref}
            className="desktop-stack desktop-perfume-4"
            src={perfume4}
            alt="Perfume 4"
          />

          {/* SLIDE-IN PERFUMES */}
          <img 
            className="burger-left" 
            ref={perfumeLeftRef}
            src={perfumeLeft} 
            alt="Perfume left"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=200' }}
          />
          <img 
            className="burger-right" 
            ref={perfumeRightRef}
            src={perfumeRight} 
            alt="Perfume right"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=200' }}
          />

          {/* DELIVERY TEXT */}
          <div className="delivery-text" ref={deliveryTextRef}>
            <h1>LUXURY COLLECTION</h1>
            <p>Eau de Parfum • Long-lasting 12h</p>
          </div>

          <img 
            className="delivery-burger" 
            ref={deliveryPerfumeRef}
            src={perfumeMain} 
            alt="Luxury Perfume"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=200' }}
          />

          {/* ===== DOUBLE PERFUME SECTION ===== */}
          <div className="double-text-section" ref={doubleTextRef}>
            {/* LEFT PERFUME */}
            <div className="double-text-left" ref={doubleLeftRef}>
              <div className="double-logo">
                <img 
                  src={logo} 
                  alt="Logo"
                />
              </div>
              <div className="double-title">ARMANI CODE</div>
              <div className="double-badge">EAU DE PARFUM</div>
            </div>

            {/* RIGHT PERFUME */}
            <div className="double-text-right" ref={doubleRightRef}>
              <div className="double-logo">
                <img 
                  src={logo} 
                  alt="Logo"
                />
              </div>
              <div className="double-title">Sì</div>
              <div className="double-badge">EAU DE PARFUM</div>
            </div>
          </div>

          {/* UNDER IMAGES */}
          <img 
            className="under-image-left" 
            ref={underLeftRef}
            src={perfumeLeft} 
            alt="Armani Code"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=200' }}
          />
          <img 
            className="under-image-right" 
            ref={underRightRef}
            src={perfumeRight} 
            alt="Sauvage"
            onError={(e) => { e.target.src = 'https://emojicdn.elk.sh/🧴?size=200' }}
          />

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
