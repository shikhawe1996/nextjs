"use client";
import React from "react";

// TabPage component
export const TabPage = () => (
  <Tabs>
    <Tab title="Fast Delivery">
      <p className="text-base leading-relaxed white">
        We understand the importance of time when hunger strikes. That’s why our
        delivery system is optimized to ensure your food reaches you in 30
        minutes or less. We’ve partnered with top-rated local delivery services
        and trained our fleet for speed and efficiency. Live tracking allows you
        to monitor your order in real-time, from kitchen to doorstep. Whether
        you're at home, at the office, or hosting guests, your favorite meals
        will arrive hot and fresh—guaranteed.
      </p>
    </Tab>
    <Tab title="Easy Ordering">
      <p className="text-base leading-relaxed white">
        Ordering food has never been easier. With our intuitive user interface,
        you can browse thousands of dishes from various restaurants, filter by
        cuisine, ratings, delivery time, or dietary preference, and even save
        your favorite orders for next time. Simply add items to your cart,
        customize your preferences (like spice level or add-ons), and checkout
        in just a few taps. The platform is optimized for both mobile and
        desktop users, making it seamless for everyone.
      </p>
    </Tab>
    <Tab title="Secure Payments">
      <p className="text-base leading-relaxed white">
        We offer a variety of payment options tailored for your
        convenience—credit and debit cards, UPI, net banking, digital wallets
        (like Paytm, Google Pay, PhonePe), and cash on delivery. Every online
        transaction is encrypted using industry-standard security protocols. We
        do not store sensitive card details and all gateways are PCI-DSS
        compliant. Whether you're making a one-time order or saving your card
        for future purchases, rest assured that your information is always safe.
      </p>
    </Tab>
    <Tab title="Customer Support">
      <p className="text-base leading-relaxed white">
        Our customer support team is here to help—24 hours a day, 7 days a week.
        Have an issue with your order? Received the wrong item? Need a refund?
        Contact us via live chat, email, or our toll-free number. We also have a
        detailed Help Center with FAQs and automated solutions for common
        problems. Your satisfaction is our top priority, and we promise to
        resolve most issues within minutes.
      </p>
    </Tab>
    <Tab title="Live Order Tracking">
      <p className="text-base leading-relaxed white">
        Stay informed at every step with our live order tracking feature. From
        the moment you place your order, you’ll get updates on when it’s being
        prepared, packed, picked up, and delivered. Watch your delivery partner
        move across the map in real-time. You’ll even get ETA updates and be
        able to call or chat with the delivery agent for coordination.
      </p>
    </Tab>
    <Tab title="Exclusive Offers">
      <p className="text-base leading-relaxed white">
        Save big with exclusive app-only deals, combo offers, and seasonal
        discounts. We work directly with restaurants and brands to bring you the
        best prices. Enable notifications and never miss a limited-time
        promotion. New users get extra discounts and loyalty members receive
        bonus points on every order.
      </p>
    </Tab>
  </Tabs>
);

/* --- Tabs Component --- */
function Tabs({ children }) {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = React.useState(childrenArray[0].props.title);

  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child, { selected: child.props.title === current })
  );

  return (
    <div className="container p-[20px]">
      {/* Scrollable Tab Slider */}
      <div className="flex overflow-x-auto no-scrollbar border-b mb-4">
        {childrenArray.map((child) => (
          <button
            key={child.props.title}
            onClick={() => setCurrent(child.props.title)}
            className={`whitespace-nowrap px-6 py-3 cursor-pointer transition-colors duration-300 ${
              current === child.props.title
                ? "border-b-2 border-orange-500 text-orange-600 font-semibold"
                : "text-gray-500 hover:text-orange-500"
            }`}
          >
            {child.props.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <section className="mt-4">{newChildren}</section>
    </div>
  );
}

/* --- Tab Component --- */
function Tab({ children, selected }) {
  return (
    <div hidden={!selected} className="text-lg md:text-xl white">
      {children}
    </div>
  );
}

export default TabPage;
