import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function Components() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <PageNavigation currentPath={location.pathname} position="top" />
      
      <h1>Trigger Types & Lead Components</h1>
      
      <p>
        Understanding the different trigger types that generate sales leads is essential for
        managing your equipment service opportunities effectively.
      </p>

      <h2>Mileage-Based Triggers</h2>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🔧</span>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">Code: M-XXXX</span>
      </div>

      <p>
        Mileage triggers activate when equipment reaches specific operating hour thresholds.
        Watch these visual meters to track when machines need service.
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-card rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Machine MCH-2024-001</span>
            <span className="text-sm text-muted-foreground">5,200 / 5,000 hours</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-amber-500" style={{ width: '104%' }}></div>
          </div>
          <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">⚠️ Service threshold reached</p>
        </div>

        <div className="p-4 bg-card rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Machine MCH-2024-002</span>
            <span className="text-sm text-muted-foreground">10,250 / 10,000 hours</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-red-500" style={{ width: '102.5%' }}></div>
          </div>
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">🔧 Major service required</p>
        </div>

        <div className="p-4 bg-card rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Machine MCH-2024-003</span>
            <span className="text-sm text-muted-foreground">3,200 / 5,000 hours</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: '64%' }}></div>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">✓ Operating normally</p>
        </div>
      </div>

      <h2>Age-Based Triggers</h2>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📅</span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 rounded-full text-sm font-medium">Code: A-XY</span>
      </div>

      <p>
        Age triggers fire when machines reach specific age milestones. Green indicates machines
        past replacement age (15+ years), creating strong upgrade opportunities.
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-card rounded-lg border">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">Machine MCH-2008-045</span>
            <span className="text-sm font-bold text-green-600 dark:text-green-400">17 years old</span>
          </div>
          <div className="relative h-4 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-0 flex">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 ${i < 17 ? (i >= 15 ? 'bg-green-500' : 'bg-primary/30') : ''}`}
                  style={{ borderRight: i < 19 ? '1px solid hsl(var(--background))' : 'none' }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0y</span>
            <span className="text-green-600 dark:text-green-400 font-semibold">15y+</span>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">✓ Prime for replacement - High trade-in value</p>
        </div>

        <div className="p-4 bg-card rounded-lg border">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">Machine MCH-2014-023</span>
            <span className="text-sm font-bold text-amber-600 dark:text-amber-400">11 years old</span>
          </div>
          <div className="relative h-4 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-0 flex">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 ${i < 11 ? 'bg-primary/30' : ''}`}
                  style={{ borderRight: i < 19 ? '1px solid hsl(var(--background))' : 'none' }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0y</span>
            <span className="font-semibold">15y+</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Approaching replacement window</p>
        </div>

        <div className="p-4 bg-card rounded-lg border">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold">Machine MCH-2020-089</span>
            <span className="text-sm font-bold">5 years old</span>
          </div>
          <div className="relative h-4 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-0 flex">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 ${i < 5 ? 'bg-primary/30' : ''}`}
                  style={{ borderRight: i < 19 ? '1px solid hsl(var(--background))' : 'none' }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0y</span>
            <span className="font-semibold">15y+</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Still in prime operating window</p>
        </div>
      </div>

      <h2>Fault Code Triggers</h2>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚠️</span>
          <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium">Yellow: FC-Y-XXX</span>
          <span className="text-sm text-muted-foreground">Warning - Schedule service</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚨</span>
          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 rounded-full text-sm font-medium">Red: FC-R-XXX</span>
          <span className="text-sm text-muted-foreground">Critical - Immediate action</span>
        </div>
      </div>

      <p>
        Fault code triggers generate immediate leads when diagnostic codes are detected.
        Visual alerts show severity and required action.
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-red-50 dark:bg-red-950/30 border-2 border-red-500 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 rounded font-mono text-sm font-semibold">FC-R-456</span>
                <span className="text-xs px-2 py-1 bg-red-500 text-white rounded-full font-semibold">CRITICAL</span>
              </div>
              <p className="font-semibold text-red-900 dark:text-red-100">Hydraulic system failure - Machine MCH-2024-002</p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-red-800 dark:text-red-200">⚡ Immediate action required</p>
                <p className="text-red-700 dark:text-red-300">🔧 Parts needed: Hydraulic pump, Pressure valve</p>
                <p className="text-red-700 dark:text-red-300">⏱️ Estimated downtime: 1-2 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 rounded font-mono text-sm font-semibold">FC-Y-123</span>
                <span className="text-xs px-2 py-1 bg-amber-500 text-white rounded-full font-semibold">WARNING</span>
              </div>
              <p className="font-semibold text-amber-900 dark:text-amber-100">Engine temperature sensor degraded - Machine MCH-2024-001</p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-amber-800 dark:text-amber-200">📅 Schedule service within 1-2 weeks</p>
                <p className="text-amber-700 dark:text-amber-300">🔧 Parts needed: Temperature sensor</p>
                <p className="text-amber-700 dark:text-amber-300">⏱️ Estimated downtime: 2 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-500/50 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-2xl">✓</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-green-900 dark:text-green-100">No active fault codes - Machine MCH-2024-003</p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">All systems operating normally</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Priority Visual Reference</h2>

      <div className="grid gap-3 my-6">
        <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <code className="text-sm font-semibold">CRITICAL</code>
          </div>
          <span className="text-sm">Red fault codes - Immediate contact required</span>
        </div>

        <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
            <code className="text-sm font-semibold">WARNING</code>
          </div>
          <span className="text-sm">Yellow fault codes - Schedule service within 1-2 weeks</span>
        </div>

        <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <code className="text-sm font-semibold">STANDARD</code>
          </div>
          <span className="text-sm">Mileage & age triggers - Plan proactive outreach</span>
        </div>
      </div>

      <h2>Best Practices</h2>

      <div className="bg-muted rounded-lg p-4 my-4 space-y-2">
        <p className="font-semibold mb-2">✓ Do</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Respond to critical (red) fault codes within 24 hours</li>
          <li>Monitor mileage triggers before equipment reaches threshold</li>
          <li>Use age triggers to plan equipment replacement cycles</li>
          <li>Track lead conversion rates by trigger type</li>
        </ul>
      </div>

      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-4 space-y-2">
        <p className="font-semibold text-destructive mb-2">✗ Don't</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Ignore red fault code leads - they indicate critical machine issues</li>
          <li>Wait for customers to contact you - be proactive with leads</li>
          <li>Treat all lead types the same - prioritize by severity</li>
          <li>Forget to update machine data after service completion</li>
        </ul>
      </div>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
