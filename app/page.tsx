import { ImageCombiner } from "@/components/image-combiner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TaTTTy - Free AI Image Generator & Editor",
  description:
    "TaTTTy is your go-to AI image generation tool. Create stunning images from text, edit existing images with AI, and explore multiple aspect ratios. Powered by Google Gemini 2.5 Flash Image.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ImageCombiner />
    </main>
  )
}
