import { motion, AnimatePresence } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";

const WhatsAppButton = ({ hide }) => {
    const phoneNumber = "8923834362";
    const whatsappUrl = `https://wa.me/91${phoneNumber}`;

    return (
        <AnimatePresence>
            {!hide && (
                <div className="fixed bottom-[7.5rem] right-6 z-[999]">
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative group block"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

                        {/* Button */}
                        <div className="relative w-16 h-16 rounded-full bg-n-8/80 backdrop-blur-md border border-n-6 flex items-center justify-center shadow-2xl overflow-hidden group-hover:border-green-500/50 transition-colors">
                            <RiWhatsappLine className="text-3xl text-green-500 group-hover:text-green-400 transition-colors" />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-n-8/90 backdrop-blur-sm border border-n-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            <p className="text-xs font-semibold text-n-1 uppercase tracking-wider">
                                Chat with us
                            </p>
                        </div>
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;

