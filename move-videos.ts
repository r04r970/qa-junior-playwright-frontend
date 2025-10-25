// move-videos.ts
import fs from 'fs';
import path from 'path';

export default async function globalTeardown() {
  const resultsDir = path.join(process.cwd(), 'test-results');
  const targetBase = path.join(resultsDir, 'videos');

  if (!fs.existsSync(resultsDir)) {
    return;
  }

  // cria pastas de destino
  const successDir = path.join(targetBase, 'success');
  const errorDir = path.join(targetBase, 'error');
  fs.mkdirSync(successDir, { recursive: true });
  fs.mkdirSync(errorDir, { recursive: true });

  const folders = fs.readdirSync(resultsDir);
  let moved = 0;

  for (const folder of folders) {
    const fullPath = path.join(resultsDir, folder);
    const stats = fs.lstatSync(fullPath);

    // pula pastas que não são diretórios 
    if (
      !stats.isDirectory() ||
      folder === 'videos' ||
      folder.startsWith('.') // ignora .cache ou .temp
    ) {
      continue;
    }

    // Tenta determinar o status (success/error)
    let status: 'success' | 'error' = 'error';
    const jsonPath = path.join(fullPath, 'test-result.json');

    if (fs.existsSync(jsonPath)) {
      try {
        const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        if (json.status === 'passed') status = 'success';
      } catch {}
    } else {
      status = 'success';
    }

    // Procura vídeos dentro da pasta
    const videos = fs
      .readdirSync(fullPath)
      .filter(f => f.endsWith('.webm'))
      .map(f => path.join(fullPath, f));

    for (const videoPath of videos) {
      const originalName = path.basename(fullPath);
      const safeName = originalName.replace(/[^\w\s-]/g, '_');
      const fileName = `${safeName}.webm`;

      const targetPath = path.join(
        status === 'success' ? successDir : errorDir,
        fileName
      );

      fs.renameSync(videoPath, targetPath);
      moved++;
    }

    // Remove a pasta do teste somente se ela não for "videos"
    try {
      fs.rmSync(fullPath, { recursive: true, force: true });
    } catch (err) {
      console.error(`Erro ao remover pasta ${fullPath}:`, err);
    }
  }
}