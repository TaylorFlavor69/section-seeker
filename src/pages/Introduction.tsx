import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function Introduction() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <PageNavigation currentPath={location.pathname} position="top" />
      
      <h1>Sales Lead Trigger System</h1>
      
      <p>
        Welcome to the Sales Lead Trigger System knowledge base. This system automatically generates
        sales opportunities based on machine conditions, helping you proactively reach out to customers
        when they need service, parts, or equipment replacement.
      </p>

      <h2>How It Works</h2>
      
      <p>
        Sales leads are automatically triggered when machines meet specific criteria:
      </p>

      <div className="grid gap-4 my-6">
        <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
          <span className="text-2xl">🔧</span>
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mt-0 mb-1">Mileage Thresholds</h3>
            <p className="text-sm mb-0">Triggers when equipment reaches critical mileage milestones requiring maintenance or replacement</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg">
          <span className="text-2xl">📅</span>
          <div>
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mt-0 mb-1">Age-Based Triggers</h3>
            <p className="text-sm mb-0">Generates leads when machines reach specific age milestones indicating upgrade opportunities</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="font-semibold text-amber-900 dark:text-amber-100 mt-0 mb-1">Fault Code Alerts</h3>
            <p className="text-sm mb-0">Creates immediate leads when yellow (warning) or red (critical) fault codes are detected</p>
          </div>
        </div>
      </div>

      <h2>Navigation</h2>

      <p>
        Use the sidebar on the left to navigate between different sections. Each section contains
        detailed documentation with code examples and practical guidance.
      </p>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-6">
        <p className="font-semibold text-primary mb-2">💡 Quick Start</p>
        <p className="text-sm mb-0">
          Navigate through the sections to learn about each trigger type, view code definitions,
          and understand how to configure thresholds for your fleet.
        </p>
      </div>

      <h2>Lead Priority Levels</h2>

      <div className="flex flex-wrap gap-3 my-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-100 dark:bg-red-950 border border-red-300 dark:border-red-700 rounded-full">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="text-sm font-medium text-red-900 dark:text-red-100">Critical (Red)</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-700 rounded-full">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          <span className="text-sm font-medium text-amber-900 dark:text-amber-100">Warning (Yellow)</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-700 rounded-full">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Standard</span>
        </div>
      </div>

      <p>
        Get started by exploring the sections in the sidebar, beginning with the Quick Start guide
        to learn how to implement and monitor sales lead triggers.
      </p>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
