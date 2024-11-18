import React, { useState } from "react";


const faqs = [
  {
    question: "What is BigInt?",
    answer:
      "BigInt is your go-to platform for international financial auditing. We ensure accurate, efficient, and secure financial insights globally.",
  },
  {
    question: "How does BigInt ensure data security?",
    answer:
      "We use state-of-the-art encryption and follow industry best practices to protect your data and maintain confidentiality.",
  },
  {
    question: "What services does BigInt offer?",
    answer:
      "Our services include financial auditing, risk assessment, and real-time analytics tailored to your business needs.",
  },
  {
    question: "Can I integrate BigInt with my existing tools?",
    answer:
      "Absolutely! BigInt supports seamless integration with various enterprise tools and software.",
  },
  {
    question: "Is BigInt suitable for small businesses?",
    answer:
      "Yes, BigInt offers scalable solutions that cater to businesses of all sizes, including startups and small enterprises.",
  },
  {
    question: "What makes BigInt different from competitors?",
    answer:
      "BigInt stands out with its user-friendly interface, customizable tools, and a dedicated support team that ensures client success.",
  },
  {
    question: "How quickly can I get started with BigInt?",
    answer:
      "You can get started within minutes by signing up on our platform. Our onboarding process is straightforward and guided.",
  },
  {
    question: "Does BigInt provide customer support?",
    answer:
      "Yes, we offer 24/7 customer support via email, chat, and phone to assist you with any queries or issues.",
  },

  {
    question: "What are the pricing options for BigInt?",
    answer:
      "BigInt offers flexible pricing plans to fit different business needs. Contact us for a customized quote or check our pricing page for details.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <h2 className='text-2xl font-semibold mb-5'>
        Frequently Asked Questions
      </h2>
      <div className='flex flex-col gap-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='border rounded-md p-4 bg-white shadow-md'>
            <button
              className='flex justify-between items-center w-full text-left font-medium text-lg'
              onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className='mt-3 text-sm text-gray-600'>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default FAQ;
