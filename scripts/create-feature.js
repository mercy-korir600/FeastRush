import fs from "fs";
import path from "path";

const roleName = process.argv[2];
const featureName = process.argv[3];

if (!roleName || !featureName) {
  console.error(
    " Please provide both role and feature name.\nUsage: npm run create:feature <role> <feature>"
  );
  process.exit(1);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const baseDir = path.join("app", roleName, "(features)", featureName);
const folders = ["components", "data", "hooks", "types"];
const pageFile = path.join(baseDir, "page.tsx");

const rolePath = path.join("app", roleName, "(features)");
if (!fs.existsSync(rolePath)) {
  console.error(
    `Role "${roleName}" does not exist. Please create it first using "npm run create:role ${roleName}".`
  );
  process.exit(1);
}

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
  console.log(`Created: ${baseDir}`);
} else {
  console.log(`Feature "${featureName}" already exists under ${roleName}.`);
  process.exit(1);
}

folders.forEach((folder) => {
  const folderPath = path.join(baseDir, folder);
  fs.mkdirSync(folderPath);
  console.log(`Created: ${folderPath}`);
});

const pageContent = `
export default function ${capitalize(featureName)}Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">${capitalize(
        featureName
      )} Feature</h1>
      <p>This is the ${featureName} feature page under the ${roleName} role.</p>
    </div>
  );
}
`;
fs.writeFileSync(pageFile, pageContent.trim());
console.log(`Created: ${pageFile}`);

console.log("Feature setup complete!");