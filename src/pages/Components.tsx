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

      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">🔧</span>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">Code: M-XXXX</span>
      </div>

      <p>
        Mileage triggers activate when equipment reaches specific operating hour thresholds.
        These indicate maintenance intervals or potential replacement timing.
      </p>

      <pre>
        <code>{`interface MileageTrigger {
  code: string;           // e.g., "M-10000"
  machineId: string;
  currentHours: number;
  threshold: number;
  type: "mileage";
  priority: "standard";
  recommendations: {
    service: string[];
    parts: string[];
    replacement: boolean;
  };
}

// Example
const lead = {
  code: "M-10000",
  machineId: "MCH-2024-001",
  currentHours: 10250,
  threshold: 10000,
  type: "mileage",
  priority: "standard",
  recommendations: {
    service: ["Major service required", "Oil change", "Filter replacement"],
    parts: ["Air filter", "Oil filter", "Hydraulic fluid"],
    replacement: false
  }
};`}</code>
      </pre>

      <h2>Age-Based Triggers</h2>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">📅</span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 rounded-full text-sm font-medium">Code: A-XY</span>
      </div>

      <p>
        Age triggers fire when machines reach specific age milestones, indicating potential
        upgrade or replacement opportunities.
      </p>

      <pre>
        <code>{`interface AgeTrigger {
  code: string;           // e.g., "A-5Y"
  machineId: string;
  age: number;            // in years
  threshold: number;
  type: "age";
  priority: "standard";
  recommendations: {
    upgrade: boolean;
    trade_in_value: number;
    new_models: string[];
  };
}

// Example
const lead = {
  code: "A-7Y",
  machineId: "MCH-2017-045",
  age: 7,
  threshold: 7,
  type: "age",
  priority: "standard",
  recommendations: {
    upgrade: true,
    trade_in_value: 45000,
    new_models: ["Model X 2024", "Model Y Pro"]
  }
};`}</code>
      </pre>

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
        Yellow codes indicate warnings, red codes signal critical issues.
      </p>

      <pre>
        <code>{`interface FaultCodeTrigger {
  code: string;           // e.g., "FC-R-456"
  machineId: string;
  faultCode: number;
  severity: "yellow" | "red";
  type: "fault_code";
  priority: "warning" | "critical";
  description: string;
  recommendations: {
    immediate_action: boolean;
    service_required: boolean;
    parts_needed: string[];
    estimated_downtime: string;
  };
}

// Yellow (Warning) Example
const yellowLead = {
  code: "FC-Y-123",
  machineId: "MCH-2024-001",
  faultCode: 123,
  severity: "yellow",
  type: "fault_code",
  priority: "warning",
  description: "Engine temperature sensor degraded",
  recommendations: {
    immediate_action: false,
    service_required: true,
    parts_needed: ["Temperature sensor"],
    estimated_downtime: "2 hours"
  }
};

// Red (Critical) Example
const redLead = {
  code: "FC-R-456",
  machineId: "MCH-2024-002",
  faultCode: 456,
  severity: "red",
  type: "fault_code",
  priority: "critical",
  description: "Hydraulic system failure",
  recommendations: {
    immediate_action: true,
    service_required: true,
    parts_needed: ["Hydraulic pump", "Pressure valve"],
    estimated_downtime: "1-2 days"
  }
};`}</code>
      </pre>

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
