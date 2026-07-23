/* =========================================================
   BRAND CLARITY APPLICATION
   ========================================================= */

/* ---------- Questionnaire Form ---------- */

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

    const allQuestionsAnswered = Object.values(answers).every(
      answer => answer.trim() !== ""
    );

    if (!allQuestionsAnswered) {
      alert("Please answer every question before generating your results.");
      return;
    }

    localStorage.setItem("brandAnswers", JSON.stringify(answers));
    window.location.href = "results.html";
  });
}

/* ---------- Results Page ---------- */

const resultTitle = document.getElementById("resultTitle");

if (resultTitle) {
  const savedAnswers = getSavedAnswers();

  if (!savedAnswers) {
    showEmptyResultsState();
  } else {
    const result = generateBrandDirection(savedAnswers);
    displayBrandResults(result);
  }
}

/* ---------- Start Over Button ---------- */

const startOverLink = document.querySelector(
  'a[href="questionnaire.html"].button-secondary'
);

if (startOverLink) {
  startOverLink.addEventListener("click", function () {
    localStorage.removeItem("brandAnswers");
  });
}

/* =========================================================
   STORAGE AND DISPLAY FUNCTIONS
   ========================================================= */

function getSavedAnswers() {
  const storedAnswers = localStorage.getItem("brandAnswers");

  if (!storedAnswers) {
    return null;
  }

  try {
    return JSON.parse(storedAnswers);
  } catch (error) {
    console.error("Unable to read saved brand answers:", error);
    localStorage.removeItem("brandAnswers");
    return null;
  }
}

function displayBrandResults(result) {
  setTextContent("resultTitle", result.title);
  setTextContent("resultDescription", result.description);
  setTextContent("personality", result.personality);
  setTextContent("colors", result.colors);
  setTextContent("typography", result.typography);
  setTextContent("keywords", result.keywords);
  setTextContent("audienceInsight", result.audienceInsight);
  setTextContent("goalRecommendation", result.goalRecommendation);
  setTextContent("nextStep", result.nextStep);
}

function showEmptyResultsState() {
  setTextContent("resultTitle", "No Results Found");

  setTextContent(
    "resultDescription",
    "Please complete the Brand Discovery Questionnaire before viewing your personalized recommendations."
  );

  setTextContent(
    "personality",
    "Complete the questionnaire to discover your brand personality."
  );

  setTextContent(
    "colors",
    "Complete the questionnaire to receive a suggested color direction."
  );

  setTextContent(
    "typography",
    "Complete the questionnaire to receive typography recommendations."
  );

  setTextContent(
    "keywords",
    "Complete the questionnaire to generate your brand keywords."
  );

  setTextContent(
    "audienceInsight",
    "Complete the questionnaire to receive a target audience insight."
  );

  setTextContent(
    "goalRecommendation",
    "Complete the questionnaire to receive a business goal recommendation."
  );

  setTextContent(
    "nextStep",
    "Begin with the questionnaire to generate your personalized brand direction."
  );
}

function setTextContent(elementId, content) {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = content;
  }
}

/* =========================================================
   BRAND DIRECTION LOGIC
   ========================================================= */

function generateBrandDirection(answers) {
  const audienceInsight = getAudienceInsight(answers.targetAudience);
  const goalRecommendation = getGoalRecommendation(answers.brandGoal);

  if (
    answers.brandFeeling === "luxury" ||
    answers.visualStyle === "dark" ||
    answers.colorPreference === "dark"
  ) {
    return {
      title: "Elevated Editorial",

      description:
        "Your brand should feel polished, refined, and memorable. This direction works well for businesses that want to communicate professionalism, trust, and premium value.",

      personality:
        "Elegant, confident, intentional, and professional",

      colors:
        "Deep sapphire, charcoal, ivory, muted gold, and soft cream",

      typography:
        "A sophisticated serif heading font paired with a clean sans-serif body font",

      keywords:
        "Refined, strategic, premium, confident, and timeless",

      audienceInsight: audienceInsight,

      goalRecommendation: goalRecommendation,

      nextStep:
        "Create a moodboard featuring premium textures, strong contrast, editorial photography, and intentional brand details."
    };
  }

  if (
    answers.brandFeeling === "playful" ||
    answers.visualStyle === "bold" ||
    answers.colorPreference === "bold"
  ) {
    return {
      title: "Playful Creative",

      description:
        "Your brand should feel expressive, energetic, and easy to recognize. This direction works well for businesses that want to stand out and build a memorable customer experience.",

      personality:
        "Fun, creative, bold, and friendly",

      colors:
        "Warm orange, butter yellow, cream, fresh green, and soft pink",

      typography:
        "A rounded display font paired with a simple sans-serif body font",

      keywords:
        "Creative, expressive, energetic, friendly, and memorable",

      audienceInsight: audienceInsight,

      goalRecommendation: goalRecommendation,

      nextStep:
        "Choose playful brand elements such as icons, patterns, colorful accents, and custom illustrations."
    };
  }

  if (
    answers.brandFeeling === "minimal" ||
    answers.visualStyle === "fresh" ||
    answers.colorPreference === "neutral"
  ) {
    return {
      title: "Modern Minimal",

      description:
        "Your brand should feel clean, clear, and easy to understand. This direction works well for businesses that want a polished, professional, and simple online presence.",

      personality:
        "Calm, organized, trustworthy, and modern",

      colors:
        "Warm ivory, soft gray, beige, muted blue, and sage green",

      typography:
        "A simple sans-serif font with subtle serif accents",

      keywords:
        "Clean, calm, focused, trustworthy, and modern",

      audienceInsight: audienceInsight,

      goalRecommendation: goalRecommendation,

      nextStep:
        "Focus on clean layouts, strong spacing, consistent visuals, and a clear content hierarchy."
    };
  }

  return {
    title: "Warm Minimalist",

    description:
      "Your brand should feel welcoming, thoughtful, and approachable. This direction works well for small businesses that want to create emotional connection and trust with their audience.",

    personality:
      "Warm, intentional, soft, and approachable",

    colors:
      "Ivory, beige, soft brown, muted gold, and warm blush",

    typography:
      "An elegant serif heading font paired with a clean sans-serif body font",

    keywords:
      "Warm, approachable, intentional, clear, and connected",

    audienceInsight: audienceInsight,

    goalRecommendation: goalRecommendation,

    nextStep:
      "Build a moodboard featuring warm textures, simple layouts, natural lighting, and imagery that reflects comfort and connection."
  };
}

/* =========================================================
   AUDIENCE INSIGHTS
   ========================================================= */

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

/* =========================================================
   BUSINESS GOAL RECOMMENDATIONS
   ========================================================= */

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