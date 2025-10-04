import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918860060569?text=Hi! I'd like to know more about Little Kingdom Playhouse", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green shadow-hover hover:shadow-glow hover:scale-110 transition-all animate-bounce-gentle"
      size="icon"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-green-foreground" />
    </Button>
  );
};

export default WhatsAppButton;
