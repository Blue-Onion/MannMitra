import RotatingText from "@/components/RotatingText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SpotlightCard from "@/components/Spotlightcard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { faqs } from "@/data/landing"; // Assuming your FAQs JSON is imported here

export default function Home() {
  return (
    <div className="dark p-5"> {/* Apply dark mode to the main div */}
      <section className="mb-20">
        <div className="text-5xl sm:text-2xl md:text-3xl font-bold flex gap-2  items-center text-white text-center justify-center">
          <span className="text-[#10e0a5df] text-8xl mr-3">MannMitra is</span>
          <RotatingText
            texts={[
              "Here for You",
              "Listening",
              "Uplifting",
              "Understanding",
              "Always Kind",
            ]}
            mainClassName="px-3 py-1 rounded-lg backdrop-blur-md bg-[#66a1ff] text-6xl text-black"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            rotationInterval={4000}
          />
        </div>
        <p className="text-center text-xl sm:text-sm md:text-2xl font-bold text-muted-foreground mt-4">
          Your digital companion for mental clarity
        </p>
        <div className=" flex justify-center items-center mt-5 gap-4">
          <Link href={"/chat-bot"}>
            <Button>Talk To MannMitra</Button>
          </Link>
          <Link href={"/book-appointment"}>
            <Button>Register As a Therapist</Button>
          </Link>
        </div>
      </section>

      <section className="mt-20 p-5">
        <h1 className="text-4xl text-center text-[#10e0a5df] mb-5 font-bold">Key Feature</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center justify-center p-6">
              
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Talk to AI Companion</h3>
              <p className="text-sm text-gray-400 text-center">Engage in supportive conversations with our AI therapist.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center justify-center p-6">
              
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Book a Therapist</h3>
              <p className="text-sm text-gray-400 text-center">Easily schedule appointments with licensed therapists.</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center justify-center p-6">
              
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Personalized Support</h3>
              <p className="text-sm text-gray-400 text-center">Receive tailored advice and resources for your well-being.</p>
            </div>
          </SpotlightCard>
        </div>
      </section>

    
      <section className="mt-20 p-5 bg-gray-800 text-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full"> {/* Added w-full for width */}
          {faqs && faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 last:border-b-0"> {/* Added border for item separation */}
              <AccordionTrigger className="text-lg font-medium p-3 hover:bg-gray-700 rounded-sm transition-colors duration-200"> {/* Improved hover effect */}
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-3 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}