
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechStart",
    content: "Validly saved me months of research. The insights were spot-on and helped me pivot to a winning strategy.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager, InnovateCorp", 
    content: "The competitor analysis was incredibly detailed. I discovered gaps in the market I never would have found on my own.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Emily Johnson",
    role: "Entrepreneur",
    content: "From idea to MVP roadmap in under a minute. This tool is a game-changer for early-stage entrepreneurs.",
    rating: 5,
    avatar: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="px-4 py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by entrepreneurs worldwide
          </h2>
          <p className="text-xl text-slate-600">
            Join thousands of founders who've validated their ideas with Validly
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
