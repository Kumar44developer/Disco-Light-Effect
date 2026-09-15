# 🪩 Disco Light Color Effect

An animated, browser-based disco lighting simulator built with pure HTML, CSS, and vanilla JavaScript. The project features a pill-shaped 6-bulb LED light fixture with synchronized ambient room lighting that dynamically shifts in sync with each active glowing bulb.

---

## Features

- **Sequential LED Lighting Loop**: Iterates through a 6-stage neon light sequence with automated reset.
- **Synchronized Ambient Background**: Dynamically extracts the active bulb's CSS variable color and applies it to the entire page background.
- **Vibrant Neon Glow Halos**: Employs multi-spread `box-shadow` effects driven by scoped CSS custom properties (`--light-color`).
- **Smooth Color Interpolation**: Uses CSS easing transitions (`all 0.2s ease`) for fluid illumination changes.
- **Minimalist Clean UI**: Styled with a rounded dark fixture enclosure and centered layout.
- **Zero Dependencies**: Pure native web implementation without frameworks, build steps, or canvas dependencies.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Fixture container and individual light node markup |
| CSS3 | Flexbox centering, scoped CSS custom properties, neon box-shadow glows, and color transitions |
| JavaScript (ES6) | `setInterval` animation timing, `getComputedStyle` CSS variable extraction, and DOM class state toggling |

---

## Project Structure

```
Disco-Light-Effect/
├── index.html       # Fixture markup containing the 6 light elements
├── style.css        # Layout, pill housing styling, neon glow effects, and color variables
├── app.js           # Sequence loop, DOM class toggling, and background sync logic
└── README.md        # Project documentation
```

---

## Color Sequence Palette

| Light | Selector | Color Name | CSS Variable Value |
| --- | --- | --- | --- |
| **Light 1** | `.Light1` | Neon Cyan | `#00FFFC` |
| **Light 2** | `.Light2` | Magenta / Pink | `#FC00FF` |
| **Light 3** | `.Light3` | Electric Yellow | `#fffc00` |
| **Light 4** | `.Light4` | Bright Green | `green` |
| **Light 5** | `.Light5` | Vivid Orange | `orange` |
| **Light 6** | `.Light6` | Deep Purple | `purple` |

---

## How It Works

1. **Scoped Variables (`style.css`)**: Each `.light` element defines its unique color via `--light-color`.
2. **Animation Loop (`app.js`)**: A `setInterval` timer triggers `changeColor()` every 1,000ms.
3. **State & Glow Management**:
   - Removes `.active` from the previous bulb.
   - Reads the active bulb's color at runtime using `getComputedStyle(lights[active]).getPropertyValue('--light-color')`.
   - Sets `body.style.backgroundColor` to the active color.
   - Applies `.active` to illuminate the current bulb with background color and a 25px glowing box-shadow.
4. **Sequence Reset**: Upon reaching the final bulb, a 900ms `setTimeout` clears the active state and resets the index to 0.

---

## Getting Started

No build tools, package managers, or server configurations are required.

### 1. Clone the repository

```bash
git clone https://github.com/Kumar44developer/Disco-Light-Effect.git
```

### 2. Launch the application

Open `index.html` directly in any web browser, or serve it using an extension like VS Code Live Server.

---

## Customization

- **Adjust Flash Speed**: Modify the interval delay in `app.js` (currently `1000` ms) to speed up or slow down the sequence:
  ```javascript
  setInterval(() => {
      changeColor();
  }, 500); // 500ms for faster strobe effect
  ```
- **Change Neon Colors**: Edit the `--light-color` CSS properties in `style.css` for any `.Light1` through `.Light6` selector.
- **Add More Lights**: Add additional `<div class="light LightN"></div>` elements in `index.html` and define `--light-color` in `style.css`. The JavaScript automatically adapts to `lights.length`.

---

## Author

**Kumar44developer** — [GitHub Profile](https://github.com/Kumar44developer)
