import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-6 bg-[#B5ABA7]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-base text-center text-muted-foreground mb-16 font-medium">
          {t('contact.description')}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="rounded-2xl border-2 py-6 text-base font-medium"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="rounded-2xl border-2 py-6 text-base font-medium"
                />
              </div>
              <div>
                <Textarea 
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={6}
                  className="rounded-2xl border-2 text-base font-medium resize-none"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="w-full text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
              >
                {t('contact.send')}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-2xl p-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Email Us</h3>
                <p className="text-base text-muted-foreground font-medium">dias@baggs.kz</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-2xl p-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Call Us</h3>
                <p className="text-base text-muted-foreground font-medium">+7 702 777 02 02</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary rounded-2xl p-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Visit Us</h3>
                <p className="text-base text-muted-foreground font-medium">
                  Сейфуллина 288<br />
                  г. Алматы 050050<br />
                  403 офис 4 этаж
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
