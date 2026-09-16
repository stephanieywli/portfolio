export const LIGHT_THEME = { canvas: "#f4f0e8", ink: "#000000" };
export const DARK_THEME = { canvas: "#1c1c18", ink: "#f4f0e8" };

export const applyTheme = (canvas: string, ink: string) => {
  // update html and body elements (colour-off-white to canvas; colour-ink to ink)
  for (const el of [document.documentElement, document.body]) {
    el.style.setProperty("--color-off-white", canvas);
    el.style.setProperty("--color-ink", ink);
  }

  // update bg and text with custom colours
  document.body.style.backgroundColor = canvas;
  document.body.style.color = ink;
};
