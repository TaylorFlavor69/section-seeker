import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function Components() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Components</h1>
      
      <p>
        Components are the building blocks of your application. Learn about different component
        types and their implementation patterns.
      </p>

      <h2>Component Types</h2>

      <h3>Base Component</h3>

      <p>
        The foundation for all components. Provides lifecycle methods and state management.
      </p>

      <pre>
        <code>{`class BaseComponent {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  componentDidMount() {
    // Called after component is mounted
  }

  componentWillUnmount() {
    // Cleanup before component is removed
  }

  render() {
    // Override this method
    return '';
  }
}`}</code>
      </pre>

      <h3>Functional Component</h3>

      <p>
        Lightweight components for simple use cases without state management.
      </p>

      <pre>
        <code>{`const FunctionalComponent = (props) => {
  return \`
    <div class="component">
      <h2>\${props.title}</h2>
      <p>\${props.content}</p>
    </div>
  \`;
};`}</code>
      </pre>

      <h2>Props and State</h2>

      <p>
        Understanding the difference between props and state is crucial:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><code>props</code> - Immutable data passed from parent components</li>
        <li><code>state</code> - Mutable data managed within the component</li>
      </ul>

      <pre>
        <code>{`class Counter extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount || 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return \`
      <div>
        <p>Count: \${this.state.count}</p>
        <button onclick="this.increment()">Increment</button>
      </div>
    \`;
  }
}`}</code>
      </pre>

      <h2>Best Practices</h2>

      <div className="bg-muted rounded-lg p-4 my-4 space-y-2">
        <p className="font-semibold mb-2">✓ Do</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Keep components small and focused</li>
          <li>Use functional components when possible</li>
          <li>Implement proper cleanup in componentWillUnmount</li>
        </ul>
      </div>

      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-4 space-y-2">
        <p className="font-semibold text-destructive mb-2">✗ Don't</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Mutate state directly - always use setState()</li>
          <li>Create circular dependencies between components</li>
          <li>Forget to handle edge cases in render methods</li>
        </ul>
      </div>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
