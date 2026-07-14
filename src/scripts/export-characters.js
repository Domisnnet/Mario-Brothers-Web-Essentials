const fs = require("fs");
const path = require("path");
const Jimp = require("jimp");

const inputPath = path.join(
  __dirname,
  "..",
  "imagens",
  "super-mario-chars.png",
);
const outputDir = path.join(__dirname, "..", "imagens", "characters");

const characters = [
  { name: "mario", cx: 0.28, cy: 0.52, width: 0.24, height: 0.4 },
  { name: "luigi", cx: 0.06, cy: 0.52, width: 0.24, height: 0.4 },
  { name: "peach", cx: 0.5, cy: 0.36, width: 0.24, height: 0.4 },
  { name: "toad", cx: 0.82, cy: 0.6, width: 0.24, height: 0.4 },
];

(async () => {
  try {
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Arquivo não encontrado: ${inputPath}`);
    }

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const image = await Jimp.read(inputPath);
    const { width, height } = image.bitmap;

    for (const char of characters) {
      const cropWidth = Math.round(width * char.width);
      const cropHeight = Math.round(height * char.height);
      const x = Math.max(0, Math.round(width * char.cx - cropWidth / 2));
      const y = Math.max(0, Math.round(height * char.cy - cropHeight / 2));
      const cropped = image.clone().crop(x, y, cropWidth, cropHeight);

      const size = Math.max(cropWidth, cropHeight);
      const square = new Jimp(size, size, 0x00000000);
      square.composite(
        cropped,
        Math.round((size - cropWidth) / 2),
        Math.round((size - cropHeight) / 2),
      );

      const outputPath = path.join(outputDir, `${char.name}.png`);
      await square.writeAsync(outputPath);
      console.log(`Gerado: ${outputPath}`);
    }

    console.log("Exportação concluída. Confira a pasta imagens/characters.");
  } catch (error) {
    console.error("Erro ao exportar imagens:", error.message);
    process.exit(1);
  }
})();
