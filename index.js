module.exports = {
  branches: ["main", "master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "feat",
              section: "Features",
              hidden: false,
            },
            {
              type: "fix",
              section: "Bug Fixes",
              hidden: false,
            },
            {
              type: "docs",
              section: "Documentation",
              hidden: false,
            },
            {
              type: "test",
              section: "Tests",
              hidden: false,
            },
          ],
        },
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
}
