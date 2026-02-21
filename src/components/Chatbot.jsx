import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiSendPlane2Fill } from "react-icons/ri";
import chatbotImage from "../assets/chatbotimage.webp";

const Chatbot = ({ isOpen, toggleChat }) => {
    const [message, setMessage] = useState("");

    return (
        <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-n-8/80 backdrop-blur-xl border border-n-6 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-n-7 border-b border-n-6 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-conic-gradient p-[1px]">
                                    <div className="w-full h-full rounded-full bg-n-8 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/assets/favicon.svg"
                                            alt="KrishNova AI"
                                            className="w-6 h-6 object-contain"
                                            onError={(e) => {
                                                e.target.src = "https://ui-avatars.com/api/?name=KrishNova&background=random";
                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-n-1 text-sm tracking-wide">KrishNova Assistant</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-color-4 animate-pulse"></span>
                                        <span className="text-xs text-n-4">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-2 text-n-4 hover:text-n-1 transition-colors"
                            >
                                <RiCloseLine size={24} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-hide">
                            <div className="flex flex-col items-start max-w-[85%]">
                                <div className="p-3 bg-n-6 rounded-2xl rounded-tl-none text-sm text-n-1 leading-relaxed">
                                    Hi there! 👋 How can we help you today?
                                </div>
                                <span className="text-[10px] text-n-4 mt-1 ml-1">Just now</span>
                            </div>

                            <div className="flex flex-col items-end w-full">
                                <div className="p-3 bg-color-1 text-n-1 rounded-2xl rounded-tr-none text-sm leading-relaxed max-w-[85%] shadow-lg">
                                    I&apos;m interested in your AI Automation services.
                                </div>
                                <span className="text-[10px] text-n-4 mt-1 mr-1">Just now</span>
                            </div>

                            <div className="flex flex-col items-start max-w-[85%]">
                                <div className="p-3 bg-n-6 rounded-2xl rounded-tl-none text-sm text-n-1 leading-relaxed">
                                    That&apos;s great! We specialize in custom AI agents and workflow automation. Would you like to schedule a free consultation?
                                </div>
                                <span className="text-[10px] text-n-4 mt-1 ml-1">Just now</span>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-n-6 bg-n-7">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="w-full bg-n-8 border border-n-6 rounded-xl py-3 pl-4 pr-12 text-sm text-n-1 focus:outline-none focus:border-color-1 transition-colors placeholder:text-n-4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-color-1 hover:text-color-1/80 transition-colors disabled:opacity-50"
                                    disabled={!message.trim()}
                                >
                                    <RiSendPlane2Fill size={20} />
                                </button>
                            </div>
                            <p className="text-[10px] text-n-4 text-center mt-3">
                                Powered by KrishNova AI Technology
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className="relative group focus:outline-none"
            >
                <div className="absolute -inset-1 bg-conic-gradient rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-16 h-16 rounded-full bg-n-8 border border-n-6 flex items-center justify-center shadow-2xl">
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <RiCloseLine size={32} className="text-n-1" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <img src={chatbotImage} alt="Chatbot" className="w-40 h-40
                                 object-contain" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color-1 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-color-1 border-2 border-n-8"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
