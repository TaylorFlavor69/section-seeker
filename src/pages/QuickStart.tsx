import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function QuickStart() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <PageNavigation currentPath={location.pathname} position="top" />
      
      <h1>Quick Start Guide</h1>
      
      <p>
        Get your sales lead trigger system up and running with this step-by-step guide.
      </p>

      <h2>Understanding Lead Codes</h2>
      
      <p>
        Each sales lead is identified by a code that indicates the trigger type:
      </p>

      <div className="bg-muted rounded-lg p-4 my-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded font-mono text-sm">M-5000</code>
            <span className="text-sm">Mileage trigger at 5,000 hours</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 rounded font-mono text-sm">A-5Y</code>
            <span className="text-sm">Age trigger at 5 years</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 rounded font-mono text-sm">FC-Y-123</code>
            <span className="text-sm">Yellow fault code 123</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 rounded font-mono text-sm">FC-R-456</code>
            <span className="text-sm">Red fault code 456</span>
          </div>
        </div>
      </div>

      <h2>Setting Up Triggers</h2>

      <p>
        Configure your trigger thresholds in the system:
      </p>

      <pre>
        <code>{`// trigger-config.js
export const triggers = {
  mileage: {
    thresholds: [5000, 10000, 15000, 20000],
    unit: 'hours'
  },
  age: {
    thresholds: [3, 5, 7, 10],
    unit: 'years'
  },
  faultCodes: {
    yellow: { severity: 'warning', action: 'schedule_service' },
    red: { severity: 'critical', action: 'immediate_contact' }
  }
};`}</code>
      </pre>

      <h2>Example: Checking for Triggers</h2>

      <p>
        Here's how to check if a machine should generate a lead:
      </p>

      <pre>
        <code>{`function checkMachineTriggers(machine) {
  const leads = [];
  
  // Check mileage
  if (machine.hours >= 10000) {
    leads.push({ code: 'M-10000', priority: 'standard' });
  }
  
  // Check age
  const age = new Date().getFullYear() - machine.yearManufactured;
  if (age >= 5) {
    leads.push({ code: 'A-5Y', priority: 'standard' });
  }
  
  // Check fault codes
  machine.faultCodes.forEach(fault => {
    if (fault.severity === 'red') {
      leads.push({ 
        code: \`FC-R-\${fault.code}\`, 
        priority: 'critical' 
      });
    }
  });
  
  return leads;
}`}</code>
      </pre>

      <h2>Next Steps</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Review <strong>Data Models</strong> to understand lead and machine data structures</li>
        <li>Check <strong>API Reference</strong> for detailed trigger checking methods</li>
        <li>Configure thresholds in the <strong>Configuration</strong> section</li>
      </ul>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 my-6">
        <p className="font-semibold text-primary mb-2">🚀 Ready to Monitor Leads?</p>
        <p className="text-sm mb-0">
          You're all set! Continue to the Core Concepts section to dive deeper into trigger types and lead management.
        </p>
      </div>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
