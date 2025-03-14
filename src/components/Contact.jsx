import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // ✅ État pour afficher le message de succès

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_gosu8z9", // Remplace par ton service ID
      "template_67vod3w", // Remplace par ton template ID
      {
        from_name: formData.name,
        to_name: "Yoann",
        from_email: formData.email,
        message: formData.message,
      },
      "MviW8HQbe0bkxguC4" // Remplace par ta clé publique
    )
    .then(() => {
      setSuccessMessage("Message envoyé avec succès !");
      setTimeout(() => setSuccessMessage(""), 5000); // ✅ Cache le message après 5s
      setFormData({ name: "", email: "", message: "" }); // ✅ Réinitialise le formulaire
    })
    .catch((err) => console.error("Erreur :", err));
  };

  const { t } = useLanguage();
  
  return (
    
    <div className="contact" id="contact">
      <h2>{t.titre_contact}</h2> 

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder={t.nom_contact} 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder={t.email_contact} 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder={t.message_contact}  
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button className="submit-btn" type="submit">{t.bouton_contact}</button>
      </form>

      {successMessage && <p className="success">{successMessage}</p>} 
    </div>
  );
}

export default ContactForm;
