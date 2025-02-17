import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-8 font-sans tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 max-w-sm">
            <h4 className="text-base font-semibold mb-6 text-primary-text">About Us</h4>
            <p className="text-primary-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, mi eu
              pulvinar cursus, sem elit interdum mauris.</p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-6 text-primary-text">Services</h4>
            <ul className="space-y-3">
              <li><a href="javascript:void(0)" className="text-primary-text hover:text-primary-text text-sm">Web Development</a></li>
              <li><a href="javascript:void(0)" className="text-primary-text hover:text-primary-text text-sm">Mobile App Development</a>
              </li>
              <li><a href="javascript:void(0)" className="text-primary-text hover:text-primary-text text-sm">UI/UX Design</a></li>
              <li><a href="javascript:void(0)" className="text-primary-text hover:text-primary-text text-sm">Digital Marketing</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold mb-6 text-primary-text">Contact Us</h4>
            <p className="text-primary-text text-sm">123 Main Street</p>
            <p className="text-primary-text text-sm">City, State, Country</p>
            <p className="text-primary-text text-sm">contact@example.com</p>
            <p className="text-primary-text text-sm">+1 234 567 890</p>
          </div>
        </div>

        <div className="mt-12">
          <p className='text-primary-text text-sm'>© BHUMIJAA. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
