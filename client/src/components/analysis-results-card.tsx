import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, Info } from "lucide-react"

export interface AnalysisResultProps {
  inputText: string
  label: "malicious" | "neutral" | "informational" | "safe" | "error"
  confidence: number // between 0 and 1
  type: "tweet" | "text" | "image" | "email"
  timestamp?: string
}

export function AnalysisResultCard({
  inputText,
  label,
  confidence,
  type,
  timestamp,
}: AnalysisResultProps) {
  const formattedDate = timestamp
    ? new Date(timestamp).toLocaleString()
    : new Date().toLocaleString()

  const getLabelStyle = (label: string) => {
    switch (label) {
      case "malicious":
        return {
          icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
          className: "bg-red-100 text-red-800",
        }
      case "neutral":
        return {
          icon: <Info className="w-4 h-4 text-yellow-600" />,
          className: "bg-yellow-100 text-yellow-800",
        }
      case "informational":
      case "safe":
        return {
          icon: <CheckCircle2 className="w-4 h-4 text-green-600" />,
          className: "bg-green-100 text-green-800",
        }
      case "error":
      default:
        return {
          icon: <AlertTriangle className="w-4 h-4 text-gray-500" />,
          className: "bg-gray-100 text-gray-800",
        }
    }
  }

  const labelStyle = getLabelStyle(label)

  return (
    <Card className="mt-6 border border-muted shadow-md">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Type: <span className="capitalize">{type}</span>
          </div>
          <div className="text-sm text-muted-foreground">Analyzed: {formattedDate}</div>
        </div>

        <div className="text-base leading-relaxed text-zinc-900 dark:text-zinc-100 border-l-4 border-primary pl-4">
          “{inputText}”
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Classification:</span>
            <Badge className={labelStyle.className}>
              {labelStyle.icon}
              <span className="ml-1 capitalize">{label}</span>
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Confidence:</span>
            <Badge className="bg-blue-100 text-blue-800">
              {(confidence * 100).toFixed(1)}%
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AnalysisResultCard
