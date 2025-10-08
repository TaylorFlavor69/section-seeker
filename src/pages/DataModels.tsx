import { useLocation } from "react-router-dom";
import { PageNavigation } from "@/components/PageNavigation";

export default function DataModels() {
  const location = useLocation();
  
  return (
    <article className="prose prose-slate max-w-none">
      <h1>Data Models</h1>
      
      <p>
        Understanding data models is essential for building robust applications. This section covers
        data structures, relationships, and validation patterns.
      </p>

      <h2>Core Models</h2>

      <h3>User Model</h3>

      <p>
        Represents a user entity in the system.
      </p>

      <pre>
        <code>{`interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  updatedAt: Date;
}

class UserModel {
  static validate(user: Partial<User>): boolean {
    if (!user.email || !this.isValidEmail(user.email)) {
      throw new Error('Invalid email address');
    }
    if (!user.firstName || !user.lastName) {
      throw new Error('First and last name are required');
    }
    return true;
  }

  static isValidEmail(email: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }
}`}</code>
      </pre>

      <h3>Project Model</h3>

      <p>
        Represents a project with associated metadata and relationships.
      </p>

      <pre>
        <code>{`interface Project {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  status: 'active' | 'archived' | 'deleted';
  tags: string[];
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

class ProjectModel {
  static create(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) {
    return {
      ...data,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  static addTag(project: Project, tag: string): Project {
    if (!project.tags.includes(tag)) {
      return {
        ...project,
        tags: [...project.tags, tag],
        updatedAt: new Date(),
      };
    }
    return project;
  }
}`}</code>
      </pre>

      <h2>Relationships</h2>

      <p>
        Models often have relationships with each other:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>One-to-Many:</strong> A user can own many projects</li>
        <li><strong>Many-to-Many:</strong> Projects can have many collaborators, users can collaborate on many projects</li>
      </ul>

      <pre>
        <code>{`interface ProjectCollaborator {
  projectId: string;
  userId: string;
  role: 'owner' | 'editor' | 'viewer';
  joinedAt: Date;
}

class RelationshipModel {
  static async getUserProjects(userId: string): Promise<Project[]> {
    const collaborations = await db.query(
      'SELECT * FROM project_collaborators WHERE userId = ?',
      [userId]
    );
    
    return Promise.all(
      collaborations.map(c => 
        db.query('SELECT * FROM projects WHERE id = ?', [c.projectId])
      )
    );
  }
}`}</code>
      </pre>

      <h2>Validation Patterns</h2>

      <p>
        Always validate data before persisting:
      </p>

      <pre>
        <code>{`const ValidationRules = {
  required: (value: any) => {
    if (value === null || value === undefined || value === '') {
      throw new Error('This field is required');
    }
  },
  
  minLength: (value: string, min: number) => {
    if (value.length < min) {
      throw new Error(\`Minimum length is \${min} characters\`);
    }
  },
  
  maxLength: (value: string, max: number) => {
    if (value.length > max) {
      throw new Error(\`Maximum length is \${max} characters\`);
    }
  },
};

// Usage
ValidationRules.required(user.email);
ValidationRules.minLength(user.password, 8);`}</code>
      </pre>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-6">
        <p className="font-semibold text-primary mb-2">💾 Database Tip</p>
        <p className="text-sm mb-0">
          Always use prepared statements or parameterized queries to prevent SQL injection attacks.
        </p>
      </div>

      <PageNavigation currentPath={location.pathname} />
    </article>
  );
}
