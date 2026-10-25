from PIL import Image, ImageChops, ImageDraw, ImageOps

src = Image.open(r"public/images/home/lagos-aerial-waterside.webp").convert("RGB")
w, h = src.size
scale = max(390 / w, 804 / h)
nw, nh = int(w * scale), int(h * scale)
im = src.resize((nw, nh), Image.Resampling.LANCZOS)
left, top = (nw - 390) // 2, (nh - 804) // 2
im = im.crop((left, top, left + 390, top + 804))
ref = Image.open(
    r"C:\Users\THOMPSON\.cursor\projects\c-Users-THOMPSON-Documents-GitHub-north-website-v2\assets\c__Users_THOMPSON_AppData_Roaming_Cursor_User_workspaceStorage_1821194d1fb482e5c90fa1e401e62e89_images_Welcome-4104d6bb-e721-4b67-9349-04abbd4ceb2a.png"
).convert("RGB").resize((390, 804))


def hexrgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def make_grad(stops):
    parsed = [(p, hexrgb(c)) for p, c in stops]
    g = Image.new("RGB", (390, 804))
    draw = ImageDraw.Draw(g)
    for y in range(804):
        t = y / 803
        col = parsed[-1][1]
        for i in range(len(parsed) - 1):
            p0, c0 = parsed[i]
            p1, c1 = parsed[i + 1]
            if p0 <= t <= p1:
                u = 0 if p1 == p0 else (t - p0) / (p1 - p0)
                col = lerp(c0, c1, u)
                break
        draw.line([(0, y), (389, y)], fill=col)
    return g


gray = ImageOps.grayscale(im)
duotone = ImageOps.colorize(gray, black="#102f29", white="#d7e4e0", mid="#6d948b")
fade = make_grad([(0, "#ffffff"), (0.35, "#e7f0ed"), (0.62, "#9fb8b0"), (0.82, "#4d756b"), (1, "#21483e")])
duo_fade = ImageChops.multiply(duotone, fade)
soft = Image.blend(duotone, duo_fade, 0.72)

images = [("duotone", duotone), ("duo-fade", duo_fade), ("soft", soft)]

sheet = Image.new("RGB", (390 * (len(images) + 1), 804))
sheet.paste(ref, (0, 0))
print("yfrac ref", *[name for name, _ in images])
for index, (name, graded) in enumerate(images, start=1):
    sheet.paste(graded, (index * 390, 0))
    print(name)

for yf in (0.12, 0.28, 0.44, 0.60, 0.76, 0.92):
    y = int(804 * yf)
    x = 300
    row = [f"{yf:.2f}", "%02x%02x%02x" % ref.getpixel((x, y))]
    for index in range(1, len(images) + 1):
        row.append("%02x%02x%02x" % sheet.getpixel((index * 390 + x, y)))
    print(" ".join(row))

sheet.save(r"public/images/home/_hero-mobile-grade.png", optimize=True)
print("saved")
