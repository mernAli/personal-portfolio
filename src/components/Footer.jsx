import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"

const Footer = () => {
  return (
    // FIX 1: Removed mt-40 — after a pinned section, that margin pushed the
    //         footer far out of the visible scroll area.
    // FIX 2: Added relative positioning and z-10 so the footer always renders
    //         on top of GSAP's pin-spacer div.
    <footer className="bg-black text-white py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                    ALI AMAN
                </h2>

                <div>
                    <h3 className="text-xl font font-semibold mb-4 text-purple-200">
                        Connect
                    </h3>
                    <div className="flex space-x-4">
                        <a className="text-gray-400 hover:text-purple-200 transition-colors"
                        href="https://github.com/mernAli"
                        target="_blank"
                        rel="noopener noreferrer">
                            <FiGithub className="w-5 h-5"/>
                        </a>

                        <a className="text-gray-400 hover:text-purple-200 transition-colors"
                        href="https://www.instagram.com/ali_aman_____/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <FiInstagram className="w-5 h-5"/>
                        </a>

                        <a className="text-gray-400 hover:text-purple-200 transition-colors"
                        href="https://www.linkedin.com/in/ali-aman-8943b725b/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <FiLinkedin className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                    © 2025 ALI_AMAN. All rights reserved
                </p>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
                        Privacy Policy
                    </a>
                    <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
                        Terms of Service
                    </a>
                    <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
                        Cookie Policy
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer