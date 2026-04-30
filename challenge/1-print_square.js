#!/usr/bin/node
const size = process.argv[2];

if (size === undefined || isNaN(size)) {
  process.exit();
}

for (let i = 0; i < size; i++) {
  console.log("#".repeat(size));
}
