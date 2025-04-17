import React from "react";
import "./index.css";

const slides = [
  {
    title: "The Gaming Industry’s Waste Crisis",
    content:
      "Gamers generated over 1.5 million tons of e-waste in 2023.\nThat’s a game over for sustainability.\n\nWhat if gaming gear could go full circle?"
  },
  {
    title: "Introducing Razer Reborn",
    content:
      "• Circular economy program for gaming peripherals\n• Modular designs and repairable hardware\n• Gamified recycling and blockchain transparency"
  },
  {
    title: "Why Now? – The Business Case",
    content:
      "• 63% of gamers prefer sustainable products\n• Refurbished gear market: 18% CAGR\n• 15% cost savings using recycled materials"
  },
  {
    title: "How Razer Reborn Works",
    content:
      "1. 2024–25: Modular design & recycling hubs\n2. 2025–26: Trade-Up program & refurb store\n3. 2026–27: Full closed-loop circularity"
  },
  {
    title: "Innovations That Power the Loop",
    content:
      "• Bio-materials: Mycelium & ocean plastics\n• Blockchain: Full product traceability\n• Razer Silver rewards for recycling"
  },
  {
    title: "Join the Green Gaming Revolution",
    content:
      "The future of gaming isn’t just faster or brighter—\nIt’s sustainable.\n\n#RazerReborn"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-6 font-mono">
      <h1 className="text-4xl font-bold text-center mb-10">Razer Reborn Slide Deck</h1>
      <div className="space-y-8 max-w-3xl mx-auto">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-xl shadow-xl border border-green-500"
          >
            <h2 className="text-2xl font-bold mb-3">{slide.title}</h2>
            <pre className="whitespace-pre-wrap text-lg">{slide.content}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
