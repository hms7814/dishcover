// DOM elements
const dishImage = document.getElementById('dish-image');
const countryInput = document.getElementById('country-input');
const suggestionsContainer = document.getElementById('suggestions');
const guessBtn = document.getElementById('guess-btn');
const guessHistory = document.getElementById('guess-history');
const guessCount = document.getElementById('guess-count');
const puzzleNumber = document.getElementById('puzzle-number');
const gamesPlayed = document.getElementById('games-played');
const gamesWon = document.getElementById('games-won');
const currentStreak = document.getElementById('current-streak');
const gameOverModal = document.getElementById('game-over-modal');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const resultDish = document.getElementById('result-dish');
const dishNameLabel = document.getElementById('dish-name-label');
const resultFunFact = document.getElementById('result-fun-fact');
const resultBoxes = document.getElementById('result-boxes');
const shareBtn = document.getElementById('share-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const shareFeedback = document.getElementById('share-feedback');

// Set to a country name to override the daily puzzle (e.g. 'Peru'), or '' for normal play
const FORCE_COUNTRY = '';

// Game state
let gameState = {
  currentDate: '',
  puzzleNumber: 0,
  targetCountry: null,
  availableCountries: [],
  guesses: [],
  isComplete: false,
  isWon: false
};

// Autocomplete state
let selectedSuggestionIndex = -1;
let currentSuggestions = [];
let selectedCountry = null;

// Arrow mapping for directions
const ARROW_MAP = {
  'N': '⬆️',
  'NE': '↗️',
  'E': '➡️',
  'SE': '↘️',
  'S': '⬇️',
  'SW': '↙️',
  'W': '⬅️',
  'NW': '↖️'
};

// Get today's date string in UTC
function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

// Initialize game on load
function initializeGame() {
  const today = new Date();
  const puzzle = getDailyPuzzle(today);

  const forceCountry = FORCE_COUNTRY;

  if (forceCountry) {
    const match = COUNTRIES_DATABASE.find(c => c.name.toLowerCase() === forceCountry.toLowerCase());
    if (match) {
      gameState.currentDate = getTodayString();
      gameState.puzzleNumber = puzzle.puzzleNumber;
      gameState.targetCountry = match;
      gameState.availableCountries = puzzle.countries.some(c => c.id === match.id)
        ? puzzle.countries
        : [match, ...puzzle.countries.slice(0, 19)];
      gameState.guesses = [];
      gameState.isComplete = false;
      gameState.isWon = false;
      renderUI();
      updateStatsDisplay();
      return;
    }
  }

  // Try to load saved state
  const savedState = loadGameState();
  if (savedState && savedState.currentDate === getTodayString()) {
    // Restore saved game
    gameState = savedState;
  } else {
    // Start new game
    gameState.currentDate = getTodayString();
    gameState.puzzleNumber = puzzle.puzzleNumber;
    gameState.targetCountry = puzzle.targetCountry;
    gameState.availableCountries = puzzle.countries;
    gameState.guesses = [];
    gameState.isComplete = false;
    gameState.isWon = false;
  }

  renderUI();
  updateStatsDisplay();
}

// Render the UI
function renderUI() {
  // Update puzzle number
  puzzleNumber.textContent = 'Guess the country based on the national dish shown below';

  // Display dish image
  dishImage.src = gameState.targetCountry.imageUrl;
  dishImage.alt = `National dish of ${gameState.targetCountry.name}`;
  dishNameLabel.textContent = gameState.targetCountry.dish;

  // Render guess history
  renderGuessHistory();

  // Update guess count
  guessCount.textContent = gameState.guesses.length;

  // Disable guessing if game is complete
  if (gameState.isComplete) {
    countryInput.disabled = true;
    guessBtn.disabled = true;
    showGameOverModal();
  }
}

// Render guess history
function renderGuessHistory() {
  guessHistory.innerHTML = '';

  gameState.guesses.forEach(guess => {
    const guessItem = document.createElement('div');
    guessItem.className = 'guess-item';

    const boxes = distanceToBoxes(guess.distance);
    if (guess.distance === 0) {
      guessItem.classList.add('correct');
      guessItem.innerHTML = `
        <span class="country-name">${guess.countryName}</span>
        <span class="guess-boxes">${boxes}</span>
        <span class="guess-feedback correct-feedback">✅ Correct!</span>
      `;
    } else {
      const arrow = ARROW_MAP[guess.direction];
      guessItem.innerHTML = `
        <span class="country-name">${guess.countryName}</span>
        <span class="guess-boxes">${boxes}</span>
        <span class="guess-feedback">
          <span class="arrow">${arrow}</span>
          <span class="direction">${guess.direction}</span>
          <span class="distance">${guess.distance.toLocaleString()} km</span>
        </span>
      `;
    }

    guessHistory.appendChild(guessItem);
  });
}

// Handle guess
function handleGuess() {
  if (!selectedCountry) {
    alert('Please select a country from the suggestions!');
    return;
  }

  // Check if already guessed
  if (gameState.guesses.some(g => g.countryId === selectedCountry.id)) {
    alert('You already guessed this country!');
    return;
  }

  // Calculate distance and direction
  const distance = calculateDistance(
    selectedCountry.coordinates.lat,
    selectedCountry.coordinates.lng,
    gameState.targetCountry.coordinates.lat,
    gameState.targetCountry.coordinates.lng
  );

  let direction = '';
  let bearing = 0;

  if (distance > 0) {
    const bearingData = calculateBearing(
      selectedCountry.coordinates.lat,
      selectedCountry.coordinates.lng,
      gameState.targetCountry.coordinates.lat,
      gameState.targetCountry.coordinates.lng
    );
    direction = bearingData.cardinal;
    bearing = bearingData.degrees;
  }

  // Create guess object
  const guess = {
    countryId: selectedCountry.id,
    countryName: selectedCountry.name,
    distance: distance,
    direction: direction,
    bearing: bearing
  };

  // Add guess to state
  gameState.guesses.push(guess);

  // Reset input and autocomplete
  countryInput.value = '';
  selectedCountry = null;
  hideSuggestions();

  // Check win condition
  if (distance === 0) {
    gameState.isWon = true;
    gameState.isComplete = true;
  }

  // Check loss condition (6 guesses)
  if (gameState.guesses.length >= 6 && !gameState.isWon) {
    gameState.isComplete = true;
  }

  // Update statistics if game complete
  if (gameState.isComplete) {
    updateStatistics(gameState.isWon, gameState.guesses.length);
  }

  // Save state
  saveGameState();

  // Update UI
  renderGuessHistory();
  guessCount.textContent = gameState.guesses.length;

  // Show modal if game complete
  if (gameState.isComplete) {
    countryInput.disabled = true;
    guessBtn.disabled = true;
    setTimeout(() => showGameOverModal(), 500);
  }
}

// Show game over modal
function showGameOverModal() {
  if (gameState.isWon) {
    resultTitle.textContent = '🎉 Congratulations!';
    resultMessage.textContent = `You guessed the country in ${gameState.guesses.length} ${gameState.guesses.length === 1 ? 'try' : 'tries'}!`;
  } else {
    resultTitle.textContent = '😔 Game Over';
    resultMessage.textContent = `The correct answer was ${gameState.targetCountry.name}.`;
  }

  resultDish.textContent = `The dish was ${gameState.targetCountry.dish} from ${gameState.targetCountry.name}.`;

  if (gameState.isWon && gameState.targetCountry.funFact) {
    resultFunFact.textContent = `💡 Fun fact: ${gameState.targetCountry.funFact}`;
    resultFunFact.classList.remove('hidden');
  } else {
    resultFunFact.classList.add('hidden');
  }

  const boxLines = gameState.guesses.map(g => distanceToBoxes(g.distance)).join('\n');
  resultBoxes.textContent = boxLines;
  resultBoxes.classList.remove('hidden');

  gameOverModal.classList.remove('hidden');
}

// Close modal
function closeModal() {
  gameOverModal.classList.add('hidden');
  shareFeedback.classList.add('hidden');
}

// Convert distance to a row of 5 boxes
function distanceToBoxes(distance) {
  if (distance === 0) return '🟩🟩🟩🟩🟩';
  if (distance < 500)   return '🟩🟩🟩🟩🟨';
  if (distance < 2000)  return '🟩🟩🟩🟨🟨';
  if (distance < 5000)  return '🟩🟩🟨🟨🟨';
  if (distance < 10000) return '🟩⬜⬜⬜⬜';
  return '⬜⬜⬜⬜⬜';
}

// Share results
function shareResults() {
  let shareText = `Dishcover #${gameState.puzzleNumber} ${gameState.isWon ? '🎯' : '❌'} ${gameState.guesses.length}/6\n\n`;

  gameState.guesses.forEach(guess => {
    shareText += distanceToBoxes(guess.distance) + '\n';
  });

  shareText = shareText.trimEnd();

  // Copy to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(() => {
      shareFeedback.textContent = '✓ Copied to clipboard!';
      shareFeedback.classList.remove('hidden');
      setTimeout(() => {
        shareFeedback.classList.add('hidden');
      }, 2000);
    }).catch(() => {
      shareFeedback.textContent = '❌ Failed to copy';
      shareFeedback.classList.remove('hidden');
    });
  } else {
    // Fallback: show text to copy
    alert(`Copy this:\n\n${shareText}`);
  }
}

