export default function QuickStart() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Quick Start Guide</h1>
      
      <p>
        Get up and running quickly with this step-by-step guide to using our platform.
      </p>

      <h2>Installation</h2>
      
      <p>
        Begin by installing the required dependencies:
      </p>

      <pre>
        <code>{`npm install @platform/core
# or
yarn add @platform/core`}</code>
      </pre>

      <h2>Basic Setup</h2>

      <p>
        Create your first configuration file:
      </p>

      <pre>
        <code>{`// config.js
export default {
  apiKey: 'your-api-key',
  environment: 'development',
  features: {
    auth: true,
    analytics: true
  }
};`}</code>
      </pre>

      <h2>Your First Component</h2>

      <p>
        Here's a simple example to get you started:
      </p>

      <pre>
        <code>{`import { Component } from '@platform/core';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return \`<button onclick="this.increment()">
      Count: \${this.state.count}
    </button>\`;
  }
}

export default MyComponent;`}</code>
      </pre>

      <h2>Next Steps</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Explore the Components section for advanced patterns</li>
        <li>Review Data Models to understand the data structure</li>
        <li>Check out the API Reference for detailed method documentation</li>
      </ul>

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 my-6">
        <p className="font-semibold text-accent mb-2">🚀 Ready to Build?</p>
        <p className="text-sm mb-0">
          You're all set! Continue to the Core Concepts section to dive deeper into the platform.
        </p>
      </div>
    </article>
  );
}
