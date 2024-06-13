import fs from 'fs-extra';
import archiver from 'archiver';

// Define el directorio de origen y el archivo zip de destino
const sourceDir = './build'; // Ruta de tu directorio
const outputDir = './build-pack'; // Ruta de tu directorio archivo zip
const outputZip = './build-pack/app.zip'; // Ruta de tu archivo zip

// Función para empaquetar el directorio
async function zipDirectory(source, out) {
  const archive = archiver('zip', {
    zlib: { level: 1 } // Nivel de compresión 1 
  });

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const stream = fs.createWriteStream(out);

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

// Ejecutar la función de empaquetado
zipDirectory(sourceDir, outputZip)
  .then(() => console.log('Directorio empaquetado exitosamente.'))
  .catch(err => console.error('Error al empaquetar el directorio:', err));