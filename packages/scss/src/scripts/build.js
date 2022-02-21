const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

const getComponents = () => {
  let allComponents = [];

  const types = ["atoms", "molecules", "organisms", "utilities"];

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => {
      return {
        inputFilePath: path.resolve(`src/${type}/${file}`),
        outputFilePath: path.resolve(
          `lib/${type}/${file.slice(0, -4) + "css"}`
        ),
      };
    });

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (inputFilePath, outputFilePath) => {
  const result = sass.renderSync({
    data: fs.readFileSync(inputFilePath).toString(),
    outputStyle: "expanded", // change it to compressed later
    outFile: outputFilePath,
    includePaths: [path.resolve("src")],
  });

  fs.writeFileSync(outputFilePath, result.css.toString());
};

compile("src/_global.scss", "lib/global.css");

getComponents().forEach((component) =>
  compile(component.inputFilePath, component.outputFilePath)
);
