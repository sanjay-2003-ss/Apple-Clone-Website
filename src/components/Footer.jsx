import React from "react";

const AppleFooter = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-b border-gray-300">
        {/* Shop and Learn */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Shop and Learn</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Store</a></li>
            <li><a href="#" className="hover:underline">Mac</a></li>
            <li><a href="#" className="hover:underline">iPad</a></li>
            <li><a href="#" className="hover:underline">iPhone</a></li>
            <li><a href="#" className="hover:underline">Watch</a></li>
            <li><a href="#" className="hover:underline">AirPods</a></li>
            <li><a href="#" className="hover:underline">TV & Home</a></li>
            <li><a href="#" className="hover:underline">AirTag</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:underline">Gift Cards</a></li>
            <li><a href="#" className="hover:underline">Apple Wallet</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Account</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
            <li><a href="#" className="hover:underline">Apple Store Account</a></li>
            <li><a href="#" className="hover:underline">iCloud.com</a></li>
          </ul>
        </div>

        {/* Entertainment */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Entertainment</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apple One</a></li>
            <li><a href="#" className="hover:underline">Apple TV+</a></li>
            <li><a href="#" className="hover:underline">Apple Music</a></li>
            <li><a href="#" className="hover:underline">Apple Arcade</a></li>
            <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
            <li><a href="#" className="hover:underline">Apple Books</a></li>
            <li><a href="#" className="hover:underline">App Store</a></li>
          </ul>
        </div>

        {/* Apple Store */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Apple Store</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Find a Store</a></li>
            <li><a href="#" className="hover:underline">Genius Bar</a></li>
            <li><a href="#" className="hover:underline">Today at Apple</a></li>
            <li><a href="#" className="hover:underline">Group Reservations</a></li>
            <li><a href="#" className="hover:underline">Apple Camp</a></li>
            <li><a href="#" className="hover:underline">Apple Trade In</a></li>
            <li><a href="#" className="hover:underline">Ways to Buy</a></li>
            <li><a href="#" className="hover:underline">Recycling Programme</a></li>
            <li><a href="#" className="hover:underline">Order Status</a></li>
            <li><a href="#" className="hover:underline">Shopping Help</a></li>
          </ul>
        </div>

        {/* For Business, Education, Healthcare, Government */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">For Business & Education</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apple and Business</a></li>
            <li><a href="#" className="hover:underline">Shop for Business</a></li>
            <li><a href="#" className="hover:underline">Apple and Education</a></li>
            <li><a href="#" className="hover:underline">Shop for Education</a></li>
            <li><a href="#" className="hover:underline">Shop for University</a></li>
            <li><a href="#" className="hover:underline">Apple and Healthcare</a></li>
            <li><a href="#" className="hover:underline">Apple and Government</a></li>
          </ul>
        </div>

        {/* About Apple */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">About Apple</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apple Values</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Education</a></li>
            <li><a href="#" className="hover:underline">Environment</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Supply Chain Innovation</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Apple Leadership</a></li>
            <li><a href="#" className="hover:underline">Career Opportunities</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact Apple</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p className="text-center md:text-left mb-2 md:mb-0">
          More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966. <br />
          India © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Use</a></li>
          <li><a href="#" className="hover:underline">Sales Policy</a></li>
          <li><a href="#" className="hover:underline">Legal</a></li>
          <li><a href="#" className="hover:underline">Site Map</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default AppleFooter;