// Save game state to localStorage
function saveGameState() {
  try {
    localStorage.setItem('dishcoverGameState', JSON.stringify(gameState));
  } catch (e) {
    console.error('Failed to save game state:', e);
  }
}

// Load game state from localStorage
function loadGameState() {
  try {
    const saved = localStorage.getItem('dishcoverGameState');
    if (!saved) return null;
    return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to load game state:', e);
    return null;
  }
}

// Load statistics
function loadStatistics() {
  try {
    const saved = localStorage.getItem('dishcoverStats');
    if (!saved) {
      return {
        gamesPlayed: 0,
        gamesWon: 0,
        currentStreak: 0,
        maxStreak: 0,
        guessDistribution: [0, 0, 0, 0, 0, 0]
      };
    }
    return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to load statistics:', e);
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: [0, 0, 0, 0, 0, 0]
    };
  }
}

// Update statistics
function updateStatistics(won, guessCount) {
  let stats = loadStatistics();

  stats.gamesPlayed++;

  if (won) {
    stats.gamesWon++;
    stats.currentStreak++;
    stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
    stats.guessDistribution[guessCount - 1]++;
  } else {
    stats.currentStreak = 0;
  }

  try {
    localStorage.setItem('dishcoverStats', JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save statistics:', e);
  }

  updateStatsDisplay();
}

// Update statistics display
function updateStatsDisplay() {
  const stats = loadStatistics();
  gamesPlayed.textContent = stats.gamesPlayed;
  gamesWon.textContent = stats.gamesWon;
  currentStreak.textContent = stats.currentStreak;
}

// Autocomplete functions
function filterCountries(searchText) {
  if (!searchText) {
    return [];
  }

  const lowerSearch = searchText.toLowerCase();
  return gameState.availableCountries
    .filter(country => country.name.toLowerCase().includes(lowerSearch))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function showSuggestions(countries) {
  currentSuggestions = countries;
  selectedSuggestionIndex = -1;

  if (countries.length === 0) {
    hideSuggestions();
    return;
  }

  suggestionsContainer.innerHTML = '';
  countries.forEach((country, index) => {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.textContent = country.name;
    item.dataset.index = index;

    item.addEventListener('click', () => {
      selectCountry(country);
    });

    suggestionsContainer.appendChild(item);
  });

  suggestionsContainer.classList.remove('hidden');
}

function hideSuggestions() {
  suggestionsContainer.classList.add('hidden');
  currentSuggestions = [];
  selectedSuggestionIndex = -1;
}

function selectCountry(country) {
  selectedCountry = country;
  countryInput.value = country.name;
  hideSuggestions();
}

function handleKeyboardNavigation(e) {
  if (currentSuggestions.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedSuggestionIndex = Math.min(
      selectedSuggestionIndex + 1,
      currentSuggestions.length - 1
    );
    updateSelectedSuggestion();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
    updateSelectedSuggestion();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (selectedSuggestionIndex >= 0) {
      selectCountry(currentSuggestions[selectedSuggestionIndex]);
    } else if (selectedCountry) {
      handleGuess();
    }
  } else if (e.key === 'Escape') {
    hideSuggestions();
  }
}

function updateSelectedSuggestion() {
  const items = suggestionsContainer.querySelectorAll('.suggestion-item');
  items.forEach((item, index) => {
    if (index === selectedSuggestionIndex) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}

// Event listeners
guessBtn.addEventListener('click', handleGuess);
closeModalBtn.addEventListener('click', closeModal);
shareBtn.addEventListener('click', shareResults);

// Autocomplete input handling
countryInput.addEventListener('input', (e) => {
  const searchText = e.target.value.trim();
  selectedCountry = null;

  if (searchText) {
    const matches = filterCountries(searchText);
    showSuggestions(matches);
  } else {
    hideSuggestions();
  }
});

// Keyboard navigation
countryInput.addEventListener('keydown', handleKeyboardNavigation);

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
  if (!countryInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
    hideSuggestions();
  }
});

// Initialize game on page load
document.addEventListener('DOMContentLoaded', initializeGame);
