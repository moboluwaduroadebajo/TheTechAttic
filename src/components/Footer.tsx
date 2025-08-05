import Link from "next/link";
import { MessageCircle, Phone } from "react-feather";

const Footer = () => {
  const popularCategories = [
    { label: "Staples", url: "" },
    { label: "Beverages", url: "" },
    { label: "Personal Care", url: "" },
    { label: "Home Care", url: "" },
    { label: "Baby Care", url: "" },
    { label: "Vegetables & Fruits", url: "" },
    { label: "Snacks & Foods", url: "" },
    { label: "Dairy & Bakery", url: "" },
  ];

  const customerServices = [
    { label: "About Us", url: "" },
    { label: "Terms and Conditions", url: "" },
    { label: "FAQ", url: "" },
    { label: "Privacy Policy", url: "" },
  ];
  return (
    <div className="bg-primary px-20 py-10 text-white ">
      {" "}
      <div className="flex flex-wrap gap-20 justify-between">
        <div className="flex flex-col gap-4">
          <span className="md:text-4xl text-xl font-extrabold pb-4">
            TheTechAttic
          </span>

          <span className="font-bold text-lg">Contact Us</span>

          <div className="flex text-[15px] gap-3">
            <MessageCircle />
            <div>
              <p>Whatsapp </p>
              <p>08094018990</p>
            </div>
          </div>

          <div className="flex text-[15px] gap-3">
            <Phone />
            <div>
              <p>Call Us </p>
              <p>08094018990</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white border-b-3 border-white pb-2 inline-block">
            Most Popular Categories
          </h3>

          <ul className="flex flex-col gap-3 list-disc mt-6 ml-4">
            {popularCategories.map((category, index) => (
              <Link key={index} href={category.url} className="hover:underline">
                <li>{category.label}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white border-b-3 border-white pb-2 inline-block">
            Customer Services
          </h3>

          <ul className="flex flex-col gap-3 list-disc mt-6 ml-4">
            {customerServices.map((category, index) => (
              <Link key={index} href={category.url} className="hover:underline">
                <li>{category.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-light-blue pt-6 mt-10 text-center ">
        <p className="text-footer-text-muted">
          © 2025 All rights reserved. The Tech Attic.
        </p>
      </div>
    </div>
  );
};

export default Footer;
