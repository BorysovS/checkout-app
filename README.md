E-Commerce App
This is a simple e-commerce application built with Next.js, TypeScript, React, and Tailwind CSS. It allows users to browse a list of products, view product details, and proceed to a checkout page where they can apply promo codes to get discounts.
Features

Product Listing: Displays a list of products fetched from the DummyJSON API (https://dummyjson.com/products).
Checkout Page: Allows users to view product details and apply promo codes for discounts.
Responsive Design: Built with Tailwind CSS for a mobile-friendly UI.
Optimized Images: Uses Next.js <Image /> component with priority for better performance (Largest Contentful Paint optimization).
Promo Codes: Supports the following promo codes for discounts:
DISCOUNT10: 10% off the product price.
DISCOUNT20: 20% off the product price.
DISCOUNT30: 30% off the product price.



Installation

Clone the repository:
git clone <repository-url>
cd e-commerce-app


Install dependencies:
npm install


Run the development server:
npm run dev


Open http://localhost:3000 in your browser to view the app.


Usage

Browse Products: Visit the homepage (/) to see the list of products.
Checkout: Click the "Checkout" button on any product to navigate to /checkout?product_id=<ID>.
Apply Promo Codes: On the checkout page, enter one of the following promo codes: DISCOUNT10, DISCOUNT20, or DISCOUNT30 to apply a discount.
Return to Home: Use the "Back to Home" link on the checkout page to return to the homepage.

Project Structure
src/
├── app/
│   ├── checkout/
│   │   └── page.tsx        # Checkout page
│   └── page.tsx            # Homepage
├── components/
│   ├── CheckoutClient.tsx  # Client-side checkout logic
│   ├── ProductCard.tsx     # Product card component
│   ├── PromoForm.tsx       # Promo code form
│   ├── OrderSummary.tsx    # Order summary display
│   └── index.ts            # Component exports
├── types/
│   └── product.ts          # TypeScript types
├── utils/
│   ├── api.ts              # API fetch functions
│   └── calculateDiscount.ts # Discount calculation logic
├── .prettierrc             # Prettier configuration
├── .prettierignore         # Prettier ignore rules
└── next.config.js          # Next.js configuration

Dependencies

Next.js: Framework for server-side rendering and routing.
TypeScript: For type safety.
Tailwind CSS: For styling.
Prettier: For code formatting (with prettier-plugin-tailwindcss for sorting Tailwind classes).





