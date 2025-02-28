import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdPerson, MdEmail, MdMessage, MdSend } from 'react-icons/md'

export const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Poner aqui lógica de envio email
    console.log("Datos del formulario:", formData);
    setFormData({ name: "", email: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-gray-600/30 bg-opacity-50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white rounded-lg p-6 w-[400px] shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className="text-2xl font-bold text-[#4079ff] mb-4">
          Enviar E-mail
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex items-center border border-[#40ffaa] rounded-md p-2">
            <MdPerson className="text-[#4079ff] mr-2" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className="w-full outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-[#40ffaa] rounded-md p-2">
            <MdEmail className="text-[#4079ff] mr-2" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu e-mail"
              className="w-full outline-none"
              required
            />
          </div>

          <div className="flex items-start border border-[#40ffaa] rounded-md p-2">
            <MdMessage className="text-[#4079ff] mr-2 mt-1" size={20} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem"
              className="w-full h-24 outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white py-2 rounded-md flex items-center justify-center gap-2 hover:brightness-110 transition"
          >
            <MdSend size={20} />
            Enviar
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#4079ff] hover:text-[#40ffaa]"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
};