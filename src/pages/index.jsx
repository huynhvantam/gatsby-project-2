import * as React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ContentA from "../components/ContentA";
import ContentB from "../components/ContentB";
import ContentC from "../components/ContentC";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <ContentA />
        <ContentB />
        <ContentC />
      </main>
    </Layout>
  );
}
