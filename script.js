const form = document.getElementById("brandForm");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const personality = document.getElementById("personality");
const colors = document.getElementById("colors");
const typography = document.getElementById("typography");
const nextStep = document.getElementById("nextStep");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const businessType = document.getElementById("businessType").value;
  const brandFeeling = document.getElementById("brandFeeling").value;
  const visualStyle = document.getElementById("visualStyle").value;

  let brandDirection = generateBrandDirection(
    businessType,
    brandFeeling,
    visualStyle
  );

  resultTitle.textContent = brandDirection.title;
  resultDescription.textContent = brandDirection.description;
  personality.textContent = brandDirection.personality;
  colors.textContent = brandDirection.colors;
  typography.textContent = brandDirection.typography;
  nextStep.textContent = brandDirection.nextStep;

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth" });
});

restartBtn.addEventListener("click", function () {
  form.reset();
  result.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function generateBrandDirection(businessType, brandFeeling, visualStyle) {
  if (brandFeeling === "luxury" || visualStyle === "dark") {
    return {
      title: "Elevated Editorial",
      description:
        "Your brand direction should feel refined, polished, and memorable. This style works well for businesses that want to build trust through a high-end visual experience.",
      personality: "Elegant, confident, intentional, professional",
      colors: "Deep navy, charcoal, ivory, champagne, muted gold",
      typography: "Modern serif paired with a clean sans-serif",
      nextStep:
        "Create a visual moodboard that focuses on premium textures, strong contrast, and consistent imagery."
    };
  }

  if (brandFeeling === "playful" || visualStyle === "bold") {
    return {
      title: "Playful Creative",
      description:
        "Your brand direction should feel energetic, expressive, and easy to recognize. This style works well for brands that want to stand out and create a memorable customer experience.",
      personality: "Fun, creative, bold, friendly",
      colors: "Bright pink, orange, butter yellow, cream, fresh green",
      typography: "Rounded display font paired with a simple sans-serif",
      nextStep:
        "Choose a few playful brand elements, such as icons, shapes, or patterns, to make your brand feel unique."
    };
  }

  if (brandFeeling === "minimal" || visualStyle === "fresh") {
    return {
      title: "Modern Minimal",
      description:
        "Your brand direction should feel clean, clear, and easy to understand. This style works well for businesses that want a polished and professional online presence.",
      personality: "Clear, calm, organized, trustworthy",
      colors: "White, soft gray, beige, muted blue, sage green",
      typography: "Simple sans-serif paired with subtle accent typography",
      nextStep:
        "Focus on spacing, clean layouts, and consistent visuals across your website and social media."
    };
  }

  return {
    title: "Warm Minimalist",
    description:
      "Your brand direction should feel welcoming, thoughtful, and approachable. This style works well for small businesses that want to create an emotional connection with their audience.",
    personality: "Warm, intentional, soft, approachable",
    colors: "Ivory, beige, soft brown, muted gold, warm blush",
    typography: "Elegant serif paired with a clean sans-serif",
    nextStep:
      "Build a moodboard with warm textures, simple layouts, and imagery that reflects comfort and connection."
  };
}