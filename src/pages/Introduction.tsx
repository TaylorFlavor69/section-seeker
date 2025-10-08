import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function Introduction() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <PageNavigation currentPath={location.pathname} />
      
      <h1>Introduction to the Knowledge Base</h1>
      
      <p>
        Welcome to our comprehensive knowledge base. This resource is designed to provide you with
        quick access to code definitions, technical documentation, and best practices.
      </p>

      <h2>What You'll Find Here</h2>
      
      <p>
        This knowledge base contains detailed information about:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Component architecture and implementation patterns</li>
        <li>Data model definitions and relationships</li>
        <li>API references with code examples</li>
        <li>Configuration guidelines and best practices</li>
      </ul>

      <h2>Navigation</h2>

      <p>
        Use the sidebar on the left to navigate between different sections. Each section contains
        detailed documentation with code examples and practical guidance.
      </p>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-6">
        <p className="font-semibold text-primary mb-2">💡 Pro Tip</p>
        <p className="text-sm mb-0">
          You can collapse the sidebar using the menu button in the header for a distraction-free
          reading experience.
        </p>
      </div>

      <h2>Code Examples</h2>

      <p>
        Throughout this documentation, you'll find code examples like this:
      </p>

      <pre>
        <code>{`function example() {
  return "Hello, Knowledge Base!";
}`}</code>
      </pre>

      <p>
        Get started by exploring the sections in the sidebar, beginning with the Quick Start guide.
      </p>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
