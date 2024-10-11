import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Career Connect</h3>
            <p className="text-sm">
              Your trusted platform for finding the best job opportunities and connecting with top talent in the industry.
            </p>
            <p className="text-sm mt-4">&copy; 2024 Career Connect. All rights reserved.</p>
          </div>

          {/* Job Seekers Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              <li><a href="/jobs" className="hover:text-white">Find Jobs</a></li>
              <li><a href="/profile" className="hover:text-white">Create Profile</a></li>
              <li><a href="/career-advice" className="hover:text-white">Career Advice</a></li>
              <li><a href="/blog" className="hover:text-white">Job Search Tips</a></li>
            </ul>
          </div>

          {/* Employers Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Employers</h3>
            <ul className="space-y-2">
              <li><a href="/post-job" className="hover:text-white">Post a Job</a></li>
              <li><a href="/search-resumes" className="hover:text-white">Search Resumes</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/employer-blog" className="hover:text-white">Hiring Tips</a></li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
