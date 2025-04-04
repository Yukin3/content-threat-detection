
const env = import.meta.env;

const API_URL =
  env.VITE_API_URL || "http://localhost:8080/api"; // fallback for local dev

export async function classifyContent(
  content: string,
  contentType: "tweet" | "text" | "email"
): Promise<{
  label: "malicious" | "neutral" | "informational" | "safe" | "error";
  confidence: number;
}> {
  try {
    const res = await fetch(`${API_URL}/classify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, contentType }),
    });

    if (!res.ok) {
      throw new Error(`Backend error: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      label: data.label || "error",
      confidence: typeof data.confidence === "number" ? data.confidence : 0,
    };
  } catch (error) {
    console.error("Classification error:", error);
    return { label: "error", confidence: 0 };
  }
}

