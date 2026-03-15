# HealthMate

HealthMate is a modern, responsive digital health platform designed to bridge the gap between patients and healthcare providers. It offers a seamless experience for finding doctors, booking consultations, and managing medical records securely.

## 🚀 Features

- **24/7 Access to Doctors**: Connect with board-certified professionals anytime.
- **Online Consultations**: Get expert medical advice from the comfort of your home.
- **Find Doctors, Labs, and Pharmacies**: Easily locate nearby medical services.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Secure & Private**: Prioritizes data encryption and patient confidentiality.
- **Interactive FAQ**: Dynamic accordion for quick answers to common questions.
- **Contact Integration**: Easy-to-use contact form for inquiries.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (in Navbar)

## 📁 Project Structure

```text
app/
├── auth/            # Authentication related pages (if any)
├── components/      # Reusable UI components (Button, IconWrapper, etc.)
├── homepage/        # Homepage sections (Hero, Features, FAQ, Contact)
├── layout/          # Layout components (Navbar, Footer)
├── globals.css      # Global styles and Tailwind configuration
├── layout.tsx       # Root layout
└── page.tsx         # Main entry point
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧩 Core Components

- **`Button.tsx`**: A standardized button component with 'solid' and 'outline' variants.
- **`IconWrapper.tsx`**: A utility component to wrap and style icons consistently across the application, support variants like 'circle', 'default', and 'simple'.

---

© 2026 HealthMate. All rights reserved.
