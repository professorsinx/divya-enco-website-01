#!/usr/bin/env python3
"""Convert jpg/jpeg images in the workspace Images folder into WebP.

Usage:
    python scripts/convert_images_to_webp.py
    python scripts/convert_images_to_webp.py --source Images --quality 82 --overwrite
    python scripts/convert_images_to_webp.py --source Images --output Images/webp --quality 82
"""

from __future__ import annotations

import argparse
from pathlib import Path

try:
    from PIL import Image
except ImportError as exc:
    raise SystemExit("Pillow is required. Install it with: pip install pillow") from exc


def convert(source: Path, output: Path | None = None, overwrite: bool = False, quality: int = 82) -> list[Path]:
    """Convert all JPG/JPEG files in source folder to WebP in a dedicated folder.

    Returns the list of generated WebP files.
    """
    source = source.resolve()
    if not source.exists():
        raise FileNotFoundError(f"Source folder does not exist: {source}")

    output = (output or source / "webp").resolve()
    output.mkdir(parents=True, exist_ok=True)

    converted: list[Path] = []
    image_paths = sorted(source.rglob("*.jpg")) + sorted(source.rglob("*.jpeg"))

    for image_path in image_paths:
        relative_name = image_path.name
        webp_path = output / relative_name.replace(image_path.suffix, ".webp")
        if webp_path.exists() and not overwrite:
            print(f"Skipped existing file: {webp_path.name}")
            continue

        try:
            with Image.open(image_path) as img:
                # Web-friendly images in the gallery should be RGB-oriented and compressed
                rgb = img.convert("RGB")
                rgb.save(webp_path, format="WEBP", quality=quality, method=6)
        except Exception as exc:
            print(f"Failed to convert {image_path}: {exc}")
            continue

        converted.append(webp_path)
        print(f"Converted: {image_path} -> {webp_path}")

    return converted


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert JPG/JPEG images in a folder to WebP.")
    parser.add_argument("--source", default="Images", help="Folder containing JPG/JPEG images.")
    parser.add_argument("--output", default=None, help="Folder that will receive the generated WebP files.")
    parser.add_argument("--quality", type=int, default=82, help="WebP quality from 1 to 100.")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing WebP files.")
    args = parser.parse_args()

    source = Path(args.source)
    output = Path(args.output) if args.output else None
    converted = convert(source, output=output, overwrite=args.overwrite, quality=max(1, min(100, args.quality)))
    print(f"Finished: {len(converted)} image(s) converted to WebP.")


if __name__ == "__main__":
    main()
