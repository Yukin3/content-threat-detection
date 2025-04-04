import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { ArrowRight, BrainCog, Upload, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                   AI-Powered Threat Detection 
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  An AI-powered, human-reviewed, digital threat detection application, scanning for potential security concerns and suspisicous online activity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/upload">
                  <Button size="lg" className="gap-1">
                    Analyze Content <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline">
                    View Analyses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-stone-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Upload className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Upload Content</CardTitle>
                  <CardDescription>Upload a variety of content from images, to tweets, texts and emails.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our system accepts various content types and classifies their threat level using our advanced AI model SentryX.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BrainCog className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>AI Analysis</CardTitle>
                  <CardDescription>Advanced AI model flag potentially dangerous or suspicious content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our deep learning model analyzes content for cyberattacks, scam/phising attempts, national security threats and more
                    potential digital safety concerns.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>In-Depth Review</CardTitle>
                  <CardDescription>Community moderators review classification results for accuracy.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Human moderators provide an extra layer of integrity on ALL analyzed content, ensuring results are accurate
                    and relevant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

