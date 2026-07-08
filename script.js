const form = document.getElementById("brandForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = {
      businessType: document.getElementById("businessType").value,
      brandFeeling: document.getElementById("brandFeeling").value,
      visualStyle: document.getElementById("visualStyle").value,
      targetAudience: document.getElementById("targetAudience").value,
      brandGoal: document.getElementById("brandGoal").value,
      colorPreference: document.getElementById("colorPreference").value
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
    document.getElementById("keywords").textContent = result.keywords;
    document.getElementById("audienceInsight").textContent = result.audienceInsight;
    document.getElementById("goalRecommendation").textContent = result.goalRecommendation;
    document.getElementById("nextStep").textContent = result.nextStep;
  }
}

function generateBrandDirection(answers) {
  let audienceInsight = getAudienceInsight(answers.targetAudience);
  let goalRecommendation = getGoalRecommendation(answers.brandGoal);

  if (
    answers.brandFeeling === "luxury" ||
    answers.visualStyle === "dark" ||
    answers.colorPreference === "dark"
  ) {
    return {
      title: "Elevated Editorial",
      description: "Your brand should feel polished, refined, and memorable. This direction works well for businesses that want to communicate professionalism, trust, and premium value.",
      personality: "Elegant, confident, intentional, professional",
      colors: "Deep sapphire, charcoal, ivory, muted gold, soft cream",
      typography: "Serif heading font paired with a clean sans-serif body font",
      keywords: "Refined, strategic, premium, confident, timeless",
      audienceInsight: audienceInsight,
      goalRecommendation: goalRecommendation,
      nextStep: "Create a moodboard with premium textures, strong contrast, editorial photography, and intentional brand details."
    };
  }

  if (
    answers.brandFeeling === "playful" ||
    answers.visualStyle === "bold" ||
    answers.colorPreference === "bold"
  ) {
    return {
      title: "Playful Creative",
      description: "Your brand should feel expressive, energetic, and easy to recognize. This direction works well for businesses that want to stand out and build a memorable customer experience.",
      personality: "Fun, creative, bold, friendly",
      colors: "Warm orange, butter yellow, cream, fresh green, soft pink",
      typography: "Rounded display font paired with a simple sans-serif body font",
      keywords: "Creative, expressive, energetic, friendly, memorable",
      audienceInsight: audienceInsight,
      goalRecommendation: goalRecommendation,
      nextStep: "Choose playful brand elements, such as icons, patterns, colorful accents, and custom illustrations."
    };
  }

  if (
    answers.brandFeeling === "minimal" ||
    answers.visualStyle === "fresh" ||
    answers.colorPreference === "neutral"
  ) {
    return {
      title: "Modern Minimal",
      description: "Your brand should feel clean, clear, and easy to understand. This direction works well for businesses that want a polished, professional, and simple online presence.",
      personality: "Calm, organized, trustworthy, modern",
      colors: "Warm ivory, soft gray, beige, muted blue, sage green",
      typography: "Simple sans-serif font with subtle serif accents",
      keywords: "Clean, calm, focused, trustworthy, modern",
      audienceInsight: audienceInsight,
      goalRecommendation: goalRecommendation,
      nextStep: "Focus on clean layouts, strong spacing, consistent visuals, and clear content hierarchy."
    };
  }

  return {
    title: "Warm Minimalist",
    description: "Your brand should feel welcoming, thoughtful, and approachable. This direction works well for small businesses that want to create emotional connection and trust with their audience.",
    personality: "Warm, intentional, soft, approachable",
    colors: "Ivory, beige, soft brown, muted gold, warm blush",
    typography: "Elegant serif heading font paired with a clean sans-serif body font",
    keywords: "Warm, approachable, intentional, clear, connected",
    audienceInsight: audienceInsight,
    goalRecommendation: goalRecommendation,
    nextStep: "Build a moodboard with warm textures, simple layouts, natural lighting, and imagery that reflects comfort and connection."
  };
}

function getAudienceInsight(targetAudience) {
  if (targetAudience === "young") {
    return "Your audience may respond well to clear messaging, modern visuals, and a brand personality that feels relatable and fresh.";
  }

  if (targetAudience === "families") {
    return "Your audience may respond well to a brand that feels trustworthy, warm, helpful, and easy to understand.";
  }

  if (targetAudience === "professionals") {
    return "Your audience may respond well to clean design, confident messaging, and a polished online presence.";
  }

  if (targetAudience === "luxury") {
    return "Your audience may respond well to refined visuals, intentional details, premium language, and a strong sense of exclusivity.";
  }

  return "Your audience should guide your brand voice, visual style, and content strategy.";
}

function getGoalRecommendation(brandGoal) {
  if (brandGoal === "recognition") {
    return "Focus on consistent colors, typography, logo usage, and repeated visual elements so customers can recognize your brand quickly.";
  }

  if (brandGoal === "sales") {
    return "Focus on trust-building visuals, clear calls to action, and messaging that explains the value of your product or service.";
  }

  if (brandGoal === "social") {
    return "Focus on creating a consistent visual system for posts, stories, reels, and captions so your brand feels recognizable online.";
  }

  if (brandGoal === "website") {
    return "Focus on clear navigation, strong hierarchy, readable typography, and visuals that guide users toward taking action.";
  }

  return "Focus on building a clear and consistent brand foundation before expanding into marketing materials.";
}