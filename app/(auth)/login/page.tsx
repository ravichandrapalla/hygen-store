import CustomForm from "@/components/CustomForm";
import React from "react";
const formFields = [
  { id: crypto.randomUUID(), name: "email", label: "Email" },
  { id: crypto.randomUUID(), name: "password", label: "Password" },
];

const page = () => {
  return (
    <div>
      <div className="w-[322px] flex flex-col items-center justify-between py-10 px-6">
        {/* Top - Login Form */}
        <div className="w-full max-w-xs mx-auto">
          <p className="heading-5-alt text-var1 self-center italic tracking-wide">
            - Login
          </p>

          {/* Form */}

          <CustomForm heading="Login to Your Account" fields={formFields} />
        </div>

        {/* Footer */}
        <footer className="mt-16 w-full max-w-5xl text-sm text-gray-400 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Column 1 - Logo & Social */}
          <div className="space-y-4">
            <h2 className="text-white font-semibold text-lg">Hygge</h2>
            <p>© 2020 - All rights reserved</p>
            <div className="flex space-x-3 text-white text-xl">
              <i className="fab fa-instagram" />
              <i className="fab fa-twitter" />
              <i className="fab fa-facebook" />
              <i className="fab fa-whatsapp text-green-400" />
            </div>
          </div>

          {/* Column 2 - Categories */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-1">Categories</h3>
            <ul className="space-y-1">
              <li>On Sale</li>
              <li>Featured</li>
              <li>Masks</li>
              <li>Eye Care</li>
              <li>Moisturizers</li>
              <li>Treatments</li>
              <li>Night Care</li>
              <li>Sun Care</li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-1">Legal</h3>
            <ul className="space-y-1">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Returns Policy</li>
              <li>Shipping</li>
              <li>Data Protection</li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-1">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Vision</li>
              <li>Culture</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
