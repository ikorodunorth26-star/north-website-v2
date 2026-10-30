from pathlib import Path

from PIL import Image

src = Path(__file__).resolve().parents[1] / ".tmp-nulge-drive"
dest = Path(__file__).resolve().parents[1] / "public" / "images" / "government" / "nulge"
dest.mkdir(parents=True, exist_ok=True)

# Drive filename -> website slug.webp (matched by position from READ ME)
mapping = {
    "Chairman.jpg": "adebayo-femi.webp",
    "Vice Chairman.jpg": "ogunlaru-jamiu.webp",
    "Secretary.jpg": "sanni-moshood.webp",
    "Treasurer.jpg": "adeniran-isiaka.webp",
    "Woman Leader.jpg": "ajisebutu-mulikat.webp",
    "The Young.jpg": "oyeniran-quam.webp",
    "Asst Secretary.jpg": "awobajo-hafeez.webp",
    "Budget Rep.jpg": "ajirotutu-ramat.webp",
    "Environment Rep.jpg": "omitade-muminat.webp",
    "Trustee.jpg": "olatunji-babatunde.webp",
    "Agric Rep.jpg": "ogunfodunrin-olawale.webp",
    "HR Rep.jpg": "aniooja-saheed.webp",
    "Area Officer Agbala.jpg": "masha-aluroko-m.webp",
    "Area Officer 2.jpg": "okhidre-olayinka.webp",
    "Area Officer 3.jpg": "osilesi-bukola.webp",
    "Marriage Registrar.jpg": "adeniji-husenat-mopelola.webp",
}

for src_name, out_name in mapping.items():
    path = src / src_name
    if not path.exists():
        raise SystemExit(f"missing {src_name}")
    img = Image.open(path).convert("RGB")
    max_edge = 1200
    width, height = img.size
    scale = min(1.0, max_edge / max(width, height))
    if scale < 1.0:
        img = img.resize(
            (int(width * scale), int(height * scale)),
            Image.Resampling.LANCZOS,
        )
    out = dest / out_name
    img.save(out, "WEBP", quality=82, method=6)
    print(f"{src_name} -> {out_name} {img.size}")

print("done", len(mapping))
