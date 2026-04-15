import { useState, useEffect } from 'react'
import { Menu, X, MapPin, Mail, Phone, ChevronDown, Leaf, Flower2, Heart, ArrowRight, Camera, ImagePlus } from 'lucide-react'
import BeholdWidget from '@behold/react'
import './App.css'

/* ─── SVG Botanical Decorations ─── */
function BotanicalStem({ className = '' }: { className?: string }) {
  return (
    <svg className={`botanical ${className}`} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 300 C60 240, 40 200, 60 150 C80 100, 50 60, 60 0" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <ellipse cx="40" cy="140" rx="18" ry="28" transform="rotate(-30 40 140)" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.2" />
      <ellipse cx="78" cy="100" rx="15" ry="24" transform="rotate(25 78 100)" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.2" />
      <ellipse cx="45" cy="80" rx="12" ry="20" transform="rotate(-20 45 80)" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.15" />
    </svg>
  )
}

function BotanicalBranch({ className = '' }: { className?: string }) {
  return (
    <svg className={`botanical ${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 180 C40 160, 80 120, 120 80 C140 60, 170 30, 200 10" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <ellipse cx="70" cy="130" rx="14" ry="22" transform="rotate(-40 70 130)" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.15" />
      <ellipse cx="110" cy="85" rx="12" ry="18" transform="rotate(-50 110 85)" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.15" />
      <ellipse cx="150" cy="50" rx="10" ry="16" transform="rotate(-55 150 50)" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.12" />
      <circle cx="60" cy="140" r="3" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.15" />
      <circle cx="100" cy="95" r="2.5" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.12" />
    </svg>
  )
}

/* ─── Photo Placeholder ─── */
function PhotoPlaceholder({ label, aspect = '4/3', size = 'md' }: { label: string; aspect?: string; size?: string }) {
  return (
    <div className={`placeholder placeholder--${size}`} style={{ aspectRatio: aspect }}>
      <div className="placeholder__inner">
        <Camera size={size === 'sm' ? 20 : 28} className="placeholder__icon" />
        <span className="placeholder__label">{label}</span>
      </div>
    </div>
  )
}

/* ─── Navigation ─── */
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Flowers', 'Gallery', 'Contact']

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          <img src="logo-circle.png" alt="Gray Duck Flower Co." className="nav__logo-img" />
          <span className="nav__logo-text">Gray Duck Flower Co.</span>
        </a>
        <div className={`nav__links ${isOpen ? 'nav__links--open' : ''}`}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav__link"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
        <button className="nav__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__photo" style={{ backgroundImage: 'url(hero-bg.jpg)' }} />
        <div className="hero__photo-overlay" />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Gray Duck<br/>Flower Co.</h1>
        <div className="hero__divider" />
        <p className="hero__tagline">Locally grown, hand-tended blooms<br/>cultivated with care in Corcoran, Minnesota</p>
        <a href="#flowers" className="hero__cta">Explore Our Blooms</a>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__image-col">
          <div className="about__image-frame">
            <div className="about__image" style={{ backgroundImage: 'url(about-photo.jpg)' }} />
          </div>
        </div>
        <div className="about__text-col">
          <p className="section-label">Our Story</p>
          <h2 className="section-heading">Rooted in<br/>Rolling Farmland</h2>
          <div className="about__divider" />
          <p className="about__body">
            Nestled in the rolling farmland of Corcoran, Minnesota, Gray Duck Flower Co. is a small-batch flower farm
            dedicated to growing the most beautiful, seasonal blooms. We believe flowers should be grown sustainably,
            harvested at their peak, and arranged with intention.
          </p>
          <p className="about__body">
            From spring's first tulips through autumn's final dahlias, every stem we grow reflects our commitment
            to quality over quantity, beauty rooted in the rhythms of the land.
          </p>
          <div className="about__values">
            <div className="about__value">
              <Leaf size={20} className="about__value-icon" />
              <span>Sustainably Grown</span>
            </div>
            <div className="about__value">
              <Flower2 size={20} className="about__value-icon" />
              <span>Seasonal Varieties</span>
            </div>
            <div className="about__value">
              <Heart size={20} className="about__value-icon" />
              <span>Hand-Tended</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Seasonal Ribbon ─── */
function SeasonalRibbon() {
  return (
    <div className="ribbon">
      <div className="ribbon__track">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="ribbon__text">
            Peonies &nbsp;&bull;&nbsp; Dahlias &nbsp;&bull;&nbsp; Ranunculus &nbsp;&bull;&nbsp;
            Sweet Peas &nbsp;&bull;&nbsp; Zinnias &nbsp;&bull;&nbsp; Sunflowers &nbsp;&bull;&nbsp;
            Lisianthus &nbsp;&bull;&nbsp; Cosmos &nbsp;&bull;&nbsp; Snapdragons &nbsp;&bull;&nbsp;
            Tulips &nbsp;&bull;&nbsp; Anemones &nbsp;&bull;&nbsp;
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Flowers / Offerings ─── */
function Flowers() {
  const offerings = [
    {
      title: 'Seasonal Bouquets',
      desc: 'Hand-arranged bouquets featuring the freshest blooms of the week, wrapped in craft paper and tied with ribbon.',
      placeholder: 'Bouquet photo',
    },
    {
      title: 'Flower Subscriptions',
      desc: 'A curated delivery of seasonal flowers brought to your door weekly or bi-weekly throughout the growing season.',
      placeholder: 'Subscription photo',
    },
    {
      title: 'Wedding & Events',
      desc: 'Bespoke floral design for your most important celebrations, crafted with locally grown seasonal blooms.',
      placeholder: 'Wedding photo',
    },
    {
      title: 'Workshops',
      desc: 'Join us on the farm for hands-on floral design classes. Learn to arrange seasonal flowers in a beautiful setting.',
      placeholder: 'Workshop photo',
    },
  ]

  return (
    <section id="flowers" className="flowers">
      <div className="flowers__header">
        <p className="section-label">What We Offer</p>
        <h2 className="section-heading">Our Flowers</h2>
        <p className="flowers__sub">Each arrangement is thoughtfully composed from what's blooming on the farm — never imported, always in season.</p>
      </div>
      <div className="flowers__grid">
        {offerings.map((item, i) => (
          <div key={i} className="flower-card">
            <PhotoPlaceholder label={item.placeholder} aspect="16/10" />
            <div className="flower-card__body">
              <h3 className="flower-card__title">{item.title}</h3>
              <p className="flower-card__desc">{item.desc}</p>
              <a href="#contact" className="flower-card__link">
                Inquire <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Gallery ─── */
function Gallery() {
  const items = [
    { src: 'flower-1.jpg', alt: 'Mixed dahlia and hydrangea arrangement' },
    { src: null, alt: 'Peony close-up' },
    { src: null, alt: 'Dahlia close-up' },
    { src: null, alt: 'Bouquet detail' },
    { src: null, alt: 'Farm scene' },
    { src: 'flower-2.jpg', alt: 'Seasonal flower spread' },
    { src: null, alt: 'Harvest day' },
    { src: null, alt: 'Wildflower mix' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__header">
        <p className="section-label">From the Farm</p>
        <h2 className="section-heading">Gallery</h2>
      </div>
      <div className="gallery__grid">
        {items.map((item, i) => (
          <div key={i} className={`gallery__item gallery__item--${i + 1}`}>
            {item.src ? (
              <img src={item.src} alt={item.alt} loading="lazy" />
            ) : (
              <div className="gallery__placeholder">
                <ImagePlus size={24} className="gallery__placeholder-icon" />
                <span>{item.alt}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Instagram Feed ─── */
function InstagramFeed() {
  return (
    <section className="instagram">
      <div className="instagram__header">
        <p className="section-label">Follow Along</p>
        <h2 className="section-heading">@grayduckflowerco</h2>
        <p className="instagram__sub">See what's blooming on the farm and behind the scenes.</p>
      </div>
      <div className="instagram__widget">
        <BeholdWidget feedId="92N2v6krqNz7vYYcmp5e" />
      </div>
    </section>
  )
}

/* ─── Testimonial ─── */
function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial__inner">
        <BotanicalBranch className="testimonial__botanical testimonial__botanical--left" />
        <BotanicalBranch className="testimonial__botanical testimonial__botanical--right" />
        <div className="testimonial__mark">&ldquo;</div>
        <blockquote className="testimonial__quote">
          The most stunning flowers I've ever received. You can tell every stem was grown with love.
          Gray Duck Flower Co. made our wedding day absolutely magical.
        </blockquote>
        <p className="testimonial__author">&mdash; A Happy Couple</p>
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__info-col">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-heading">Let's Create<br/>Something Beautiful</h2>
          <div className="contact__divider" />
          <p className="contact__body">
            Whether you're planning a wedding, looking for a seasonal subscription,
            or just want fresh flowers on your table — we'd love to hear from you.
          </p>
          <div className="contact__details">
            <div className="contact__detail">
              <MapPin size={18} className="contact__detail-icon" />
              <span>Corcoran, Minnesota</span>
            </div>
            <div className="contact__detail">
              <Mail size={18} className="contact__detail-icon" />
              <span>hello@grayduckflowerco.com</span>
            </div>
            <div className="contact__detail">
              <Phone size={18} className="contact__detail-icon" />
              <span>(612) 555-0187</span>
            </div>
            <div className="contact__detail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__detail-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <span>@grayduckflowerco</span>
            </div>
          </div>
        </div>
        <div className="contact__form-col">
          {submitted ? (
            <div className="contact__success">
              <Flower2 size={32} className="contact__success-icon" />
              <h3>Thank You!</h3>
              <p>We'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__group">
                <label htmlFor="name" className="form__label">Name</label>
                <input type="text" id="name" className="form__input" required />
              </div>
              <div className="form__group">
                <label htmlFor="email" className="form__label">Email</label>
                <input type="email" id="email" className="form__input" required />
              </div>
              <div className="form__group">
                <label htmlFor="interest" className="form__label">I'm interested in</label>
                <select id="interest" className="form__input form__select">
                  <option value="">Select an option</option>
                  <option value="bouquets">Seasonal Bouquets</option>
                  <option value="subscription">Flower Subscription</option>
                  <option value="wedding">Wedding & Events</option>
                  <option value="workshop">Workshops</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form__group">
                <label htmlFor="message" className="form__label">Message</label>
                <textarea id="message" className="form__input form__textarea" rows={4} required />
              </div>
              <button type="submit" className="form__button">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__col">
            <h4 className="footer__heading">Navigate</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#flowers">Flowers</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Follow Along</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener">Pinterest</a>
          </div>
        </div>
        <div className="footer__center">
          <img src="logo-circle.png" alt="Gray Duck Flower Co." className="footer__logo" />
        </div>
        <div className="footer__right">
          <h3 className="footer__brand-name">Gray Duck<br/>Flower Co.</h3>
          <p className="footer__tagline">Locally grown blooms from<br/>Corcoran, Minnesota</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Gray Duck Flower Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ─── App ─── */
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <SeasonalRibbon />
      <Flowers />
      <Gallery />
      <InstagramFeed />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
