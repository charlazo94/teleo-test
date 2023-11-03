// App.js
import React from "react";
import ChildScreenshots from "./Screenshots";

function App() {
  // URLs reales de thumbnails
  const realChildScreenshots = [
    { id: 1, thumbnail: "https://picsum.photos/200/300/?random" },
    { id: 2, thumbnail: "https://picsum.photos/200/300/?random" },
    { id: 3, thumbnail: "https://picsum.photos/200/300/?random" },
    // Agrega tus propias URLs de imágenes reales
  ];

  return (
    <div className="App">
      <ChildScreenshots screenshots={realChildScreenshots} />
    </div>
  );
}

export default App;
