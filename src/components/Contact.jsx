
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.name");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid");
    }
    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.message");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xkgjgvdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: t("contact.form.success"),
          description: t("contact.form.successMessage"),
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/hernán-rodríguez-garnica/",
      label: "LinkedIn",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/herniRG",
      label: "GitHub",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:hernanrg85@gmail.com",
      label: "Email",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent to-background opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">{t("contact.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-8 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.form.name")}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-background/50 backdrop-blur-sm border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                  placeholder={t("contact.form.name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.form.email")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-background/50 backdrop-blur-sm border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                  placeholder={t("contact.form.email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full p-3 rounded-md bg-background/50 backdrop-blur-sm border ${
                    errors.message ? "border-red-500" : "border-white/10"
                  } focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                  placeholder={t("contact.form.message")}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 animate-gradient-x"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glassmorphism rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 gradient-text">{t("contact.connect.title")}</h3>
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${link.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <span className="text-lg font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="glassmorphism rounded-xl p-8 border border-white/10"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">{t("contact.connect.location.title")}</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {t("contact.connect.location.content")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
