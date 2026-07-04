/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { QuoteProvider } from "./context/QuoteContext";

export default function App() {
  return (
    <HelmetProvider>
      <QuoteProvider>
        <BrowserRouter>
          <Helmet>
            <title>JAGDAMB Global Logistics | India Sourcing & Export Partner</title>
            <meta name="description" content="Jagdamb Global Logistics is a premium India-based Global Sourcing & Export Solutions Partner specializing in high-quality agricultural commodities and food products." />
            <meta name="keywords" content="global sourcing, export solutions, India exports, agricultural commodities, food products sourcing, JAGDAMB Global Logistics" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="JAGDAMB Global Logistics" />
            <meta property="og:description" content="Your reliable global sourcing and export solutions partner in India." />
            <meta property="og:site_name" content="JAGDAMB Global Logistics" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="JAGDAMB Global Logistics" />
            <meta name="twitter:description" content="Your reliable global sourcing and export solutions partner in India." />
          </Helmet>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QuoteProvider>
    </HelmetProvider>
  );
}
