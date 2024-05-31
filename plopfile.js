export default function (plop) {
  plop.setGenerator("function", {
    description: "Create a new function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Function name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}.ts",
        templateFile: "plop-templates/function/function.ts.hbs",
      },
      {
        type: "add",
        path: "src/{{kebabCase name}}.spec.ts",
        templateFile: "plop-templates/function/function.spec.ts.hbs",
      },
      {
        type: "append",
        path: "src/index.ts",
        template: `export * from './{{kebabCase name}}.js';\n`,
        separator: "",
      },
    ],
  });
}
