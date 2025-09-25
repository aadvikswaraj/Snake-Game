# 🐍 Aadvik Snake Game

A classic Snake Game implementation built with vanilla HTML, CSS, and JavaScript. Control the snake to eat food, grow longer, and achieve the highest score possible!

## 🎮 Game Features

- **Classic Snake Gameplay**: Navigate the snake around the board to eat food
- **Score Tracking**: Real-time score display that increases with each food consumed
- **Smooth Animations**: CSS transitions for fluid snake movement
- **Collision Detection**: Game ends when snake hits walls or itself
- **Responsive Controls**: Arrow key navigation with direction restrictions
- **Auto-restart**: Game automatically restarts after game over

## 🕹️ How to Play

1. **Start the Game**: Press any arrow key to begin
2. **Control the Snake**: 
   - ↑ Arrow Key: Move Up
   - ↓ Arrow Key: Move Down
   - ← Arrow Key: Move Left
   - → Arrow Key: Move Right
3. **Objective**: Guide the snake to eat the red food dots
4. **Growth**: Snake grows longer each time it eats food
5. **Score**: Earn 1 point for each food consumed
6. **Game Over**: Avoid hitting walls or the snake's own body

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Running the Game
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Press any arrow key to start playing!

### File Structure
```
Snake Game/
│
├── index.html      # Main HTML structure
├── style.css       # Game styling and layout
├── logic.js        # Game logic and mechanics
└── README.md       # Project documentation
```

## 🛠️ Technical Implementation

### Core Components

#### HTML Structure (`index.html`)
- Clean, semantic HTML layout
- Game board container
- Score display element
- Title and branding

#### Styling (`style.css`)
- Responsive game board (550x550px)
- Snake body parts with distinct head styling
- Food styling with visual indicators
- Purple gradient theme with contrasting colors
- Smooth CSS transitions for movement

#### Game Logic (`logic.js`)
- **Snake Representation**: Array of body segments with position coordinates
- **Movement System**: Grid-based movement (5% increments)
- **Food Generation**: Random placement avoiding snake body
- **Collision Detection**: Wall boundaries and self-collision
- **Game Loop**: 150ms interval for smooth gameplay

### Key Features Implementation

#### Snake Movement
- Grid-based coordinate system using percentages
- Direction validation prevents immediate reversal
- Body segments follow head in sequence

#### Food System
- Random generation on 18x18 grid positions
- Collision detection with snake body
- Automatic regeneration after consumption

#### Game States
- **Idle**: Waiting for first keypress
- **Playing**: Active game loop running
- **Game Over**: Collision detected, game stops

## 🎨 Visual Design

- **Color Scheme**: Purple gradient background with contrasting elements
- **Snake Head**: Golden yellow with rounded corners
- **Snake Body**: Wheat-colored circular segments
- **Food**: Red circular dots
- **Board**: Purple background with black border

## 🎯 Game Mechanics

### Scoring System
- +1 point per food consumed
- Score displayed in real-time
- Final score shown on game over

### Difficulty
- Fixed speed (150ms per move)
- Increasing difficulty as snake grows longer
- Smaller safe spaces for food generation

### Controls
- **Arrow Keys Only**: Simple, intuitive controls
- **Direction Lock**: Cannot reverse into snake body
- **Game Start**: Any arrow key begins the game

## 🐛 Known Features

- Smooth collision detection
- Proper food placement (never on snake body)
- Automatic game restart functionality
- Score persistence during gameplay

## 🔧 Customization Options

You can easily modify the game by adjusting these parameters in `logic.js`:

```javascript
// Game speed (lower = faster)
interval = setInterval(gameEngine, 150);

// Snake starting position and size
const snakeBodyPositions = [
    {top: 45, left: 45, part:'head', DOM: false},
    {top: 40, left: 45, part:'body', DOM: false},
    {top: 35, left: 45, part:'body', DOM: false}
];

// Movement increment (affects game grid)
snakeBodyPositions[0].top += 5; // Adjust for different grid sizes
```

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## 👨‍💻 Author

**Aadvik Swaraj**
- GitHub: [@aadvikswaraj](https://github.com/aadvikswaraj)

## 🙏 Acknowledgments

- Inspired by the classic Nokia Snake game
- Built with modern web technologies
- Designed for educational purposes and fun!

---

**Enjoy playing the Snake Game! 🐍🎮**