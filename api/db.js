import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), 'server', 'db.json');
    const data = await readFile(dbPath, 'utf-8');
    const db = JSON.parse(data);

    const { collection, id } = req.query;

    if (collection && db[collection]) {
      if (id) {
        const item = db[collection].find(x => x.id === id);
        return res.status(200).json(item || {});
      }
      return res.status(200).json(db[collection]);
    }

    res.status(200).json(db);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
