const form = document.getElementById("brandForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
      businessType: document.getElementById("businessType").value,
      brandFeeling: document.getElementById("brandFeeling").value,
      visualStyle: document.getElementById("visualStyle").value
    };

    localStorage.setItem("brandAnswers", JSON.stringify(answers));
    window.location.href = "results.html";
  });
}

const resultTitle = document.getElementById("resultTitle");

if (resultTitle) {
  const savedAnswers = JSON.parse(localStorage.getItem("brandAnswers"));

  if (!savedAnswers) {
    resultTitle.textContent = "No Results Found";
    document.getElementById("resultDescription").textContent =
      "Please complete the questionnaire first.";
  } else {
    const result = generateBrandDirection(savedAnswers);

    resultTitle.textContent = result.title;
    document.getElementById("resultDescription").textContent = result.description;
    document.getElementById("personality").textContent = result.personality;
    document.getElementById("colors").textContent = result.colors;
    document.getElementById("typography").textContent = result.typography;
    document.getElementById("nextStep").textContent = result.nextStep;
  }
}

function generateBrandDirection(answers) {
  if (answers.brandFeeling === "luxury" || answers.visualStyle === "dark") {
    return {
      title: "Elevated Editorial",
      description: "Your brand should feel polished, refined, and memorable.",
      personality: "Elegant, confident, intentional, professional",
      colors: "Navy, charcoal, ivory, champagne, muted gold",
      typography: "Modern serif heading paired with a clean sans-serif body font",
      nextStep: "Create a moodboard with premium textures, strong contrast, and intentional imagery."
    };
  }

  if (answers.brandFeeling === "playful" || answers.visualStyle === "bold") {
    return {
      title: "Playful Creative",
      description: "Your brand should feel expressive, energetic, and easy to recognize.",
      personality: "Fun, creative, bold, friendly",
      colors: "Warm orange, butter yellow, cream, fresh green, soft pink",
      typography: "Rounded display font paired with a simple sans-serif",
      nextStep: "Choose playful brand elements, such as icons, patterns, or custom illustrations."
    };
  }

  if (answers.brandFeeling === "minimal" || answers.visualStyle === "fresh") {
    return {
      title: "Modern Minimal",
      description: "Your brand should feel clean, clear, and easy to understand.",
      personality: "Calm, organized, trustworthy, modern",
      colors: "White, soft gray, beige, muted blue, sage green",
      typography: "Simple sans-serif with subtle serif accents",
      nextStep: "Focus on clean layouts, strong spacing, and consistent visual hierarchy."
    };
  }

  return {
    title: "Warm Minimalist",
    description: "Your brand should feel welcoming, thoughtful, and approachable.",
    personality: "Warm, intentional, soft, approachable",
    colors: "Ivory, beige, soft brown, muted gold, warm blush",
    typography: "Elegant serif paired with a clean sans-serif",
    nextStep: "Build a moodboard with warm textures, simple layouts, and imagery that reflects comfort and connection."
  };
}