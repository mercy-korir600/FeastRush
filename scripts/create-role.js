import fs from "fs";
import path from "path";

const roleName = process.argv[2];

if (!roleName) {
  console.error("❌ Please provide a role name.\nUsage: npm run create:role <name>");
  process.exit(1);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const roleDir = path.join("app", roleName);
const folders = ["components", "data", "hooks", "types", "(features)"];
const pageFile = path.join(roleDir, "page.tsx");
const layoutFile = path.join(roleDir, "layout.tsx");

if (!fs.existsSync(roleDir)) {
  fs.mkdirSync(roleDir, { recursive: true });
  console.log(` Created: ${roleDir}`);
} else {
  console.log(` Role "${roleName}" already exists.`);
  process.exit(1);
}

folders.forEach((folder) => {
  const folderPath = path.join(roleDir, folder);
  fs.mkdirSync(folderPath);
  console.log(`Created: ${folderPath}`);
});

const layoutContent = `
export default function ${capitalize(roleName)}Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="text-xl font-semibold capitalize">${roleName} Dashboard</h1>
      </header>

      <main className="flex-1 p-6">
        {children}
      </main>
    </section>
  );
}
`;

fs.writeFileSync(layoutFile, layoutContent.trim());
console.log(` Created: ${layoutFile}`);

const pageContent = `
export default function ${capitalize(roleName)}Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">${capitalize(roleName)} Home</h1>
      <p>Welcome to the ${roleName} dashboard.</p>
    </div>
  );
}
`;

fs.writeFileSync(pageFile, pageContent.trim());
console.log(`Created: ${pageFile}`);

