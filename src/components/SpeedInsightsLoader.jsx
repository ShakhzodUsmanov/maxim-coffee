import { useEffect } from 'react'

const SpeedInsightsLoader = () => {
  useEffect(() => {
    if (!import.meta.env.PROD) {
      return
    }

    const loadSpeedInsights = async () => {
      try {
        const pkgName = '@vercel/speed-insights'
        const speedInsights = await import(/* @vite-ignore */ pkgName)

        if (typeof speedInsights.injectSpeedInsights === 'function') {
          speedInsights.injectSpeedInsights()
        }
      } catch {
        // Speed Insights is optional; the app should keep working if package is absent.
      }
    }

    loadSpeedInsights()
  }, [])

  return null
}

export default SpeedInsightsLoader