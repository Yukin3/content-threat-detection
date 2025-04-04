import pandas as pd

# Load the dataset
df = pd.read_csv("tweets_final.csv")

# Drop missing texts
df = df[df["text"].notnull()]

# Convert 'relevant' to boolean
df["relevant"] = df["relevant"].astype(str).str.lower().map({"true": True, "false": False})

# Sample 25 tweets
sample_df = df.sample(n=25, random_state=42)

# Format into TS-ready strings
output = []
for _, row in sample_df.iterrows():
    text = row["text"].replace('"', '\\"').strip()
    relevant = str(row["relevant"]).lower()
    output.append(f'  {{ text: "{text}", relevant: {relevant} }},')

# Save to TypeScript file
with open("sampleTweets.ts", "w", encoding="utf-8") as f:
    f.write("export const sampleTweets = [\n")
    f.write("\n".join(output))
    f.write("\n];\n")

print("✅ Exported 25 samples to sampleTweets.ts")
