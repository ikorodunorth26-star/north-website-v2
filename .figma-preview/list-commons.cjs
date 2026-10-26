const fs = require("fs");
const path = "C:/Users/THOMPSON/.cursor/projects/c-Users-THOMPSON-Documents-GitHub-north-website-v2/agent-tools/19adfd6e-692b-488f-a38f-4aec6540cbe5.txt";
const j = JSON.parse(fs.readFileSync(path, "utf8"));
for (const p of Object.values(j.query.pages)) console.log(p.title);
