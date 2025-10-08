import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function ApiReference() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <PageNavigation currentPath={location.pathname} position="top" />
      
      <h1>API Reference</h1>
      
      <p>
        Complete reference for all available API methods, including parameters, return values,
        and usage examples.
      </p>

      <h2>Authentication API</h2>

      <h3>login()</h3>

      <p>
        Authenticates a user with email and password.
      </p>

      <pre>
        <code>{`async function login(email: string, password: string): Promise<AuthResponse>

// Parameters:
//   email: string - User's email address
//   password: string - User's password
//
// Returns: Promise<AuthResponse>
//   - token: string - JWT authentication token
//   - user: User - User object
//   - expiresAt: Date - Token expiration time

// Example:
try {
  const response = await login('user@example.com', 'password123');
  console.log('Logged in:', response.user);
  localStorage.setItem('token', response.token);
} catch (error) {
  console.error('Login failed:', error.message);
}`}</code>
      </pre>

      <h3>logout()</h3>

      <p>
        Logs out the current user and invalidates their token.
      </p>

      <pre>
        <code>{`async function logout(): Promise<void>

// Example:
await logout();
localStorage.removeItem('token');
console.log('User logged out');`}</code>
      </pre>

      <h2>Data API</h2>

      <h3>fetchData()</h3>

      <p>
        Retrieves data from the specified endpoint.
      </p>

      <pre>
        <code>{`async function fetchData<T>(
  endpoint: string,
  options?: RequestOptions
): Promise<T>

// Parameters:
//   endpoint: string - API endpoint path
//   options?: RequestOptions - Optional request configuration
//     - method: 'GET' | 'POST' | 'PUT' | 'DELETE'
//     - headers: Record<string, string>
//     - body: any
//
// Returns: Promise<T> - Parsed response data

// Example:
const users = await fetchData<User[]>('/api/users', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});`}</code>
      </pre>

      <h3>createRecord()</h3>

      <p>
        Creates a new record in the database.
      </p>

      <pre>
        <code>{`async function createRecord<T>(
  collection: string,
  data: Partial<T>
): Promise<T>

// Parameters:
//   collection: string - Collection/table name
//   data: Partial<T> - Record data
//
// Returns: Promise<T> - Created record with generated fields

// Example:
const newProject = await createRecord<Project>('projects', {
  name: 'My Project',
  description: 'A great project',
  ownerId: currentUser.id,
  status: 'active',
  tags: ['important']
});

console.log('Created project:', newProject.id);`}</code>
      </pre>

      <h2>Utility Functions</h2>

      <h3>formatDate()</h3>

      <pre>
        <code>{`function formatDate(date: Date, format: string): string

// Parameters:
//   date: Date - Date object to format
//   format: string - Format string (e.g., 'YYYY-MM-DD')
//
// Returns: string - Formatted date string

// Example:
const formatted = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
console.log(formatted); // "2025-10-08 14:30:00"`}</code>
      </pre>

      <h3>debounce()</h3>

      <pre>
        <code>{`function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void

// Parameters:
//   func: T - Function to debounce
//   wait: number - Delay in milliseconds
//
// Returns: Debounced function

// Example:
const handleSearch = debounce((query: string) => {
  console.log('Searching for:', query);
  // Perform search
}, 300);

input.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});`}</code>
      </pre>

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 my-6">
        <p className="font-semibold text-accent mb-2">📚 More APIs</p>
        <p className="text-sm mb-0">
          This is a subset of available APIs. Check the Configuration section for advanced features
          and customization options.
        </p>
      </div>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
