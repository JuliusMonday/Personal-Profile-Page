import React from "react";
import Counter from "./components/Counter";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Counter/>
      <Card 
        title="Sample Card"
        content={
          <p>This is a sample card component with customizable content. 
             You can add text, images, and other elements here.</p>
        }
        footer="Card Footer Information"
        imageUrl="https://picsum.photos/500/300"
      />
    </>
  );
}
