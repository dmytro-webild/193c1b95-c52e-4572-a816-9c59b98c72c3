"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Award, CheckCircle, Zap, Crown, Heart, Briefcase, Cake, Music, Flower, Users, Star, Quote, Shield, HelpCircle, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="aurora"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="All That Sparkle"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="ALL THAT SPARKLE"
          description="Elevate your special moments with meticulous planning, sophisticated design, and unforgettable experiences."
          buttons={[
            { text: "Plan Your Event", href: "#services" },
            { text: "View Portfolio", href: "#testimonials" },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-vector/golden-elegant-wedding-landing-page-template_23-2148220166.jpg",              imageAlt: "Elegant gala event with luxury decoration"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/cheese-lovely-indoor-bread-appetizer_1304-2508.jpg",              imageAlt: "Beautiful wedding reception setup"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/dining-table-with-floral-centerpiece-wedding-reception_637285-5611.jpg?id=26265506",              imageAlt: "Sophisticated corporate event"},
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          ariaLabel="All That Sparkle By Nikki hero section"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About All That Sparkle By Nikki, LLC"
          description="With over a decade of experience creating unforgettable celebrations, Nikki and her team specialize in transforming visions into reality. From intimate gatherings to grand galas, we deliver exceptional attention to detail and creative excellence."
          tag="Our Story"
          tagIcon={Sparkles}
          buttons={[{ text: "Learn More", href: "#services" }]}
          bulletPoints={[
            {
              title: "Expert Planning",              description: "Strategic coordination ensuring every detail is perfectly executed",              icon: CheckCircle,
            },
            {
              title: "Creative Vision",              description: "Innovative design concepts tailored to your unique celebration",              icon: Zap,
            },
            {
              title: "Seamless Execution",              description: "Flawless implementation from concept to celebration",              icon: Award,
            },
            {
              title: "Luxury Focus",              description: "Premium attention to creating sophisticated, memorable experiences",              icon: Crown,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/mid-section-businessman-holding-digital-tablet-with-businesswoman-standing-backdrop_23-2147941514.jpg"
          imageAlt="Professional event planner organizing event details"
          mediaAnimation="slide-up"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureHoverPattern
          title="Our Services"
          description="Comprehensive event planning solutions designed to bring your vision to life with elegance and sophistication."
          tag="What We Offer"
          tagIcon={Star}
          features={[
            {
              icon: Heart,
              title: "Wedding Planning",              description: "From engagement celebrations to honeymoon sendoffs, we create your perfect wedding day with refined elegance and personal touches."},
            {
              icon: Briefcase,
              title: "Corporate Events",              description: "Sophisticated conferences, galas, and business celebrations that elevate your company's brand and create lasting impressions."},
            {
              icon: Cake,
              title: "Milestone Celebrations",              description: "Birthdays, anniversaries, and special occasions transformed into unforgettable celebrations of achievement and joy."},
            {
              icon: Music,
              title: "Entertainment Coordination",              description: "Curated entertainment selections and seamless coordination for premium event experiences."},
            {
              icon: Flower,
              title: "Décor & Design",              description: "Luxury floral arrangements, sophisticated decorations, and ambiance creation tailored to your aesthetic vision."},
            {
              icon: Users,
              title: "Vendor Management",              description: "Expert coordination with premium caterers, photographers, musicians, and venues to ensure perfection."},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Elegant Celebrations Created"
          description="Hear directly from our delighted clients about their unforgettable experiences"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "Bride",              company: "Wedding Client",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/groom-bride-their-wedding-day-forest_1303-29404.jpg",              imageAlt: "Portrait of bride Sarah Mitchell"},
            {
              id: "2",              name: "Jennifer Chen",              role: "Event Director",              company: "Fortune 500 Company",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-with-folded-arms-gray-marble-wall_158595-6769.jpg",              imageAlt: "Portrait of event director Jennifer Chen"},
            {
              id: "3",              name: "Michael & Amanda Rodriguez",              role: "Couple",              company: "Anniversary Celebration",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/glad-man-embracing-his-wife-friend-s-birthday-party_197531-5831.jpg",              imageAlt: "Portrait of couple Michael and Amanda"},
            {
              id: "4",              name: "Victoria Sterling",              role: "Corporate Executive",              company: "International Firm",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/joyful-woman-black-jacket-liking-lip-posing-isolated-background-charming-lady-dark-suit-smiling-white-backdrop_197531-18516.jpg",              imageAlt: "Portrait of executive Victoria Sterling"},
            {
              id: "5",              name: "The Wilson Family",              role: "Celebration Hosts",              company: "Family Milestone",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-friends-sitting-together_23-2149061610.jpg",              imageAlt: "Portrait of the Wilson family"},
            {
              id: "6",              name: "Emma & James Thompson",              role: "Newlyweds",              company: "Wedding Client",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/man-women-looking-venue-prepared-by-wedding-planner_23-2150167191.jpg",              imageAlt: "Portrait of couple Emma and James"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Premium Brands"
          description="Collaborating with the finest vendors and venues to create exceptional celebrations"
          tag="Our Partners"
          tagIcon={Shield}
          names={[
            "Luxury Venue Group",            "Premier Catering Co.",            "Elegant Florals Design",            "Crystal Photography",            "Platinum Entertainment",            "Signature Event Rentals",            "Gourmet Cuisine Collective",            "Diamond Lighting Design"]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Got Questions? We've Got Answers!"
          description="Here's what our clients typically want to know. Let's chat about your celebration."
          tag="Questions?"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",              title: "How far in advance should I book your services?",              content: "Great question! We recommend reaching out 6-12 months before your big day for weddings and large events. That said, we love working with clients on tighter timelines too—just contact us to see what we can create together for your celebration."},
            {
              id: "2",              title: "What's included in your planning packages?",              content: "We believe in customizing everything to fit your needs. Our services typically include venue selection, vendor coordination, stunning décor design, detailed timeline management, guest accommodations, and full day-of coordination. Think of us as your celebration partners—we're here to make your vision come to life exactly as you imagine it."},
            {
              id: "3",              title: "Do you work with venues outside the local area?",              content: "Absolutely! We've planned unforgettable celebrations across multiple states and even internationally. Our extensive vendor network and experience means we can coordinate your dream event wherever it takes place. Distance is never an obstacle—passion and creativity are what matter."},
            {
              id: "4",              title: "How do you approach event design?",              content: "We believe your celebration should tell your story. Our team takes time to understand your personality, style, and values. We then collaborate closely with you to create bespoke designs that reflect who you are. The result? An event that feels authentically, beautifully yours."},
            {
              id: "5",              title: "What happens if something unexpected occurs during the event?",              content: "We've got you covered. Our experienced team prepares detailed contingency plans for every event because we know life happens. With our calm, professional approach and quick thinking, we handle any surprises gracefully so your celebration continues seamlessly."},
            {
              id: "6",              title: "What payment options and contracts do you offer?",              content: "We want planning to feel easy and accessible. We offer flexible payment plans tailored to your event timeline and clear, transparent contracts that outline everything. You'll know exactly what to expect, and we accept multiple payment methods for your convenience."},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Create Something Beautiful Together"
          description="We can't wait to hear about your vision. Drop us a line, and let's start planning the celebration of your dreams."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "eventType", type: "text", placeholder: "Type of Event", required: true },
            { name: "eventDate", type: "text", placeholder: "Planned Event Date", required: false },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your vision—the vibe, the dreams, the details. We're all ears!",            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/desktop-with-tea-cup_23-2148110251.jpg"
          imageAlt="Elegant event planning consultation aesthetic"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Start Planning"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Wedding Planning", href: "#services" },
                { label: "Corporate Events", href: "#services" },
                { label: "Celebrations", href: "#services" },
                { label: "Vendor Management", href: "#services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 All That Sparkle By Nikki, LLC | Elegant Event Planning"
        />
      </div>
    </ThemeProvider>
  );
}
