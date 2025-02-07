const obj = {
    JavaScript: { name: 'JavaScript', color: '#f1e05a', size: 6371096, count: 52 },
    HTML: { name: 'HTML', color: '#e34c26', size: 1306684, count: 51 },
    TypeScript: { name: 'TypeScript', color: '#3178c6', size: 814331, count: 47 },
    CSS: { name: 'CSS', color: '#663399', size: 337405, count: 53 },
    GLSL: { name: 'GLSL', color: '#5686a5', size: 36188, count: 26 },
    'C++': { name: 'C++', color: '#f34b7d', size: 24716, count: 1 },
    Astro: { name: 'Astro', color: '#ff5a03', size: 4509, count: 1 },
    Makefile: { name: 'Makefile', color: '#427819', size: 3314, count: 1 },
    Rust: { name: 'Rust', color: '#dea584', size: 3122, count: 1 },
    Go: { name: 'Go', color: '#00ADD8', size: 2392, count: 1 },
    Python: { name: 'Python', color: '#3572A5', size: 1842, count: 1 },
    Shell: { name: 'Shell', color: '#89e051', size: 1038, count: 20 },
    Lua: { name: 'Lua', color: '#000080', size: 424, count: 1 },
    Assembly: { name: 'Assembly', color: '#6E4C13', size: 208, count: 1 },
    'Objective-C': { name: 'Objective-C', color: '#438eff', size: 192, count: 1 },
    'C#': { name: 'C#', color: '#178600', size: 165, count: 1 },
    Scala: { name: 'Scala', color: '#c22d40', size: 114, count: 1 },
    Java: { name: 'Java', color: '#b07219', size: 109, count: 1 },
    Ada: { name: 'Ada', color: '#02f88c', size: 100, count: 1 },
    'Visual Basic .NET': { name: 'Visual Basic .NET', color: '#945db7', size: 86, count: 1 },
    Haxe: { name: 'Haxe', color: '#df7900', size: 83, count: 1 },
    D: { name: 'D', color: '#ba595e', size: 72, count: 1 }
}

console.log('obj.js is loaded', obj);

let count = 0;
let size = 0;

for (const key in obj) {
    count += obj[key].count;
    size += obj[key].size;
}

console.log('Total count:', count);
console.log('Total size:', size);