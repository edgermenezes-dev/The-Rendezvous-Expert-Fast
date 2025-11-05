import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://app.emergent.sh/?utm_source=emergent-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4"
              alt="Emergent"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-400">Made with Emergent</span>
          </a>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} The Rendezvous Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
