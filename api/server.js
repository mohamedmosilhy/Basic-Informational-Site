import fs from "fs";
import path from "path";

export default function handler(req, res) {
  let file = "404.html";

  if (req.url === "/") file = "index.html";
  else if (req.url === "/about") file = "about.html";
  else if (req.url === "/contact-me") file = "contact-me.html";
  else if (req.url === "/styles.css") file = "styles.css";

  const filePath = path.join(process.cwd(), file);
  const ext = path.extname(filePath);

  let type = "text/html";
  if (ext === ".css") type = "text/css";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return fs.readFile(path.join(process.cwd(), "404.html"), (_, nf) => {
        res.status(404).send(nf.toString());
      });
    }
    res.setHeader("Content-Type", type);
    res.status(200).send(data.toString());
  });
}
