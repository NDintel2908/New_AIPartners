import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/contexts/i18n-context";

export default function ContactSection() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: t("ContactSection.form.validation.required"),
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the form data to your backend
    toast({
      title: t("ContactSection.form.success.title"),
      description: t("ContactSection.form.success.message"),
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("ContactSection.title")}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t("ContactSection.subtitle")}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-google-blue text-xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t("ContactSection.contactInfo.address.label")}</h3>
                  <p className="text-gray-300">{t("ContactSection.contactInfo.address.value")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-google-blue text-xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t("ContactSection.contactInfo.phone.label")}</h3>
                  <p className="text-gray-300">{t("ContactSection.contactInfo.phone.value")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-google-blue text-xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{t("ContactSection.contactInfo.email.label")}</h3>
                  <p className="text-gray-300">{t("ContactSection.contactInfo.email.value")}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">{t("ContactSection.form.title")}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("ContactSection.form.fields.name")}
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("ContactSection.form.fields.email")}
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("ContactSection.form.fields.company")}
                    </Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("ContactSection.form.fields.message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-google-blue hover:bg-google-blue-dark text-white font-semibold"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {t("ContactSection.form.sendButton")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
