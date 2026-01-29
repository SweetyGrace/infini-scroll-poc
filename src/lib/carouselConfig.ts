import { CarouselConfig, CarouselSlideData } from "@/types/carousel.types";

export const defaultCarouselConfig: CarouselConfig = {
  slideDuration: 5000, // 5 seconds per slide
  transitionDuration: 800, // 800ms transition
  autoPlay: true,
  snapThreshold: 0.5, // 50% scroll threshold for snap
};

export const sampleSlides: CarouselSlideData[] = [
  {
    id: "1",
    title: "The Arrival | 17:45 ",
    description:
      'The Transition: A private chauffeur service in a [Model, e.g., BMW 7 Series] arrives at the guest’s residence. Inside, a curated "LAMH Prelude" playlist and a chilled silk-scented towel set the tone for the evening. ',
    backgroundColor: "#000000",
    // videoUrl: '/videos/cup.mp4',
    imageUrl: "/images/one.png",
  },
  {
    id: "2",
    title: "The Golden Hour Reveal | 18:00 ",
    description:
      "The Exclusivity: As the public exits, the house becomes a private stage. Guests are welcomed with Vintage Champagne on the terrace, overlooking the klong as the sun sets a moment specifically designed for Tatler-level photography. ",
    backgroundColor: "#000000",
    imageUrl: "/images/two.png",
  },
  {
    id: "3",
    title: "The Narrated Journey | 18:30 ",
    description: `The Storytelling: A private walk-through led by a Senior Curator. We bypass the standard script, focusing instead on the Art of the Disappearance and the architectural secrets of the six teak houses.`,
    backgroundColor: "#000000",
    imageUrl: "/images/three.png",
  },
  {
    id: "4",
    title: "A Gastronomic Homage",
    description: `   • The Dinner: A bespoke menu at the Jim Thompson Private Dining Room.\n• The Pairing: A four-course Thai-Fusion menu designed by the executive chef, paired with Old World wines selected to complement the spice profiles.\n• The Table: Dressed in limited-edition Jim Thompson silk runners, illuminated by candlelight.`,
    backgroundColor: "#000000",
    imageUrl: "/images/four.png",
    // isExpansion: true,
    expansionReverse: true,
    hasBulletPoints: true,
  },
  {
    id: "5",
    title: "The Parting Keepsake | 21:30",
    description:
      "The Gift: Rather than a brochure, guests receive a hand-picked Jim Thompson Heritage Gift.",
    backgroundColor: "#000000",
    imageUrl: "/images/five.png",
    // videoUrl: '/videos/watch-video.mp4',
  },
];
