import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="bg-black text-cyan-500 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <h1 className="text-5xl font-bold mb-4">Kotani Labs</h1>
        <p className="text-xl text-center max-w-2xl">
          Pioneering the future of Web 3 and Blockchain technologies.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-10 bg-gray-900">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Node Validation</h3>
            <p>Expert consultancy and development services in node validation.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">L2 EVM Tech</h3>
            <p>Advanced solutions in Layer 2 Ethereum Virtual Machine technologies.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Zero Knowledge Tech</h3>
            <p>Innovative approaches to Zero Knowledge technologies.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Data Availability</h3>
            <p>Ensuring data availability and integrity in decentralized systems.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Decentralized AI</h3>
            <p>Cutting-edge research and development in decentralized artificial intelligence.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Roll-Ups</h3>
            <p>Comprehensive solutions for Roll-Ups and Roll-Ups-as-Service.</p>
          </div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section className="py-20 px-10 bg-black">
        <h2 className="text-4xl font-bold mb-8 text-center">Horizon Hackerhouse Program</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          Join our 3-month internship program in partnership with Aya Labs Collective and Web 3 clubs. Transition from beginner to intermediate web 3 developer and advance your knowledge in key areas.
        </p>
        <div className="flex justify-center">
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-10 bg-gray-900">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" className="w-full" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" className="w-full" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" className="w-full" />
          </div>
          <div className="text-center">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Index;